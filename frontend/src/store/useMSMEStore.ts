import { create } from "zustand";

interface MSMEStore {

    userProfile: any;
    uploadedDocs: string[];
    extractedFields: any;
    selectedScheme: string | null;

    setUserProfile: (
        profile: any
    ) => void;

    addUploadedDoc: (
        doc: string
    ) => void;

    addExtractedFields: (
        fields: any
    ) => void;

    setSelectedScheme: (
        scheme: string
    ) => void;
}

export const useMSMEStore =
create<MSMEStore>(
    (set) => ({

        userProfile: {},

        uploadedDocs: [],

        extractedFields: {},

        selectedScheme: null,

        setUserProfile: (
            profile
        ) =>
            set(
                {
                    userProfile:
                    profile
                }
            ),

        addUploadedDoc: (
            doc
        ) =>
            set(
                (
                    state
                ) => ({
                    uploadedDocs: [
                        ...state.uploadedDocs,
                        doc
                    ]
                })
            ),

        addExtractedFields: (
            fields
        ) =>
            set(
                (
                    state
                ) => ({
                    extractedFields: {
                        ...state.extractedFields,
                        ...fields
                    }
                })
            ),

        setSelectedScheme: (
            scheme
        ) =>
            set(
                {
                    selectedScheme:
                    scheme
                }
            )

    })
);