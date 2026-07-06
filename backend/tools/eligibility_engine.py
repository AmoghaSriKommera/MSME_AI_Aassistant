import json


with open(
    "data/metadata/msme_schemes_metadata.json",
    encoding="utf-8"
) as f:

    data = json.load(f)


SCHEMES = (
    data["central_schemes"]
    +
    data["telangana_state_schemes"]
)


def evaluate(profile):

    results = []

    for scheme in SCHEMES:

        score = 0

        matched = []

        if (
            profile.get(
                "women_owned"
            )
        ):

            score += 10

            matched.append(
                "Women Entrepreneur"
            )

        if (
            profile.get(
                "state"
            )
            ==
            "telangana"
        ):

            score += 10

            matched.append(
                "Telangana Business"
            )

        if (
            profile.get(
                "manufacturing"
            )
        ):

            score += 5

            matched.append(
                "Manufacturing Sector"
            )

        results.append(
            {
                "scheme_name":
                scheme[
                    "scheme_name"
                ],

                "score":
                score,

                "matched":
                matched
            }
        )

    results.sort(
        key=lambda x:
        x["score"],
        reverse=True
    )

    return results[:5]