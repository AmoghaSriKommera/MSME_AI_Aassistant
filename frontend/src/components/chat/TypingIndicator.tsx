export default function TypingIndicator() {
    return (
        <div className="
            flex
            gap-2
            p-4
        ">
            <div className="
                h-2
                w-2
                animate-bounce
                rounded-full
                bg-cyan-400
            " />

            <div className="
                h-2
                w-2
                animate-bounce
                rounded-full
                bg-cyan-400
                delay-100
            " />

            <div className="
                h-2
                w-2
                animate-bounce
                rounded-full
                bg-cyan-400
                delay-200
            " />
        </div>
    );
}