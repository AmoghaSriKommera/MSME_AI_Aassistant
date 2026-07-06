import {
    BadgeCheck,
    GitCompare,
    FileText,
    MessageSquare,
    ArrowRight
} from "lucide-react";

import { useNavigate } from "react-router-dom";

const actions = [
    {
        title: "Check Eligibility",
        icon: BadgeCheck,
        description:
            "Find schemes you qualify for",
        route:
            "/eligibility"
    },
    {
        title: "Compare Schemes",
        icon: GitCompare,
        description:
            "Compare incentives",
        route:
            "/compare"
    },
    {
        title: "Application Help",
        icon: FileText,
        description:
            "Track documents",
        route:
            "/application"
    },
    {
        title: "AI Assistant",
        icon: MessageSquare,
        description:
            "Ask anything",
        route:
            "/chat"
    }
];

export default function QuickActions() {

    const navigate =
        useNavigate();

    return (

        <div>

            <h2 className="
                text-3xl
                font-bold
                mb-6
            ">
                Quick Actions
            </h2>

            <div className="
                grid
                grid-cols-1
                md:grid-cols-2
                lg:grid-cols-4
                gap-6
            ">

                {
                    actions.map(
                        action => (

                            <div
                                key={action.title}
                                onClick={() =>
                                    navigate(
                                        action.route
                                    )
                                }
                                className="
                                    group
                                    rounded-3xl
                                    border
                                    border-cyan-500/20
                                    bg-white/5
                                    backdrop-blur-xl
                                    p-6
                                    transition-all
                                    duration-300
                                    hover:scale-105
                                    hover:shadow-[0_0_40px_rgba(0,255,255,0.2)]
                                    cursor-pointer
                                "
                            >

                                <action.icon
                                    size={36}
                                    className="
                                        text-cyan-400
                                        mb-4
                                    "
                                />

                                <h3 className="
                                    text-xl
                                    font-bold
                                ">
                                    {action.title}
                                </h3>

                                <p className="
                                    mt-2
                                    text-gray-400
                                ">
                                    {action.description}
                                </p>

                                <div className="
                                    mt-5
                                    flex
                                    justify-end
                                ">

                                    <ArrowRight
                                        size={20}
                                        className="
                                            text-cyan-400
                                            transition-all
                                            duration-300
                                            group-hover:translate-x-2
                                        "
                                    />

                                </div>

                            </div>

                        )
                    )
                }

            </div>

        </div>

    );

}