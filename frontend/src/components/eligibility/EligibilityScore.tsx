interface Props {
    schemes?: string[];
}

export default function EligibilityScore({
    schemes = []
}: Props) {

    const score =
        Math.min(
            60 + schemes.length * 10,
            100
        );

    const message =
        score >= 90
            ? "Excellent eligibility profile"
            : score >= 75
                ? "Strong eligibility profile"
                : score >= 60
                    ? "Moderate eligibility profile"
                    : "Limited eligibility profile";

    return (

        <div className="
            rounded-3xl
            border
            border-green-500/20
            bg-white/5
            backdrop-blur-xl
            p-8
        ">

            <h2 className="
                text-2xl
                font-bold
                mb-4
            ">
                Eligibility Score
            </h2>

            <div className="
                text-7xl
                font-bold
                text-green-400
            ">
                {score}%
            </div>

            <div className="
                mt-4
                text-gray-400
            ">
                {message}
            </div>

        </div>

    );

}