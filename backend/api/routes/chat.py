from fastapi import APIRouter
from pydantic import BaseModel

from backend.graph.builder import (
    invoke_graph
)

router = APIRouter()


class ChatRequest(BaseModel):
    query: str


@router.post("/chat")
async def chat(
        request: ChatRequest
):

    result = invoke_graph(
        request.query
    )

    return {
        "response":
        result["response"],

        "route":
        result["route"]
    }