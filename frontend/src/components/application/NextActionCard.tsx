interface Props {
    uploadedDocs: string[];
}

export default function NextActionCard({
    uploadedDocs
}: Props) {

    const remaining = [

        "Aadhaar Card",
        "PAN Card",
        "Business Registration",
        "Project Report",
        "Bank Statement",
        "GST Certificate"

    ].filter(
        doc =>
        !uploadedDocs.includes(
            doc
        )
    );

    const nextAction =
        remaining.length > 0
            ? `Upload ${remaining[0]}`
            : "Application ready for submission.";

    return (

        <div className="
            rounded-3xl
            border
            border-yellow-500/20
            bg-yellow-500/10
            p-8
            backdrop-blur-xl
        ">

            <h2 className="
                text-3xl
                font-bold
                text-yellow-400
            ">
                Next Action
            </h2>

            <p className="
                mt-4
                text-gray-300
            ">
                {nextAction}
            </p>

        </div>

    );

}