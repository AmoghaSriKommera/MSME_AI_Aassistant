def matches_women(profile, scheme):
    return (
        not scheme.get(
            "women_only",
            False
        )
        or profile.get(
            "women_owned",
            False
        )
    )


def matches_state(profile, scheme):

    state = scheme.get(
        "state"
    )

    if not state:
        return True

    return (
        profile.get(
            "state",
            ""
        ).lower()
        ==
        state.lower()
    )


def matches_business_type(
        profile,
        scheme
):

    supported = scheme.get(
        "supported_sectors",
        []
    )

    if not supported:
        return True

    return (
        profile.get(
            "business_type"
        )
        in supported
    )