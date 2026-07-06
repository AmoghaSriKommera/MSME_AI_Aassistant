interface Props {
    uploadedDocs:string[];
}

const docs = [
    "Aadhaar Card",
    "PAN Card",
    "Business Registration",
    "Project Report",
    "Bank Statement",
    "GST Certificate"
];

export default function DocumentChecklist({
    uploadedDocs
}: Props) {

    return (

        <div className="
            rounded-3xl
            border
            border-purple-500/20
            bg-white/5
            p-8
            backdrop-blur-xl
        ">

            <h2 className="
                text-2xl
                font-bold
                mb-6
            ">
                Document Checklist
            </h2>

            <div className="
                space-y-4
            ">

                {
                    docs.map(
                        doc => {

                            const uploaded =
                                uploadedDocs.includes(
                                    doc
                                );

                            return (

                                <div
                                    key={doc}
                                    className="
                                        flex
                                        justify-between
                                        rounded-xl
                                        border
                                        border-white/10
                                        p-4
                                    "
                                >

                                    <span>
                                        {doc}
                                    </span>

                                    <span className={
                                        uploaded
                                        ? "text-green-400"
                                        : "text-red-400"
                                    }>

                                        {
                                            uploaded
                                            ? "Uploaded"
                                            : "Missing"
                                        }

                                    </span>

                                </div>

                            );

                        }
                    )
                }

            </div>

        </div>

    );

}