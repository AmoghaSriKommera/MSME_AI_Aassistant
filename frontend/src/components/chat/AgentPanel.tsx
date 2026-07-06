interface Props {
    route?: string;
    loading?: boolean;
}

export default function AgentPanel({
    route,
    loading
}: Props) {

    const agents = [

        "Router Agent",

        route === "eligibility"
            ? "Eligibility Agent"
            : null,

        route === "compare"
            ? "Comparison Agent"
            : null,

        "Retriever Agent",

        "Response Generator"

    ].filter(Boolean);

    return (

        <div className="
            hidden
            xl:block
            w-80
            rounded-3xl
            border
            border-cyan-500/20
            bg-white/5
            backdrop-blur-xl
            p-6
            h-fit
            shadow-[0_0_40px_rgba(0,255,255,0.08)]
        ">

            <h2 className="
                text-xl
                font-bold
                text-cyan-400
                mb-6
            ">
                Agent Activity
            </h2>

            <div className="
                space-y-4
            ">

                {agents.map(
                    (
                        agent,
                        index
                    ) => (

                        <div
                            key={index}
                            className="
                                flex
                                items-center
                                gap-3
                            "
                        >

                            <div className={`
                                w-3
                                h-3
                                rounded-full
                                ${
                                    loading
                                    ? "bg-yellow-400 animate-pulse"
                                    : "bg-green-400"
                                }
                            `} />

                            <span className="
                                text-gray-300
                            ">
                                {agent}
                            </span>

                        </div>

                    )
                )}

            </div>

        </div>

    );
}