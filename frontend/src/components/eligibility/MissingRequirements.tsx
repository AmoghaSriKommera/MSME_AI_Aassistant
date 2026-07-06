interface Props {
    requirements?: string[];
}

export default function MissingRequirements({
    requirements = []
}: Props) {

    return (

        <div className="
            rounded-3xl
            border
            border-red-500/20
            bg-white/5
            backdrop-blur-xl
            p-8
        ">

            <h2 className="
                text-3xl
                font-bold
                mb-6
            ">
                Missing Requirements
            </h2>

            {
                requirements.length === 0 ? (

                    <div className="
                        text-green-400
                    ">
                        No missing requirements detected.
                    </div>

                ) : (

                    <div className="
                        space-y-4
                    ">

                        {
                            requirements.map(
                                (
                                    item,
                                    index
                                ) => (

                                    <div
                                        key={index}
                                        className="
                                            rounded-xl
                                            border
                                            border-red-500/20
                                            p-4
                                        "
                                    >
                                        {item}
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