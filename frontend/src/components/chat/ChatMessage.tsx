import { motion } from "framer-motion";
import ReactMarkdown from "react-markdown";

import type { Message }
from "../../types/chat";

interface Props {
    message: Message;
}

export default function ChatMessage({
    message
}: Props) {

    const isUser =
        message.role === "user";

    return (

        <motion.div
            initial={{
                opacity: 0,
                y: 20
            }}
            animate={{
                opacity: 1,
                y: 0
            }}
            className={`
                flex
                ${
                    isUser
                    ? "justify-end"
                    : "justify-start"
                }
            `}
        >

            <div
                className={`
                    max-w-[75%]
                    rounded-3xl
                    px-6
                    py-4
                    backdrop-blur-xl
                    border

                    ${
                        isUser
                        ?
                        `
                        bg-cyan-500/10
                        border-cyan-500/20
                        shadow-[0_0_25px_rgba(0,255,255,0.15)]
                        `
                        :
                        `
                        bg-white/5
                        border-white/10
                        `
                    }
                `}
            >

                {
                    !isUser &&
                    (
                        <div className="
                            mb-3
                            text-sm
                            font-semibold
                            text-cyan-400
                        ">
                            MSME AI Assistant
                        </div>
                    )
                }

                <ReactMarkdown>
                    {
                        String(
                            message.content
                        )
                    }
                </ReactMarkdown>

            </div>

        </motion.div>

    );

}