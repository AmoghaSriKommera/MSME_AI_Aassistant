import {
    Search
} from "lucide-react";

const searches = [
    "Compare PMEGP and PMMY",
    "Schemes for women entrepreneurs",
    "Explain TS-iPASS",
    "Documents required for PMEGP"
];

export default function RecentSearches() {

    return (

        <div>

            <h2 className="
                text-3xl
                font-bold
                mb-6
            ">
                Recent Searches
            </h2>

            <div className="
                space-y-4
            ">

                {
                    searches.map(
                        search => (

                            <div
                                key={search}
                                className="
                                    rounded-2xl
                                    border
                                    border-cyan-500/20
                                    bg-white/5
                                    backdrop-blur-xl
                                    p-5
                                    cursor-pointer
                                    hover:bg-cyan-500/10
                                    transition-all
                                "
                            >

                                <div className="
                                    flex
                                    items-center
                                    gap-4
                                ">

                                    <Search
                                        size={18}
                                    />

                                    <span>
                                        {search}
                                    </span>

                                </div>

                            </div>

                        )
                    )
                }

            </div>

        </div>

    );

}