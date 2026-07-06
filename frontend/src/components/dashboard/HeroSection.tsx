import { Sparkles } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function HeroSection() {

    const navigate =
        useNavigate();

    return (

        <div className="
            rounded-[32px]
            border
            border-cyan-500/20
            bg-white/5
            backdrop-blur-xl
            p-10
            relative
            overflow-hidden
        ">

            <div className="
                absolute
                right-[-100px]
                top-[-100px]
                h-[250px]
                w-[250px]
                rounded-full
                bg-cyan-500/20
                blur-[120px]
            " />

            <div className="
                absolute
                left-[-100px]
                bottom-[-100px]
                h-[250px]
                w-[250px]
                rounded-full
                bg-purple-500/20
                blur-[120px]
            " />

            <div className="relative z-10">

                <div className="
                    flex
                    items-center
                    gap-3
                    text-cyan-400
                    mb-4
                ">
                    <Sparkles />
                    AI Powered MSME Guidance
                </div>

                <h1 className="
                    text-6xl
                    font-bold
                    leading-tight
                    bg-gradient-to-r
                    from-cyan-400
                    via-blue-400
                    to-purple-500
                    bg-clip-text
                    text-transparent
                ">
                    Discover Government
                    Schemes Instantly
                </h1>

                <p className="
                    mt-6
                    text-xl
                    text-gray-400
                    max-w-3xl
                ">
                    Personalized recommendations,
                    eligibility checks,
                    application assistance and
                    AI-powered scheme discovery.
                </p>

                <div className="
                    mt-10
                    flex
                    gap-5
                    flex-wrap
                ">

                    <button
                        onClick={() =>
                            navigate(
                                "/eligibility"
                            )
                        }
                        className="
                            rounded-2xl
                            bg-cyan-500
                            px-8
                            py-4
                            font-bold
                            hover:shadow-[0_0_35px_cyan]
                            transition-all
                        "
                    >
                        Check Eligibility
                    </button>

                    <button
                        onClick={() =>
                            navigate(
                                "/chat"
                            )
                        }
                        className="
                            rounded-2xl
                            border
                            border-cyan-500/30
                            bg-white/5
                            px-8
                            py-4
                            font-bold
                            hover:bg-cyan-500/10
                            transition-all
                        "
                    >
                        Ask AI Assistant
                    </button>

                </div>

            </div>

        </div>

    );

}