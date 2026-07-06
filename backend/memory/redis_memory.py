import json
from backend.db.redis_client import redis_client


def save_message(
        session_id,
        role,
        content
):

    redis_client.rpush(
        session_id,

        json.dumps({
            "role": role,
            "content": content
        })
    )


def get_messages(
        session_id
):

    messages = redis_client.lrange(
        session_id,
        0,
        -1
    )

    return [
        json.loads(m)
        for m in messages
    ]