const schemes = [
    {
        name: "TS-iPASS",
        subtitle:
            "Industrial Approval",
        benefit:
            "Fast Track Approval"
    },
    {
        name: "T-IDEA",
        subtitle:
            "Industrial Development",
        benefit:
            "Investment Subsidy"
    },
    {
        name: "TS-PRIDE",
        subtitle:
            "Entrepreneur Support",
        benefit:
            "Special Category Benefits"
    }
];

export default function StateSchemes() {

    return (

        <div>

            <h2 className="
                text-3xl
                font-bold
                mb-6
            ">
                Top Telangana Schemes
            </h2>

            <div className="
                grid
                grid-cols-1
                md:grid-cols-2
                lg:grid-cols-3
                gap-6
            ">

                {
                    schemes.map(
                        scheme => (

                            <div
                                key={scheme.name}
                                className="
                                    rounded-3xl
                                    border
                                    border-purple-500/20
                                    bg-white/5
                                    backdrop-blur-xl
                                    p-6
                                    hover:shadow-[0_0_30px_rgba(168,85,247,0.15)]
                                    transition-all
                                "
                            >

                                <h3 className="
                                    text-2xl
                                    font-bold
                                    text-purple-400
                                ">
                                    {scheme.name}
                                </h3>

                                <p className="
                                    mt-3
                                    text-gray-400
                                ">
                                    {scheme.subtitle}
                                </p>

                                <div className="
                                    mt-4
                                    text-purple-400
                                    font-bold
                                ">
                                    {scheme.benefit}
                                </div>

                            </div>

                        )
                    )
                }

            </div>

        </div>

    );

}