const stats = [
    {
        title: "Central Schemes",
        value: "183"
    },
    {
        title: "State Schemes",
        value: "64"
    },
    {
        title: "Women Focused",
        value: "42"
    },
    {
        title: "Startup Schemes",
        value: "91"
    }
];

export default function StatsCards() {

    return (

        <div>

            <h2 className="
                text-3xl
                font-bold
                mb-6
            ">
                MSME Insights
            </h2>

            <div className="
                grid
                grid-cols-1
                md:grid-cols-2
                lg:grid-cols-4
                gap-6
            ">

                {
                    stats.map(
                        stat => (

                            <div
                                key={stat.title}
                                className="
                                    rounded-3xl
                                    border
                                    border-cyan-500/20
                                    bg-white/5
                                    backdrop-blur-xl
                                    p-6
                                    hover:shadow-[0_0_40px_rgba(0,255,255,0.15)]
                                    transition-all
                                "
                            >

                                <div className="
                                    text-gray-400
                                ">
                                    {stat.title}
                                </div>

                                <div className="
                                    mt-4
                                    text-5xl
                                    font-bold
                                    text-cyan-400
                                ">
                                    {stat.value}
                                </div>

                            </div>

                        )
                    )
                }

            </div>

        </div>

    );

}