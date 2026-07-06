from pydantic import BaseModel
from typing import Optional


class UserProfile(BaseModel):

    age: Optional[int] = None

    gender: Optional[str] = None

    state: Optional[str] = None

    district: Optional[str] = None

    category: Optional[str] = None

    business_type: Optional[str] = None

    business_stage: Optional[str] = None

    annual_turnover: Optional[float] = None

    investment_amount: Optional[float] = None

    women_owned: bool = False

    startup: bool = False

    export_business: bool = False

    manufacturing: bool = False

    service_sector: bool = False

    existing_business: bool = False

    first_time_entrepreneur: bool = False

    differently_abled: bool = False

    minority: bool = False

    rural_area: bool = False

    urban_area: bool = False