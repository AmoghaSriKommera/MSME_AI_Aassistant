import json
import re

from backend.llm.groq_client import groq_client


def extract_profile(query):

    prompt = f"""
Extract the user profile from the query.

Return ONLY valid JSON.

Do not include markdown.
Do not include explanations.
Do not include ```json blocks.

Return exactly this schema:

{{
    "age": null,
    "gender": null,
    "state": null,
    "district": null,
    "category": null,
    "business_type": null,
    "business_stage": null,
    "annual_turnover": null,
    "investment_amount": null,
    "women_owned": false,
    "startup": false,
    "manufacturing": false,
    "service_sector": false,
    "existing_business": false,
    "first_time_entrepreneur": false
}}

Query:

{query}
"""

    response = groq_client.generate(
        prompt,
        fast=True
    )

    print("\nLLM PROFILE RESPONSE:")
    print(response)

    json_match = re.search(
        r"\{.*\}",
        response,
        re.DOTALL
    )

    if not json_match:

        return {}

    try:
        return json.loads(
            json_match.group()
        )

    except Exception as e:

        print(
            f"JSON Parsing Error: {e}"
        )

        return {}