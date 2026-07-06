interface Props {
    result?: any;
}

export default function RecommendationCard({
    result
}: Props) {

    if (
        !result ||
        !result.recommendation
    ) {
        return null;
    }

    return (

        <div className="
            rounded-3xl
            border
            border-purple-500/20
            bg-white/5
            backdrop-blur-xl
            p-8
        ">

            <h2 className="
                text-2xl
                font-bold
                mb-6
            ">
                Recommendation
            </h2>

            <p className="
                text-gray-300
                leading-8
                text-lg
            ">
                {result.recommendation}
            </p>

        </div>

    );

}