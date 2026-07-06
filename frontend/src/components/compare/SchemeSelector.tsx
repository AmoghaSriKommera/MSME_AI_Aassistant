import { useState } from "react";
import { api } from "../../services/api";

const schemes = [
    "PMEGP",
    "PMMY",
    "Stand-Up India",
    "CGTMSE",
    "T-IDEA",
    "TS-PRIDE"
];

interface Props {

    onResult: (
        result: any
    ) => void;

    onError: (
        error: string
    ) => void;

}

export default function SchemeSelector({
    onResult,
    onError
}: Props) {

    const [scheme1, setScheme1] =
        useState("");

    const [scheme2, setScheme2] =
        useState("");

    const [loading, setLoading] =
        useState(false);

    const compareSchemes =
        async () => {

            console.log(
                "COMPARE BUTTON CLICKED"
            );

            if (
                !scheme1 ||
                !scheme2
            ) {

                onError(
                    "Please select two schemes."
                );

                return;

            }

            if (
                scheme1 === scheme2
            ) {

                onError(
                    "Please select different schemes."
                );

                return;

            }

            setLoading(
                true
            );

            onError("");

            try {

                console.log(
                    "Sending compare request..."
                );

                const response =
                    await api.post(
                        "/compare",
                        {
                            query:
                                `Compare ${scheme1} and ${scheme2}`
                        }
                    );

                console.log(
                    "COMPARE RESPONSE:"
                );

                console.log(
                    response.data
                );

                onResult(
                    response.data
                );

            }

            catch (
                error: any
            ) {

                console.error(
                    "COMPARE ERROR:"
                );

                console.error(
                    error
                );

                if (
                    error.response?.status === 500
                ) {

                    onError(
                        "AI comparison service is currently unavailable. Please try again in a few minutes."
                    );

                }

                else {

                    onError(
                        "Unable to compare schemes currently."
                    );

                }

            }

            finally {

                setLoading(
                    false
                );

            }

        };

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
                text-2xl
                font-bold
                mb-6
            ">
                Select Schemes
            </h2>

            <div className="
                grid
                md:grid-cols-2
                gap-6
            ">

                <select
                    value={scheme1}
                    onChange={
                        e =>
                        setScheme1(
                            e.target.value
                        )
                    }
                    className="
                        rounded-xl
                        bg-black/30
                        p-4
                        outline-none
                    "
                >

                    <option value="">
                        Select Scheme 1
                    </option>

                    {
                        schemes.map(
                            scheme => (

                                <option
                                    key={scheme}
                                    value={scheme}
                                >
                                    {scheme}
                                </option>

                            )
                        )
                    }

                </select>

                <select
                    value={scheme2}
                    onChange={
                        e =>
                        setScheme2(
                            e.target.value
                        )
                    }
                    className="
                        rounded-xl
                        bg-black/30
                        p-4
                        outline-none
                    "
                >

                    <option value="">
                        Select Scheme 2
                    </option>

                    {
                        schemes.map(
                            scheme => (

                                <option
                                    key={scheme}
                                    value={scheme}
                                >
                                    {scheme}
                                </option>

                            )
                        )
                    }

                </select>

            </div>

            <button
                onClick={
                    compareSchemes
                }
                disabled={
                    loading
                }
                className="
                    mt-6
                    w-full
                    rounded-xl
                    bg-cyan-500
                    p-4
                    font-bold
                    transition-all
                    hover:shadow-[0_0_30px_cyan]
                    disabled:opacity-50
                    disabled:cursor-not-allowed
                "
            >

                {
                    loading
                    ?
                    "Comparing Government Schemes..."
                    :
                    "Compare Schemes"
                }

            </button>

        </div>

    );

}