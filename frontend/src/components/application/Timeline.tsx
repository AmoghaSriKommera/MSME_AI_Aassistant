interface Props {
    uploadedDocs: string[];
}

export default function Timeline({
    uploadedDocs
}: Props) {

    const timeline = [

        "Eligibility Verified",

        uploadedDocs.length >= 1
            ? "Documents Uploaded"
            : "Documents Pending",

        uploadedDocs.length >= 3
            ? "Ready For Submission"
            : "Waiting For Submission",

        uploadedDocs.length >= 5
            ? "Application Review"
            : "Review Pending",

        uploadedDocs.length === 6
            ? "Approval Ready"
            : "Approval Pending"
    ];

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
                Application Timeline
            </h2>

            <div className="
                space-y-5
            ">

                {
                    timeline.map(
                        event => (

                            <div
                                key={event}
                                className="
                                    flex
                                    gap-4
                                "
                            >

                                <div className="
                                    h-4
                                    w-4
                                    rounded-full
                                    bg-cyan-500
                                "/>

                                <div>
                                    {event}
                                </div>

                            </div>

                        )
                    )
                }

            </div>

        </div>

    );

}