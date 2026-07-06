from pydantic_settings import BaseSettings
from functools import lru_cache


class Settings(BaseSettings):

    APP_NAME: str = "MSME AI Assistant"
    VERSION: str = "1.0.0"

    GROQ_API_KEY_1: str
    GROQ_API_KEY_2: str
    GROQ_API_KEY_3: str
    GROQ_API_KEY_4: str
    GROQ_API_KEY_5: str

    PRIMARY_MODEL: str
    FAST_MODEL: str
    EMBED_MODEL: str

    CHROMA_PATH: str

    POSTGRES_HOST: str
    POSTGRES_PORT: int
    POSTGRES_USER: str
    POSTGRES_PASSWORD: str
    POSTGRES_DB: str

    REDIS_HOST: str
    REDIS_PORT: int

    API_PORT: int

    ENVIRONMENT: str

    class Config:
        env_file = ".env"


@lru_cache
def get_settings():
    return Settings()


settings = get_settings()