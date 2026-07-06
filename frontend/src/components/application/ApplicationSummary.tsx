interface Props {
    uploadedDocs: string[];
}

export default function ApplicationSummary({
    uploadedDocs
}: Props) {

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
                mb-4
            ">
                AI Assistant Summary
            </h2>

            <p className="
                leading-8
                text-gray-300
            ">

                You have uploaded
                {" "}
                <span className="
                    text-cyan-400
                    font-bold
                ">
                    {uploadedDocs.length}
                </span>
                {" "}
                out of 6 required documents.

                {
                    uploadedDocs.length === 6
                    &&
                    " Your application is ready for submission."
                }

            </p>

        </div>

    );

}