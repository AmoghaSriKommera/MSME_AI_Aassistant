interface Props {
    result?: any;
}

export default function WinnerCard({
    result
}: Props) {

    if (!result) return null;

    const winner =
        result.winner ||
        "No clear winner";

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
                mb-6
            ">
                Recommended Winner
            </h2>

            <div className="
                flex
                items-center
                gap-4
            ">

                <div className="
                    text-5xl
                ">
                    🏆
                </div>

                <div>

                    <div className="
                        text-3xl
                        font-bold
                        text-green-400
                    ">
                        {winner}
                    </div>

                    <div className="
                        mt-2
                        text-gray-400
                        text-sm
                    ">
                        Based on subsidy,
                        eligibility and overall benefits.
                    </div>

                </div>

            </div>

        </div>

    );

}