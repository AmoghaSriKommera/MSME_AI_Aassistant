def normalize_profile(profile):

    if profile.get("state") == "Hyderabad":
        profile["district"] = "Hyderabad"
        profile["state"] = "Telangana"

    if profile.get("category") == "manufacturing":
        profile["business_type"] = "manufacturing"
        profile["category"] = None

    if profile.get("gender") == "woman":
        profile["gender"] = "female"

    return profile