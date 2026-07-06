interface Props {
    profile?: any;
}

export default function ProfileCard({
    profile
}: Props) {

    return (

        <div className="
            rounded-3xl
            border
            border-purple-500/20
            bg-white/5
            backdrop-blur-xl
            p-8
        ">

            <h2 className="
                text-3xl
                font-bold
                mb-6
            ">
                Profile Summary
            </h2>

            {
                !profile ? (

                    <div className="
                        text-gray-400
                    ">
                        Fill in your business profile and click
                        Analyze Eligibility to generate insights.
                    </div>

                ) : (

                    <div className="
                        space-y-4
                    ">

                        <div className="
                            flex
                            justify-between
                        ">
                            <span className="text-gray-400">
                                Age
                            </span>

                            <span>
                                {profile.age || "N/A"}
                            </span>
                        </div>

                        <div className="
                            flex
                            justify-between
                        ">
                            <span className="text-gray-400">
                                Gender
                            </span>

                            <span>
                                {profile.gender || "N/A"}
                            </span>
                        </div>

                        <div className="
                            flex
                            justify-between
                        ">
                            <span className="text-gray-400">
                                State
                            </span>

                            <span>
                                {profile.state || "N/A"}
                            </span>
                        </div>

                        <div className="
                            flex
                            justify-between
                        ">
                            <span className="text-gray-400">
                                District
                            </span>

                            <span>
                                {profile.district || "N/A"}
                            </span>
                        </div>

                        <div className="
                            flex
                            justify-between
                        ">
                            <span className="text-gray-400">
                                Business Type
                            </span>

                            <span>
                                {
                                    profile.business_type ||
                                    (
                                        profile.manufacturing
                                            ? "Manufacturing"
                                            : profile.service_sector
                                                ? "Service"
                                                : "N/A"
                                    )
                                }
                            </span>
                        </div>

                        <div className="
                            flex
                            justify-between
                        ">
                            <span className="text-gray-400">
                                Startup
                            </span>

                            <span>
                                {
                                    profile.startup
                                        ? "Yes"
                                        : "No"
                                }
                            </span>
                        </div>

                        <div className="
                            flex
                            justify-between
                        ">
                            <span className="text-gray-400">
                                Women Owned
                            </span>

                            <span>
                                {
                                    profile.women_owned
                                        ? "Yes"
                                        : "No"
                                }
                            </span>
                        </div>

                        <div className="
                            flex
                            justify-between
                        ">
                            <span className="text-gray-400">
                                Investment
                            </span>

                            <span>
                                ₹
                                {
                                    profile.investment_amount ||
                                    "N/A"
                                }
                            </span>
                        </div>

                    </div>

                )
            }

        </div>

    );

}