import subprocess
import os
from pathlib import Path


def verify_metadata():
    path = Path("data/metadata/msme_schemes_metadata.json")

    if not path.exists():
        raise Exception("Metadata file missing")

    print("Metadata found")


def verify_ollama():
    try:
        subprocess.run(
            ["ollama", "list"],
            check=True
        )

        print("Ollama running")

    except:
        raise Exception("Start Ollama first")


def start_backend():
    subprocess.Popen(
        [
            "uvicorn",
            "backend.main:app",
            "--host",
            "0.0.0.0",
            "--port",
            "8000",
            "--reload"
        ]
    )


def main():
    verify_metadata()
    verify_ollama()

    start_backend()

    print("MSME AI Assistant Started")


if __name__ == "__main__":
    main()