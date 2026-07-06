from backend.graph.builder import (
    invoke_graph
)


result = invoke_graph(
    """
I am a 24 year old woman entrepreneur
from Hyderabad.

I want to start a manufacturing
business with an investment of
25 lakhs.
"""
)

print(
    result["response"]
)