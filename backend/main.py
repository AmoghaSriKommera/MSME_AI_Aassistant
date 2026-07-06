from fastapi import FastAPI
from pydantic import BaseModel
from fastapi import UploadFile
from fastapi import File

from backend.tools.document_extractor import (
    extract_document_text
)

from backend.tools.document_classifier import (
    classify_document
)
from fastapi.middleware.cors import (
    CORSMiddleware
)

from backend.graph.builder import (
    invoke_graph
)

from backend.api.routes.chat import (
    router as chat_router
)

from backend.api.routes.health import (
    router as health_router
)

from backend.api.routes.upload import (
    router as upload_router
)

from backend.tools.document_field_extractor import (
    extract_fields
)

from backend.session.session_store import (
    SESSION
)

class ChatRequest(BaseModel):
    query: str


app = FastAPI(
    title="MSME AI Assistant"
)


app.add_middleware(
    CORSMiddleware,
    allow_origins=[
        "http://localhost:5173",
        "http://localhost:5174",
        "http://127.0.0.1:5173",
        "http://127.0.0.1:5174"
    ],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"]
)


app.include_router(
    chat_router,
    prefix="/api"
)

app.include_router(
    health_router,
    prefix="/api"
)

app.include_router(
    upload_router
)

@app.get("/")
def root():

    return {
        "message":
        "MSME AI Assistant Backend Running"
    }


@app.post("/chat")
def chat(
    request: ChatRequest
):

    result = invoke_graph(
        request.query
    )

    return {
        "response":
        result.get(
            "response",
            ""
        ),

        "route":
        result.get(
            "route",
            ""
        )
    }


@app.post("/eligibility")
def eligibility(
    profile: dict
):

    query = f"""
    Check eligibility for:

    {profile}
    """

    result = invoke_graph(
        query
    )

    return result


@app.post("/compare")
def compare(
    request: ChatRequest
):

    result = invoke_graph(
        request.query
    )

    return result


@app.post("/application")
def application(
    payload: dict
):

    result = invoke_graph(
        payload["query"]
    )

    return result

@app.post(
    "/upload-document"
)
async def upload_document(
    file: UploadFile = File(...)
):

    
    contents = await file.read()

    extracted_text = extract_document_text(
        contents,
        file.filename
    )

    print("\n========== OCR TEXT ==========\n")
    print(extracted_text)
    print("\n==============================\n")

    document_type = classify_document(
        extracted_text
    )
    document_type = classify_document(
        extracted_text
    )
    fields = extract_fields(
        extracted_text,
        document_type
    )
    if (
        document_type !=
        "Unknown Document"
    ):

        if (
            document_type
            not in
            SESSION[
                "uploaded_documents"
            ]
        ):

            SESSION[
                "uploaded_documents"
            ].append(
                document_type
            )

    SESSION[
        "verified_fields"
    ].update(
        fields
    )
    return {
        "document_type":
        document_type,

        "fields":
        fields,

        "preview":
        extracted_text[:500]
    }