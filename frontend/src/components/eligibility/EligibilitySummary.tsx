interface Props {
    summary?: string;
}

export default function EligibilitySummary({
    summary
}: Props) {

    const shortSummary =
        summary
            ?.replace(/\*/g, "")
            .split("\n")
            .filter(
                line =>
                    line.trim() !== ""
            )
            .slice(0, 4)
            .join(" ")

            ||

            "Analyze a business profile to generate an AI eligibility summary.";

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
                {shortSummary}
            </p>

        </div>

    );

}