from backend.rag.retriever import retrieve


result = retrieve(
    "schemes for women entrepreneurs in telangana"
)

print(
    result["metadatas"]
)