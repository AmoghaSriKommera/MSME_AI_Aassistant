from backend.rag.embedder import generate_embedding
from backend.rag.vectorstore import collection


def retrieve(
        query,
        top_k=5
):

    embedding = generate_embedding(
        query
    )

    result = collection.query(
        query_embeddings=[
            embedding
        ],

        n_results=top_k
    )

    return result