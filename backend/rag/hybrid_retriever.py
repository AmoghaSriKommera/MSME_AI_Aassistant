from backend.rag.retriever import retrieve
from rank_bm25 import BM25Okapi
import json


class HybridRetriever:

    def __init__(self):

        with open(
            "data/metadata/msme_schemes_metadata.json",
            encoding="utf-8"
        ) as f:

            data = json.load(f)

        self.documents = (
            data["central_schemes"]
            +
            data["telangana_state_schemes"]
        )

        corpus = []

        for scheme in self.documents:

            text = (
                scheme["scheme_name"]
                + " "
                + scheme["description"]
            )

            corpus.append(
                text.split()
            )

        self.bm25 = BM25Okapi(
            corpus
        )

    def search(
            self,
            query,
            top_k=5
    ):

        vector_results = retrieve(
            query,
            top_k
        )

        keyword_results = self.bm25.get_top_n(
            query.split(),
            self.documents,
            n=top_k
        )

        return {
            "vector": vector_results,
            "keyword": keyword_results
        }


hybrid_retriever = HybridRetriever()