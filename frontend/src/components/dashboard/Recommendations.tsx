const recommendations = [
    {
        scheme: "PMEGP",
        match: "96%"
    },
    {
        scheme: "Stand Up India",
        match: "91%"
    },
    {
        scheme: "TS-PRIDE",
        match: "87%"
    }
];

export default function Recommendations() {

    return (

        <div>

            <h2 className="
                text-3xl
                font-bold
                mb-6
            ">
                Recommended For You
            </h2>

            <div className="
                grid
                grid-cols-1
                md:grid-cols-2
                lg:grid-cols-3
                gap-6
            ">

                {
                    recommendations.map(
                        recommendation => (

                            <div
                                key={
                                    recommendation.scheme
                                }
                                className="
                                    rounded-3xl
                                    border
                                    border-purple-500/20
                                    bg-white/5
                                    backdrop-blur-xl
                                    p-6
                                    hover:shadow-[0_0_40px_rgba(168,85,247,0.25)]
                                    transition-all
                                "
                            >

                                <div className="
                                    text-2xl
                                    font-bold
                                    text-purple-400
                                ">
                                    {
                                        recommendation.scheme
                                    }
                                </div>

                                <div className="
                                    mt-4
                                    text-cyan-400
                                    font-bold
                                    text-lg
                                ">
                                    {
                                        recommendation.match
                                    } Match
                                </div>

                                <div className="
                                    mt-3
                                    text-gray-400
                                ">
                                    Based on your profile
                                </div>

                            </div>

                        )
                    )
                }

            </div>

        </div>

    );

}