import { useState } from "react";
import { api } from "../../services/api";

interface Props {
    onResult: (
        result: any
    ) => void;
}

export default function ApplicationStepper({
    onResult
}: Props) {

    const [scheme, setScheme] =
        useState("");

    const [loading, setLoading] =
        useState(false);

    const generateChecklist =
        async () => {

            if (!scheme) {
                alert(
                    "Please enter a scheme name."
                );
                return;
            }

            setLoading(true);

            try {

                const response =
                    await api.post(
                        "/application",
                        {
                            query:
                                `How do I apply for ${scheme}?`
                        }
                    );


                console.log(
                    "APPLICATION RESPONSE:",
                    response.data
                );
                onResult(
                    response.data
                );

            }

            catch (error) {

                console.error(
                    error
                );

            }

            finally {

                setLoading(false);

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
                mb-8
            ">
                Application Journey
            </h2>

            <div className="
                flex
                gap-4
            ">

                <input
                    value={scheme}
                    onChange={
                        e =>
                        setScheme(
                            e.target.value
                        )
                    }
                    placeholder="
                        Enter Scheme Name
                        (Example: PMEGP)
                    "
                    className="
                        flex-1
                        rounded-xl
                        bg-black/30
                        p-4
                        outline-none
                    "
                />

                <button
                    onClick={
                        generateChecklist
                    }
                    disabled={
                        loading
                    }
                    className="
                        rounded-xl
                        bg-cyan-500
                        px-8
                        font-bold
                        transition-all
                        hover:shadow-[0_0_30px_cyan]
                        disabled:opacity-50
                    "
                >

                    {
                        loading
                        ? "Generating..."
                        : "Generate Checklist"
                    }

                </button>

            </div>

        </div>

    );

}