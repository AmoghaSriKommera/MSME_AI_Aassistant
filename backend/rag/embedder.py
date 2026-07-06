import ollama
from config.settings import settings


def generate_embedding(text: str):

    response = ollama.embeddings(
        model=settings.EMBED_MODEL,
        prompt=text
    )

    return response["embedding"]