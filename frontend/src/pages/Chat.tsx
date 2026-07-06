import { useState, useRef, useEffect } from "react";

import Layout from "../components/layout/Layout";

import ChatMessage from "../components/chat/ChatMessage";
import ChatInput from "../components/chat/ChatInput";
import SuggestedPrompts from "../components/chat/SuggestedPrompts";
import TypingIndicator from "../components/chat/TypingIndicator";
import AgentPanel from "../components/chat/AgentPanel";

import { api } from "../services/api";

import type { Message } from "../types/chat";

export default function Chat() {

    const [messages, setMessages] =
        useState<Message[]>([]);

    const [loading, setLoading] =
        useState(false);

    const [route, setRoute] =
        useState("");

    const messagesEndRef =
        useRef<HTMLDivElement>(null);

    useEffect(() => {

        messagesEndRef.current
            ?.scrollIntoView({
                behavior: "smooth"
            });

    }, [messages]);

    const sendMessage = async (
        query: string
    ) => {

        if (!query.trim()) return;

        const userMessage: Message = {
            role: "user",
            content: query
        };

        setMessages(
            prev => [
                ...prev,
                userMessage
            ]
        );

        setLoading(true);

        try {

            const response =
                await api.post(
                    "/chat",
                    {
                        query
                    }
                );

            console.log(
                "CHAT RESPONSE:",
                response.data
            );

            setRoute(
                response.data.route || ""
            );

            let botContent = "";

            if (
                typeof response.data.response ===
                "string"
            ) {

                botContent =
                    response.data.response;

            }

            else {

                const data =
                    response.data.response;

                // Compare Error
                if (
                    data.error
                ) {

                    botContent =
                        `❌ ${data.error}`;

                }

                // Eligibility JSON
                else if (
                    data.summary
                ) {

                    botContent = `
${data.summary}

${data.recommended_scheme
? `### Recommended Scheme
${data.recommended_scheme}`
: ""
}

${data.next_step
? `### Next Step
${data.next_step}`
: ""}
`;

                }

                // Compare JSON
                else if (
    data.major_difference
) {

    const schemeNames =
        Object.keys(
            data.loan_amount || {}
        );

    botContent = `
# Scheme Comparison

## ${schemeNames[0]}
${data.scheme_1_summary}

### Best For
${data.best_for?.[schemeNames[0]]}

### Loan Amount
${data.loan_amount?.[schemeNames[0]]}

### Subsidy
${data.subsidy?.[schemeNames[0]] || "Not Applicable"}

---

## ${schemeNames[1]}
${data.scheme_2_summary}

### Best For
${data.best_for?.[schemeNames[1]]}

### Loan Amount
${data.loan_amount?.[schemeNames[1]]}

### Subsidy
${data.subsidy?.[schemeNames[1]] || "Not Applicable"}

---

## Major Difference
${data.major_difference}

## Recommendation
${data.profile_recommendation}
`;
}
                else {

                    botContent =
                        JSON.stringify(
                            data,
                            null,
                            2
                        );

                }

            }

            const aiMessage: Message = {
                role: "assistant",
                content: botContent
            };

            setMessages(
                prev => [
                    ...prev,
                    aiMessage
                ]
            );

        }

        catch (error) {

            console.error(
                error
            );

            const errorMessage: Message = {
                role: "assistant",
                content:
                    "Unable to connect to backend."
            };

            setMessages(
                prev => [
                    ...prev,
                    errorMessage
                ]
            );

        }

        finally {

            setLoading(false);

        }

    };

    return (

        <Layout>

            <div className="
                flex
                h-full
                gap-6
            ">

                <div className="
                    flex
                    flex-1
                    flex-col
                    gap-6
                ">

                    <div className="
                        flex-1
                        overflow-y-auto
                        space-y-6
                    ">

                        {
                            messages.length === 0 && (

                                <div className="
                                    flex
                                    h-full
                                    flex-col
                                    items-center
                                    justify-center
                                    gap-8
                                ">

                                    <div className="
                                        text-center
                                        space-y-4
                                    ">

                                        <h1 className="
                                            text-6xl
                                            font-bold
                                            bg-gradient-to-r
                                            from-cyan-400
                                            via-blue-400
                                            to-purple-500
                                            bg-clip-text
                                            text-transparent
                                        ">
                                            MSME AI Assistant
                                        </h1>

                                        <p className="
                                            max-w-2xl
                                            text-lg
                                            text-gray-400
                                        ">
                                            Personalized scheme guidance,
                                            eligibility checks,
                                            comparisons and application support.
                                        </p>

                                    </div>

                                    <SuggestedPrompts
                                        onSelect={
                                            sendMessage
                                        }
                                    />

                                </div>

                            )
                        }

                        {
                            messages.map(
                                (
                                    message,
                                    index
                                ) => (
                                    <ChatMessage
                                        key={index}
                                        message={message}
                                    />
                                )
                            )
                        }

                        {
                            loading &&
                            <TypingIndicator />
                        }

                        <div
                            ref={messagesEndRef}
                        />

                    </div>

                    <ChatInput
                        onSend={
                            sendMessage
                        }
                    />

                </div>

                <AgentPanel
                    route={route}
                    loading={loading}
                />

            </div>

        </Layout>

    );

}