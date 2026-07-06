APPLICATION_PROGRESS = {}
def save_progress(
        user_id,
        scheme_name,
        uploaded_docs
):

    APPLICATION_PROGRESS[
        user_id
    ] = {

        "scheme": scheme_name,

        "documents": uploaded_docs
    }


def get_progress(
        user_id
):

    return APPLICATION_PROGRESS.get(
        user_id,
        {}
    )