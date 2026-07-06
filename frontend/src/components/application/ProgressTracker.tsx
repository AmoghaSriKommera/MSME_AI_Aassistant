interface Props {
    uploadedDocs: string[];
}

const TOTAL_DOCUMENTS = 6;

export default function ProgressTracker({
    uploadedDocs
}: Props) {

    const completed =
        new Set(
            uploadedDocs
        ).size;

    const percentage =
        Math.round(
            (
                completed
                /
                TOTAL_DOCUMENTS
            ) * 100
        );
    return (

        <div className="
            rounded-3xl
            border
            border-green-500/20
            bg-white/5
            p-8
            backdrop-blur-xl
        ">

            <h2 className="
                text-2xl
                font-bold
                mb-6
            ">
                Completion Progress
            </h2>

            <div className="
                h-6
                rounded-full
                bg-black/30
            ">

                <div
                    className="
                        h-6
                        rounded-full
                        bg-gradient-to-r
                        from-cyan-500
                        to-purple-500
                        shadow-[0_0_25px_#06b6d4]
                        transition-all
                        duration-500
                    "
                    style={{
                        width:
                        `${percentage}%`
                    }}
                />

            </div>

            <div className="
                mt-4
                text-gray-400
            ">
                {percentage}% completed
            </div>

        </div>

    );

}