import json
import uuid

from backend.rag.chunker import build_embedding_text
from backend.rag.embedder import generate_embedding
from backend.rag.vectorstore import collection


METADATA_PATH = "data/metadata/msme_schemes_metadata.json"


def load_metadata():

    with open(
        METADATA_PATH,
        encoding="utf-8"
    ) as f:

        return json.load(f)


def ingest():

    print("Loading metadata...")

    data = load_metadata()

    print("Metadata loaded")

    schemes = []

    schemes.extend(data["central_schemes"])
    schemes.extend(data["telangana_state_schemes"])

    print(f"Found {len(schemes)} schemes")

    for scheme in schemes:

        print(f"Processing {scheme['scheme_name']}")

        text = build_embedding_text(scheme)

        embedding = generate_embedding(text)

        print(f"Embedding size = {len(embedding)}")

        collection.add(
            ids=[str(uuid.uuid4())],
            documents=[text],
            embeddings=[embedding],
            metadatas=[{
                "scheme_name": scheme["scheme_name"],
                "level": scheme["level"]
            }]
        )

        print(f"Indexed -> {scheme['scheme_name']}")


if __name__ == "__main__":
    ingest()