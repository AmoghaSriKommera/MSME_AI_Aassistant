from loguru import logger
import sys


logger.remove()

logger.add(
    sys.stdout,
    colorize=True,
    format="<green>{time}</green> | "
           "<level>{level}</level> | "
           "<cyan>{name}</cyan>:"
           "<cyan>{function}</cyan>:"
           "<cyan>{line}</cyan> - "
           "<level>{message}</level>"
)

logger.add(
    "logs/app.log",
    rotation="10 MB",
    retention="10 days",
    compression="zip"
)