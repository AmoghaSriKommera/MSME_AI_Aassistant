import { useRef, useState } from "react";
import { api } from "../../services/api";

interface Props {

    onUpload: (
        documentType: string
    ) => void;

    onExtractedFields?: (
        fields: any
    ) => void;

}

export default function DocumentUploader({
    onUpload,
    onExtractedFields
}: Props) {

    const [
        file,
        setFile
    ] = useState<File | null>(
        null
    );

    const [
        status,
        setStatus
    ] = useState("");

    const [
        extractedFields,
        setExtractedFields
    ] = useState<any>({});

    const [
        loading,
        setLoading
    ] = useState(false);

    const inputRef =
        useRef<HTMLInputElement>(
            null
        );

    const uploadDocument =
        async () => {

            if (!file) return;

            setLoading(true);

            setStatus(
                "Analyzing document..."
            );

            const formData =
                new FormData();

            formData.append(
                "file",
                file
            );

            try {

                const response =
                    await api.post(
                        "/upload-document",
                        formData,
                        {
                            headers: {
                                "Content-Type":
                                    "multipart/form-data"
                            }
                        }
                    );

                const documentType =
                    response.data.document_type;

                const fields =
                    response.data.fields || {};

                setExtractedFields(
                    (prev: any) => ({
                        ...prev,
                        ...fields
                    })
                );

                if (
                    onExtractedFields
                ) {

                    onExtractedFields(
                        fields
                    );

                }
                if (
                    documentType !==
                    "Unknown Document"
                ) {

                    onUpload(
                        documentType
                    );

                    setStatus(
                        `${documentType} verified successfully`
                    );

                }

                else {

                    setStatus(
                        "Unable to identify document type. Try uploading a clearer image or PDF."
                    );

                }

                setFile(
                    null
                );

                if (
                    inputRef.current
                ) {

                    inputRef.current.value =
                        "";

                }

            }

            catch (
                error
            ) {

                console.error(
                    error
                );

                setStatus(
                    "Upload failed. Please try again."
                );

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
                text-3xl
                font-bold
                mb-8
            ">
                Upload Documents
            </h2>

            <input
                ref={inputRef}
                type="file"
                accept="
                    image/*
                    ,.pdf
                "
                onChange={(e) => {

                    if (
                        e.target.files &&
                        e.target.files[0]
                    ) {

                        setFile(
                            e.target.files[0]
                        );

                    }

                }}
                className="
                    w-full
                    rounded-xl
                    bg-black/30
                    p-4
                    text-gray-300
                "
            />

            {
                file &&
                (
                    <div className="
                        mt-4
                        text-sm
                        text-cyan-400
                    ">
                        Selected:
                        {" "}
                        {file.name}
                    </div>
                )
            }

            <button
                onClick={
                    uploadDocument
                }
                disabled={
                    !file ||
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
                    hover:shadow-[0_0_25px_cyan]
                    disabled:opacity-50
                    disabled:cursor-not-allowed
                "
            >

                {
                    loading
                        ? "Processing Document..."
                        : "Upload Document"
                }

            </button>

            {
                status &&
                (
                    <div className={`
                        mt-6
                        text-sm
                        ${
                            status.includes(
                                "failed"
                            ) ||
                            status.includes(
                                "Unable"
                            )
                            ?
                            "text-red-400"
                            :
                            "text-green-400"
                        }
                    `}>
                        {status}
                    </div>
                )
            }

            {
                Object.keys(
                    extractedFields
                ).length > 0 && (

                    <div className="
                        mt-8
                        rounded-2xl
                        border
                        border-cyan-500/20
                        bg-black/20
                        p-6
                    ">

                        <h3 className="
                            text-xl
                            font-semibold
                            mb-4
                            text-cyan-400
                        ">
                            Verified Information
                        </h3>

                        <div className="
                            space-y-3
                        ">

                            {
                                Object.entries(
                                    extractedFields
                                ).map(
                                    (
                                        [key, value]
                                    ) => (

                                        <div
                                            key={key}
                                            className="
                                                flex
                                                justify-between
                                                border-b
                                                border-white/10
                                                pb-2
                                            "
                                        >

                                            <span className="
                                                text-gray-400
                                                capitalize
                                            ">
                                                {
                                                    key
                                                        .replaceAll(
                                                            "_",
                                                            " "
                                                        )
                                                }
                                            </span>

                                            <span className="
                                                text-cyan-400
                                                font-medium
                                            ">
                                                {
                                                    String(
                                                        value
                                                    )
                                                }
                                            </span>

                                        </div>

                                    )
                                )
                            }

                        </div>

                    </div>

                )
            }

        </div>

    );

}