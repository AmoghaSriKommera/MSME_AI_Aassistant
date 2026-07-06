import Layout from "../components/layout/Layout";
import { useState } from "react";

import EligibilityForm from "../components/eligibility/EligibilityForm";
import EligibilityScore from "../components/eligibility/EligibilityScore";
import RecommendedSchemes from "../components/eligibility/RecommendedSchemes";
import MissingRequirements from "../components/eligibility/MissingRequirements";
import ProfileCard from "../components/eligibility/ProfileCard";

import {
    useMSMEStore
} from "../store/useMSMEStore";

export default function Eligibility() {

    const [
        result,
        setResult
    ] = useState<any>(null);

    const [
        loading,
        setLoading
    ] = useState(false);

    const [
        error,
        setError
    ] = useState("");

    const parsedResponse =
        result?.response;

    return (

        <Layout>

            <div className="
                space-y-8
            ">

                <h1 className="
                    text-5xl
                    font-bold
                    bg-gradient-to-r
                    from-cyan-400
                    to-purple-500
                    bg-clip-text
                    text-transparent
                ">
                    Eligibility Analyzer
                </h1>

                <EligibilityForm
                    onResult={(data) => {

                        setResult(
                            data
                        );

                        /*
                        Temporary fix:
                        use non-hook Zustand API
                        */
                        useMSMEStore
                            .getState()
                            .setUserProfile(
                                data.user_profile
                            );

                    }}
                    loading={loading}
                    setLoading={
                        setLoading
                    }
                    setError={
                        setError
                    }
                />

                {
                    loading && (

                        <div className="
                            rounded-3xl
                            border
                            border-cyan-500/20
                            bg-cyan-500/10
                            p-6
                            text-center
                            text-cyan-400
                            font-bold
                        ">
                            Consulting MSME Experts...
                        </div>

                    )
                }

                {
                    error && (

                        <div className="
                            rounded-3xl
                            border
                            border-red-500/20
                            bg-red-500/10
                            p-6
                            text-red-400
                        ">
                            {error}
                        </div>

                    )
                }

                {
                    parsedResponse && (

                        <div className="
                            rounded-3xl
                            border
                            border-cyan-500/20
                            bg-white/5
                            p-8
                            backdrop-blur-xl
                        ">

                            <h2 className="
                                text-3xl
                                font-bold
                                mb-8
                            ">
                                AI Analysis
                            </h2>

                            <div className="
                                space-y-8
                            ">

                                <div>

                                    <div className="
                                        text-cyan-400
                                        font-semibold
                                        mb-2
                                    ">
                                        Recommended Scheme
                                    </div>

                                    <div className="
                                        text-xl
                                        text-white
                                    ">
                                        {
                                            parsedResponse
                                            ?.recommended_scheme
                                        }
                                    </div>

                                </div>

                                <div>

                                    <div className="
                                        text-cyan-400
                                        font-semibold
                                        mb-2
                                    ">
                                        Next Step
                                    </div>

                                    <div className="
                                        text-gray-300
                                    ">
                                        {
                                            parsedResponse
                                            ?.next_step
                                        }
                                    </div>

                                </div>

                            </div>

                        </div>

                    )
                }

                <div className="
                    grid
                    lg:grid-cols-2
                    gap-6
                ">

                    <EligibilityScore
                        schemes={
                            result?.eligible_schemes
                        }
                    />

                    <ProfileCard
                        profile={
                            result?.user_profile
                        }
                    />

                </div>

                <RecommendedSchemes
                    schemes={
                        result?.eligible_schemes
                    }
                />

                <MissingRequirements
                    requirements={
                        parsedResponse?.missing_requirements
                    }
                />

            </div>

        </Layout>

    );

}