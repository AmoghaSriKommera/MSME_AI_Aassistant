from typing import TypedDict
from typing import Dict
from typing import List
from typing import Optional


class GraphState(TypedDict):

    query: str

    user_profile: Dict

    route: Optional[str]

    eligible_schemes: List[Dict]

    retrieved_docs: List[str]

    comparison_result: Dict

    application_status: Dict

    research_results: List[Dict]

    response: str