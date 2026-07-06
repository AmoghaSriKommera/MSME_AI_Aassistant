import chromadb
from config.settings import settings


client = chromadb.PersistentClient(
    path=settings.CHROMA_PATH
)


collection = client.get_or_create_collection(
    name="msme_schemes"
)