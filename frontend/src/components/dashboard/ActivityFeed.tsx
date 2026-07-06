const activities = [
    "✅ 15 users checked PMEGP eligibility",
    "📊 8 users compared PMEGP and PMMY",
    "🏭 5 users explored TS-iPASS",
    "📄 3 users started an application"
];

export default function ActivityFeed() {

    return (

        <div>

            <h2 className="
                text-3xl
                font-bold
                mb-6
            ">
                Platform Activity
            </h2>

            <div className="
                space-y-4
            ">

                {
                    activities.map(
                        (
                            activity,
                            index
                        ) => (

                            <div
                                key={index}
                                className="
                                    rounded-2xl
                                    border
                                    border-cyan-500/20
                                    bg-white/5
                                    backdrop-blur-xl
                                    p-5
                                    hover:bg-cyan-500/10
                                    transition-all
                                "
                            >

                                {activity}

                            </div>

                        )
                    )
                }

            </div>

        </div>

    );

}