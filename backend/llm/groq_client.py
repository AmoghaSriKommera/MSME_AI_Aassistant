from groq import Groq
from config.settings import settings


class GroqManager:

    def __init__(self):

        self.keys = [
            key for key in [
                settings.GROQ_API_KEY_1,
                settings.GROQ_API_KEY_2,
                settings.GROQ_API_KEY_3,
                settings.GROQ_API_KEY_4,
                settings.GROQ_API_KEY_5
            ]
            if key
        ]

        if len(self.keys) == 0:
            raise Exception(
                "No GROQ API keys configured"
            )

        self.current_key = 0

    def rotate(self):

        old_key = self.current_key + 1

        self.current_key = (
            self.current_key + 1
        ) % len(self.keys)

        print(
            f"Switching from Key {old_key} "
            f"to Key {self.current_key + 1}"
        )

    def get_current_client(self):

        print(
            f"Using API Key "
            f"{self.current_key + 1}"
        )

        return Groq(
            api_key=self.keys[
                self.current_key
            ]
        )

    def generate(
            self,
            prompt: str,
            fast: bool = False,
            temperature: float = 0.2,
            max_tokens: int = 4096
    ):

        model = (
            settings.FAST_MODEL
            if fast
            else settings.PRIMARY_MODEL
        )

        retries = 0

        last_exception = None

        while retries < len(self.keys):

            try:

                client = self.get_current_client()

                response = (
                    client.chat.completions.create(
                        model=model,

                        messages=[
                            {
                                "role": "user",
                                "content": prompt
                            }
                        ],

                        temperature=temperature,

                        max_tokens=max_tokens
                    )
                )

                return (
                    response
                    .choices[0]
                    .message.content
                )

            except Exception as e:

                last_exception = e

                error_text = (
                    str(e)
                    .lower()
                )

                print(
                    f"\nKey "
                    f"{self.current_key + 1} "
                    f"failed"
                )

                print(
                    f"Error: {e}"
                )

                should_rotate = any(
                    keyword in error_text
                    for keyword in [
                        "rate limit",
                        "quota",
                        "429",
                        "authentication",
                        "api key",
                        "invalid api key",
                        "credit limit",
                        "usage limit"
                    ]
                )

                if should_rotate:

                    self.rotate()

                else:

                    print(
                        "Non quota error "
                        "detected."
                    )

                    raise e

                retries += 1

        raise Exception(
            f"All API keys exhausted.\n"
            f"Last error:\n"
            f"{last_exception}"
        )

    def generate_stream(
            self,
            prompt: str,
            fast: bool = False,
            temperature: float = 0.2,
            max_tokens: int = 4096
    ):

        model = (
            settings.FAST_MODEL
            if fast
            else settings.PRIMARY_MODEL
        )

        retries = 0

        while retries < len(self.keys):

            try:

                client = self.get_current_client()

                stream = (
                    client.chat.completions.create(
                        model=model,

                        messages=[
                            {
                                "role": "user",
                                "content": prompt
                            }
                        ],

                        temperature=temperature,

                        max_tokens=max_tokens,

                        stream=True
                    )
                )

                full_response = ""

                for chunk in stream:

                    if (
                        chunk.choices
                        and
                        chunk.choices[0]
                        .delta.content
                    ):

                        token = (
                            chunk
                            .choices[0]
                            .delta.content
                        )

                        print(
                            token,
                            end="",
                            flush=True
                        )

                        full_response += token

                print()

                return full_response

            except Exception as e:

                error_text = (
                    str(e)
                    .lower()
                )

                print(
                    f"\nKey "
                    f"{self.current_key + 1} "
                    f"failed"
                )

                print(
                    f"Error: {e}"
                )

                should_rotate = any(
                    keyword in error_text
                    for keyword in [
                        "rate limit",
                        "quota",
                        "429",
                        "authentication",
                        "api key",
                        "invalid api key",
                        "credit limit",
                        "usage limit"
                    ]
                )

                if should_rotate:

                    self.rotate()

                else:

                    raise e

                retries += 1

        raise Exception(
            "All API keys exhausted"
        )


groq_client = GroqManager()