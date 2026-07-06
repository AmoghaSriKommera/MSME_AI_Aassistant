import profile

from backend.tools.profile_extractor import (
    extract_profile
)

from backend.tools.eligibility_engine import (
    evaluate
)

from backend.llm.groq_client import (
    groq_client
)

from backend.tools.profile_normalizer import (
    normalize_profile
)
from backend.session.session_store import SESSION

import json
import re


def eligibility_agent(state):

    profile = extract_profile(
        state["query"]
    )

    profile = normalize_profile(
        profile
    )
    
    SESSION[
        "user_profile"
    ] = profile

    state[
        "user_profile"
    ] = profile

    schemes = evaluate(
        profile
    )
    SESSION[
        "recommended_schemes"
    ] = schemes
    state[
        "eligible_schemes"
    ] = schemes

    missing_requirements = []

    if not profile.get(
        "annual_turnover"
    ):
        missing_requirements.append(
            "Annual Turnover Details"
        )

    if not profile.get(
        "category"
    ):
        missing_requirements.append(
            "Category Certificate (if applicable)"
        )

    if not profile.get(
        "business_stage"
    ):
        missing_requirements.append(
            "Business Stage Information"
        )

    if not profile.get(
        "district"
    ):
        missing_requirements.append(
            "Business Location Details"
        )

    if not profile.get(
        "existing_business"
    ):
        missing_requirements.append(
            "Business Registration Details"
        )

    if not profile.get(
        "investment_amount"
    ):
        missing_requirements.append(
            "Investment Amount Information"
        )

    prompt = f"""
You are an MSME expert.

User Profile:

{profile}

Eligible Schemes:

{schemes}

Generate ONLY valid JSON.

Return JSON only in this exact format:

{{
    "summary": "",
    "recommended_scheme": "",
    "next_step": ""
}}

Rules:

1. summary should contain a short eligibility explanation.
2. recommended_scheme should contain the best scheme name.
3. next_step should contain the next action for the user.
4. Return ONLY JSON.
5. Do not return markdown.
6. Do not return explanations outside JSON.
"""

    print(
        "\n========== ELIGIBILITY PROMPT ==========\n"
    )

    print(
        prompt
    )

    answer = groq_client.generate(
        prompt
    )

    print(
        "\n========== ELIGIBILITY RESPONSE ==========\n"
    )

    print(
        answer
    )

    try:

        cleaned_answer = answer

        cleaned_answer = cleaned_answer.replace(
            "```json",
            ""
        )

        cleaned_answer = cleaned_answer.replace(
            "```",
            ""
        )

        cleaned_answer = cleaned_answer.strip()

        json_match = re.search(
            r"\{.*\}",
            cleaned_answer,
            re.DOTALL
        )

        if json_match:

            parsed_response = json.loads(
                json_match.group()
            )

        else:

            parsed_response = {
                "summary":
                cleaned_answer
            }

    except Exception as e:

        print(
            "\nJSON Parsing Failed:\n",
            e
        )

        parsed_response = {
            "summary":
            answer,
            "recommended_scheme":
            "",
            "next_step":
            ""
        }

    parsed_response[
        "missing_requirements"
    ] = missing_requirements

    state[
        "summary"
    ] = parsed_response.get(
        "summary",
        ""
    )

    state[
        "recommended_scheme"
    ] = parsed_response.get(
        "recommended_scheme",
        ""
    )

    state[
        "next_step"
    ] = parsed_response.get(
        "next_step",
        ""
    )

    state[
        "missing_requirements"
    ] = parsed_response.get(
        "missing_requirements",
        []
    )

    state[
        "response"
    ] = parsed_response

    return state