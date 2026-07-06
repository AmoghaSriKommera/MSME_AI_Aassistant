const schemes = [
    {
        name: "PMEGP",
        subtitle:
            "Employment Generation",
        subsidy:
            "35%"
    },
    {
        name: "PMMY",
        subtitle:
            "Collateral Free Loans",
        subsidy:
            "0%"
    },
    {
        name: "CGTMSE",
        subtitle:
            "Credit Guarantee",
        subsidy:
            "75%"
    }
];

export default function CentralSchemes() {

    return (

        <div>

            <h2 className="
                text-3xl
                font-bold
                mb-6
            ">
                Top Central Government Schemes
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
                                    border-cyan-500/20
                                    bg-white/5
                                    backdrop-blur-xl
                                    p-6
                                    hover:shadow-[0_0_30px_rgba(0,255,255,0.15)]
                                    transition-all
                                "
                            >

                                <h3 className="
                                    text-2xl
                                    font-bold
                                    text-cyan-400
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
                                    text-cyan-400
                                    font-bold
                                ">
                                    Subsidy up to
                                    {" "}
                                    {scheme.subsidy}
                                </div>

                            </div>

                        )
                    )
                }

            </div>

        </div>

    );

}