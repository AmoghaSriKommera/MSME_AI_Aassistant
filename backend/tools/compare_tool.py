from backend.tools.scheme_lookup_tool import (
    get_scheme_by_name
)


def compare_schemes(
        scheme1,
        scheme2
):

    s1 = get_scheme_by_name(
        scheme1
    )

    s2 = get_scheme_by_name(
        scheme2
    )

    return {

        "scheme_1": {
            "name":
                s1.get(
                    "scheme_name",
                    scheme1
                ),

            "benefits":
                s1.get(
                    "benefits",
                    ""
                ),

            "eligibility":
                s1.get(
                    "eligibility",
                    ""
                ),

            "loan_amount":
                s1.get(
                    "loan_amount",
                    ""
                ),

            "subsidy":
                s1.get(
                    "subsidy",
                    ""
                )
        },

        "scheme_2": {
            "name":
                s2.get(
                    "scheme_name",
                    scheme2
                ),

            "benefits":
                s2.get(
                    "benefits",
                    ""
                ),

            "eligibility":
                s2.get(
                    "eligibility",
                    ""
                ),

            "loan_amount":
                s2.get(
                    "loan_amount",
                    ""
                ),

            "subsidy":
                s2.get(
                    "subsidy",
                    ""
                )
        }
    }