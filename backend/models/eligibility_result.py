from pydantic import BaseModel
from typing import List


class EligibilityResult(BaseModel):

    scheme_name: str

    score: float

    matched_conditions: List[str]

    missing_conditions: List[str]

    recommendation_reason: str