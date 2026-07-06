import { useState } from "react";
import { api } from "../../services/api";

interface Props {

    onResult: (
        result: any
    ) => void;

    loading: boolean;

    setLoading: (
        value: boolean
    ) => void;

    setError: (
        value: string
    ) => void;

}

export default function EligibilityForm({
    onResult,
    loading,
    setLoading,
    setError
}: Props) {

    const [profile, setProfile] =
        useState({
            age: "",
            gender: "",
            state: "",
            district: "",
            business_type: "",
            annual_turnover: "",
            investment_amount: "",
            category: ""
        });

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement>
    ) => {

        setProfile({
            ...profile,
            [e.target.name]:
                e.target.value
        });

    };

    const analyzeEligibility =
        async () => {

            if (loading) return;

            setLoading(true);

            setError("");

            try {

                const response =
                    await api.post(
                        "/eligibility",
                        profile
                    );

                onResult(
                    response.data
                );

            }

            catch (error: any) {

                console.error(error);

                if (
                    error.response?.status === 500
                ) {

                    setError(
                        "AI service temporarily unavailable. Please try again in a few minutes."
                    );

                }

                else {

                    setError(
                        "Unable to analyze eligibility currently."
                    );

                }

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
                text-3xl
                font-bold
                mb-6
            ">
                Business Profile
            </h2>

            <div className="
                grid
                grid-cols-2
                gap-4
            ">

                <input
                    name="age"
                    value={profile.age}
                    onChange={handleChange}
                    placeholder="Age"
                    className="
                        rounded-xl
                        bg-black/30
                        p-4
                        outline-none
                    "
                />

                <input
                    name="gender"
                    value={profile.gender}
                    onChange={handleChange}
                    placeholder="Gender"
                    className="
                        rounded-xl
                        bg-black/30
                        p-4
                        outline-none
                    "
                />

                <input
                    name="state"
                    value={profile.state}
                    onChange={handleChange}
                    placeholder="State"
                    className="
                        rounded-xl
                        bg-black/30
                        p-4
                        outline-none
                    "
                />

                <input
                    name="district"
                    value={profile.district}
                    onChange={handleChange}
                    placeholder="District"
                    className="
                        rounded-xl
                        bg-black/30
                        p-4
                        outline-none
                    "
                />

                <input
                    name="business_type"
                    value={profile.business_type}
                    onChange={handleChange}
                    placeholder="Business Type"
                    className="
                        rounded-xl
                        bg-black/30
                        p-4
                        outline-none
                    "
                />

                <input
                    name="annual_turnover"
                    value={profile.annual_turnover}
                    onChange={handleChange}
                    placeholder="Annual Turnover"
                    className="
                        rounded-xl
                        bg-black/30
                        p-4
                        outline-none
                    "
                />

                <input
                    name="investment_amount"
                    value={profile.investment_amount}
                    onChange={handleChange}
                    placeholder="Investment Amount"
                    className="
                        rounded-xl
                        bg-black/30
                        p-4
                        outline-none
                    "
                />

                <input
                    name="category"
                    value={profile.category}
                    onChange={handleChange}
                    placeholder="Category"
                    className="
                        rounded-xl
                        bg-black/30
                        p-4
                        outline-none
                    "
                />

            </div>

            <button
                onClick={
                    analyzeEligibility
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
                        ? "Consulting MSME Experts..."
                        : "Analyze Eligibility"
                }

            </button>

        </div>

    );

}