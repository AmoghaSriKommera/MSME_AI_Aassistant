interface Props {
    profile: any;
}

export default function ExtractedProfileCard({
    profile
}: Props) {

    if (
        Object.keys(
            profile
        ).length === 0
    ) {

        return null;

    }

    return (

        <div className="
            rounded-3xl
            border
            border-cyan-500/20
            bg-white/5
            p-8
            backdrop-blur-xl
        ">

            <h2 className="
                text-2xl
                font-bold
                mb-6
            ">
                Extracted Profile Information
            </h2>

            <div className="
                space-y-3
            ">

                {
                    Object.entries(
                        profile
                    ).map(
                        (
                            [key, value]
                        ) => (

                            <div
                                key={key}
                                className="
                                    flex
                                    justify-between
                                "
                            >

                                <div>
                                    {
                                        key.replaceAll(
                                            "_",
                                            " "
                                        )
                                    }
                                </div>

                                <div className="
                                    text-cyan-400
                                ">
                                    {
                                        String(
                                            value
                                        )
                                    }
                                </div>

                            </div>

                        )
                    )
                }

            </div>

        </div>

    );

}