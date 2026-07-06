import io
from PIL import Image
import pytesseract

pytesseract.pytesseract.tesseract_cmd = (
    r"C:\Program Files\Tesseract-OCR\tesseract.exe"
)


def extract_document_text(
    file_bytes,
    filename
):

    try:

        image = Image.open(
            io.BytesIO(
                file_bytes
            )
        )

        text = pytesseract.image_to_string(
            image,
            config="--psm 6"
        )

        return text

    except Exception as e:

        print(
            "OCR ERROR:",
            e
        )

        return ""