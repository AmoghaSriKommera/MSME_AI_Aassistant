interface Props {
    result?: any;
}

export default function CompareSummary({
    result
}: Props) {

    if (!result) return null;

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
                AI Summary
            </h2>

            <p className="
                text-gray-300
                leading-8
            ">
                {result.response}
            </p>

        </div>

    );

}