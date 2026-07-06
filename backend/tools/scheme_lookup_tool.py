import json


with open(
    "data/metadata/msme_schemes_metadata.json",
    encoding="utf-8"
) as f:

    data = json.load(f)


ALL_SCHEMES = (
    data["central_schemes"]
    +
    data["telangana_state_schemes"]
)


def get_scheme_by_name(
        scheme_name
):

    for scheme in ALL_SCHEMES:

        if (
            scheme_name.lower()
            in scheme[
                "scheme_name"
            ].lower()
        ):

            return scheme

    return None