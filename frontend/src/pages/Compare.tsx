import Layout from "../components/layout/Layout";
import { useState } from "react";

import SchemeSelector from "../components/compare/SchemeSelector";
import ComparisonTable from "../components/compare/ComparisonTable";
import WinnerCard from "../components/compare/WinnerCard";
import RecommendationCard from "../components/compare/RecommendationCard";

import {
    useMSMEStore
} from "../store/useMSMEStore";

export default function Compare() {

    const [
        result,
        setResult
    ] = useState<any>(null);

    const [
        error,
        setError
    ] = useState("");

    const userProfile =
        useMSMEStore
            .getState()
            .userProfile;

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
                    Scheme Comparison Engine
                </h1>

                {
                    Object.keys(
                        userProfile
                    ).length > 0 && (

                        <div className="
                            rounded-2xl
                            border
                            border-cyan-500/20
                            bg-white/5
                            p-6
                        ">

                            <h2 className="
                                text-xl
                                font-bold
                                mb-4
                            ">
                                Current User Profile
                            </h2>

                            <pre className="
                                text-gray-300
                                whitespace-pre-wrap
                            ">
                                {
                                    JSON.stringify(
                                        userProfile,
                                        null,
                                        2
                                    )
                                }
                            </pre>

                        </div>

                    )
                }

                <SchemeSelector
                    onResult={
                        setResult
                    }
                    onError={
                        setError
                    }
                />

                {
                    error && (

                        <div className="
                            rounded-2xl
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

                <ComparisonTable
                    result={
                        result?.response
                    }
                />

                <div className="
                    grid
                    lg:grid-cols-2
                    gap-6
                ">

                    <WinnerCard
                        result={
                            result?.response
                        }
                    />

                    <RecommendationCard
                        result={
                            result?.response
                        }
                    />

                </div>

            </div>

        </Layout>

    );

}