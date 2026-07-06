import Layout from "../components/layout/Layout";
import { useState } from "react";

import DocumentUploader from "../components/application/DocumentUploader";
import ApplicationStepper from "../components/application/ApplicationStepper";
import DocumentChecklist from "../components/application/DocumentChecklist";
import ProgressTracker from "../components/application/ProgressTracker";
import Timeline from "../components/application/Timeline";
import NextActionCard from "../components/application/NextActionCard";
import ApplicationSummary from "../components/application/ApplicationSummary";
import ExtractedProfileCard from "../components/application/ExtractedProfileCard";

import {
    useMSMEStore
} from "../store/useMSMEStore";

export default function Application() {

    const [
        result,
        setResult
    ] = useState<any>(null);

    const [
        uploadedDocs,
        setUploadedDocs
    ] = useState<string[]>([]);

    const [
        extractedProfile,
        setExtractedProfile
    ] = useState<any>({});

    const handleUpload = (
        documentType: string
    ) => {

        if (
            documentType ===
            "Unknown Document"
        ) {
            return;
        }

        if (
            !uploadedDocs.includes(
                documentType
            )
        ) {

            setUploadedDocs(
                prev => [
                    ...prev,
                    documentType
                ]
            );

            /*
            Persist in memory
            */
            useMSMEStore
                .getState()
                .addUploadedDoc(
                    documentType
                );

        }

    };

    const handleExtractedFields = (
        fields: any
    ) => {

        setExtractedProfile(
            (
                prev: any
            ) => ({
                ...prev,
                ...fields
            })
        );

        /*
        Persist in memory
        */
        useMSMEStore
            .getState()
            .addExtractedFields(
                fields
            );

    };

    return (

        <Layout>

            <div className="space-y-8">

                <h1 className="
                    text-5xl
                    font-bold
                    bg-gradient-to-r
                    from-cyan-400
                    to-purple-500
                    bg-clip-text
                    text-transparent
                ">
                    Application Assistant
                </h1>

                <ApplicationStepper
                    onResult={setResult}
                />

                {
                    result && (

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
                                mb-6
                            ">
                                Application Result
                            </h2>

                            <pre className="
                                whitespace-pre-wrap
                                text-gray-300
                            ">
                                {
                                    typeof result.response === "string"
                                        ? result.response
                                        : JSON.stringify(
                                            result.response,
                                            null,
                                            2
                                        )
                                }
                            </pre>

                        </div>

                    )
                }

                <div className="
                    grid
                    lg:grid-cols-2
                    gap-6
                ">

                    <ProgressTracker
                        uploadedDocs={
                            uploadedDocs
                        }
                    />

                    <Timeline
                        uploadedDocs={
                            uploadedDocs
                        }
                    />

                    <NextActionCard
                        uploadedDocs={
                            uploadedDocs
                        }
                    />

                    <ApplicationSummary
                        uploadedDocs={
                            uploadedDocs
                        }
                    />

                    <DocumentChecklist
                        uploadedDocs={
                            uploadedDocs
                        }
                    />

                    <ExtractedProfileCard
                        profile={
                            extractedProfile
                        }
                    />

                    <DocumentUploader
                        onUpload={
                            handleUpload
                        }
                        onExtractedFields={
                            handleExtractedFields
                        }
                    />

                </div>

            </div>

        </Layout>

    );

}