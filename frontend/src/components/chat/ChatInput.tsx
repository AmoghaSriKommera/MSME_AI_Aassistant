import { useState } from "react";
import { Send } from "lucide-react";

interface Props {
    onSend: (
        message: string
    ) => void;
}

export default function ChatInput({
    onSend
}: Props) {

    const [
        message,
        setMessage
    ] = useState("");

    const sendMessage = () => {

        if (
            !message.trim()
        ) return;

        onSend(
            message
        );

        setMessage("");
    };

    return (
        <div className="
            flex
            gap-4
            rounded-3xl
            border
            border-cyan-500/20
            bg-white/5
            p-4
            backdrop-blur-xl
        ">
            <input
                value={message}
                onChange={(e) =>
                    setMessage(
                        e.target.value
                    )
                }
                placeholder="
Ask about MSME schemes...
                "
                className="
                    flex-1
                    bg-transparent
                    outline-none
                "
            />

            <button
                onClick={sendMessage}
                className="
                    rounded-full
                    bg-cyan-500
                    p-3
                    transition-all
                    hover:scale-110
                    hover:shadow-[0_0_30px_cyan]
                "
            >
                <Send size={18} />
            </button>
        </div>
    );
}