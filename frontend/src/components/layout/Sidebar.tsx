import {
    LayoutDashboard,
    MessageSquare,
    BadgeCheck,
    GitCompare,
    FileText,
    Settings
} from "lucide-react";

import { Link, useLocation } from "react-router-dom";

const items = [
    {
        title: "Dashboard",
        icon: LayoutDashboard,
        path: "/"
    },
    {
        title: "AI Assistant",
        icon: MessageSquare,
        path: "/chat"
    },
    {
        title: "Eligibility",
        icon: BadgeCheck,
        path: "/eligibility"
    },
    {
        title: "Compare",
        icon: GitCompare,
        path: "/compare"
    },
    {
        title: "Applications",
        icon: FileText,
        path: "/application"
    },
    {
        title: "Settings",
        icon: Settings,
        path: "/settings"
    }
];

export default function Sidebar() {

    const location = useLocation();

    return (

        <div className="
            sticky
            top-0
            h-screen
            w-72
            overflow-y-auto
            border-r
            border-cyan-500/20
            bg-white/5
            backdrop-blur-xl
            p-5
        ">

            <div className="
                mb-10
                text-2xl
                font-bold
                text-cyan-400
            ">
                MSME AI
            </div>

            <div className="space-y-3">

                {items.map((item) => {

                    const active =
                        location.pathname === item.path;

                    return (

                        <Link
                            key={item.title}
                            to={item.path}
                        >

                            <div className={`
                                flex
                                items-center
                                gap-4
                                rounded-2xl
                                p-4
                                transition-all
                                duration-300
                                cursor-pointer

                                ${
                                    active
                                    ?
                                    `
                                    bg-cyan-500/20
                                    text-cyan-300
                                    shadow-[0_0_30px_rgba(0,255,255,0.25)]
                                    `
                                    :
                                    `
                                    hover:bg-cyan-500/10
                                    hover:shadow-[0_0_30px_rgba(0,255,255,0.15)]
                                    `
                                }
                            `}>

                                <item.icon size={22} />

                                {item.title}

                            </div>

                        </Link>

                    );

                })}

            </div>

        </div>

    );
}