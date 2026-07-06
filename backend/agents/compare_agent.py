from backend.tools.scheme_extractor import (
    extract_schemes
)

from backend.tools.compare_tool import (
    compare_schemes
)

from backend.llm.groq_client import (
    groq_client
)

from backend.session.session_store import (
    SESSION
)

import json


def compare_agent(
    state
):

    profile = SESSION[
        "user_profile"
    ]

    schemes = extract_schemes(
        state["query"]
    )
    
    print(
        "\nSCHEMES EXTRACTED:"
    )

    print(
        schemes
    )

    if len(schemes) < 2:

        state["response"] = {
            "error":
            "Unable to identify two schemes."
        }

        return state

    comparison = compare_schemes(
        schemes[0],
        schemes[1]
    )
    print("\nCOMPARISON DATA:")
    print(comparison)
   
    prompt = f"""
You are an MSME expert.

User Profile:

{profile}

Compare the following schemes:

{comparison}

Return ONLY valid JSON.

Return EXACTLY in this format:

{{
    "scheme_1_summary": "",
    "scheme_2_summary": "",
    "loan_amount": {{
        "{schemes[0]}": "",
        "{schemes[1]}": ""
    }},
    "subsidy": {{
        "{schemes[0]}": "",
        "{schemes[1]}": ""
    }},
    "eligibility": {{
        "{schemes[0]}": "",
        "{schemes[1]}": ""
    }},
    "best_for": {{
        "{schemes[0]}": "",
        "{schemes[1]}": ""
    }},
    "major_difference": "",
    "profile_recommendation": ""
}}

Rules:
1. scheme_1_summary should explain what the first scheme is.
2. scheme_2_summary should explain what the second scheme is.
3. best_for should describe ideal businesses.
4. major_difference should explain how they differ.
5. profile_recommendation should explain which type of user should choose which scheme.
6. Return ONLY JSON.
7. No markdown.
8. No explanations outside JSON.
"""

    print("\n========== COMPARE PROMPT ==========\n")
    print(prompt)

    answer = groq_client.generate(
        prompt,
        fast=True
    )

    print("\n========== RAW COMPARE RESPONSE ==========\n")
    print(answer)

    try:

        answer = (
            answer
            .replace(
                "```json",
                ""
            )
            .replace(
                "```",
                ""
            )
            .strip()
        )

        parsed = json.loads(
            answer
        )

        print(
            "\n========== PARSED COMPARE RESPONSE ==========\n"
        )

        print(
            parsed
        )

        state[
            "comparison"
        ] = parsed

        state[
            "response"
        ] = parsed

    except Exception as e:

        print(
            "\n========== COMPARE JSON ERROR ==========\n"
        )

        print(e)

        print(
            "\nFailed Response:\n"
        )

        print(answer)

        state[
            "response"
        ] = {
            "error":
            "Unable to generate comparison."
        }

    return state