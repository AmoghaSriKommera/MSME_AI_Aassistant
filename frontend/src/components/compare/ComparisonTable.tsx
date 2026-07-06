interface Props {
    result?: any;
}

export default function ComparisonTable({
    result
}: Props) {

    if (
        !result ||
        !result.loan_amount
    ) {
        return null;
    }

    const scheme1 =
        Object.keys(
            result.loan_amount
        )[0];

    const scheme2 =
        Object.keys(
            result.loan_amount
        )[1];

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
                Comparison Table
            </h2>

            <table className="
                w-full
                text-left
            ">

                <thead>

                    <tr className="
                        border-b
                        border-white/10
                    ">

                        <th className="p-4">
                            Criteria
                        </th>

                        <th className="p-4">
                            {scheme1}
                        </th>

                        <th className="p-4">
                            {scheme2}
                        </th>

                    </tr>

                </thead>

                <tbody>

                    <tr>
                        <td className="p-4">
                            Loan Amount
                        </td>

                        <td className="p-4">
                            {
                                result.loan_amount[
                                    scheme1
                                ]
                            }
                        </td>

                        <td className="p-4">
                            {
                                result.loan_amount[
                                    scheme2
                                ]
                            }
                        </td>
                    </tr>

                    <tr>
                        <td className="p-4">
                            Subsidy
                        </td>

                        <td className="p-4">
                            {
                                result.subsidy[
                                    scheme1
                                ]
                            }
                        </td>

                        <td className="p-4">
                            {
                                result.subsidy[
                                    scheme2
                                ]
                            }
                        </td>
                    </tr>

                    <tr>
                        <td className="p-4">
                            Eligibility
                        </td>

                        <td className="p-4">
                            {
                                result.eligibility[
                                    scheme1
                                ]
                            }
                        </td>

                        <td className="p-4">
                            {
                                result.eligibility[
                                    scheme2
                                ]
                            }
                        </td>
                    </tr>

                    <tr>
                        <td className="p-4">
                            Best For
                        </td>

                        <td className="p-4">
                            {
                                result.best_for[
                                    scheme1
                                ]
                            }
                        </td>

                        <td className="p-4">
                            {
                                result.best_for[
                                    scheme2
                                ]
                            }
                        </td>
                    </tr>

                </tbody>

            </table>

        </div>

    );

}