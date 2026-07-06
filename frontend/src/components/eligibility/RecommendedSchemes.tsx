interface Props {
    schemes?: any[];
}

export default function RecommendedSchemes({
    schemes = []
}: Props) {

    return (

        <div className="
            rounded-3xl
            border
            border-cyan-500/20
            bg-white/5
            backdrop-blur-xl
            p-8
        ">

            <h2 className="
                text-3xl
                font-bold
                mb-6
            ">
                Recommended Schemes
            </h2>

            {
                schemes.length === 0 ? (

                    <div className="
                        text-gray-400
                    ">
                        No recommendations available yet.
                    </div>

                ) : (

                    <div className="
                        space-y-4
                    ">

                        {
                            schemes.map(
                                (
                                    scheme,
                                    index
                                ) => (

                                    <div
                                        key={index}
                                        className="
                                            rounded-2xl
                                            border
                                            border-cyan-500/20
                                            p-5
                                        "
                                    >

                                        <div className="
                                            flex
                                            justify-between
                                            items-center
                                        ">

                                            <div className="
                                                text-xl
                                                font-bold
                                            ">
                                                {
                                                    scheme.scheme_name
                                                }
                                            </div>

                                            <div className="
                                                text-cyan-400
                                                font-bold
                                            ">
                                                {
                                                    scheme.score
                                                }%
                                            </div>

                                        </div>

                                        <div className="
                                            mt-4
                                            h-3
                                            rounded-full
                                            bg-gray-800
                                        ">

                                            <div
                                                className="
                                                    h-3
                                                    rounded-full
                                                    bg-cyan-400
                                                "
                                                style={{
                                                    width:
                                                        `${Math.max(
                                                            scheme.score,
                                                            5
                                                        )}%`
                                                }}
                                            />

                                        </div>

                                    </div>

                                )
                            )
                        }

                    </div>

                )
            }

        </div>

    );

}