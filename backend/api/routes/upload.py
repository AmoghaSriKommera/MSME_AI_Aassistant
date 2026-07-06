from fastapi import (
    APIRouter,
    UploadFile,
    File
)

import os

from backend.tools.document_classifier import (
    classify_document
)

router = APIRouter()

UPLOAD_FOLDER = "backend/uploads"

os.makedirs(
    UPLOAD_FOLDER,
    exist_ok=True
)


@router.post(
    "/upload"
)
async def upload_document(
    file: UploadFile = File(...)
):

    path = os.path.join(
        UPLOAD_FOLDER,
        file.filename
    )

    with open(
        path,
        "wb"
    ) as buffer:

        buffer.write(
            await file.read()
        )

    document_type = classify_document(
        file.filename
    )

    return {
        "filename":
        file.filename,

        "document_type":
        document_type,

        "status":
        "verified"
    }