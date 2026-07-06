import Layout from "../components/layout/Layout";

export default function Settings() {

    return (

        <Layout>

            <div className="
                space-y-8
            ">

                <h1 className="
                    text-5xl
                    font-bold
                    bg-gradient-to-r
                    from-cyan-400
                    to-purple-500
                    bg-clip-text
                    text-transparent
                ">
                    Settings
                </h1>

                <div className="
                    rounded-3xl
                    border
                    border-cyan-500/20
                    bg-white/5
                    p-8
                    backdrop-blur-xl
                ">

                    <div className="
                        space-y-6
                    ">

                        <div className="
                            flex
                            justify-between
                        ">
                            <span>
                                Dark Mode
                            </span>

                            <input
                                type="checkbox"
                            />
                        </div>

                        <div className="
                            flex
                            justify-between
                        ">
                            <span>
                                Enable Streaming
                            </span>

                            <input
                                type="checkbox"
                                defaultChecked
                            />
                        </div>

                        <div className="
                            flex
                            justify-between
                        ">
                            <span>
                                Show Agent Activity
                            </span>

                            <input
                                type="checkbox"
                                defaultChecked
                            />
                        </div>

                    </div>

                </div>

            </div>

        </Layout>

    );
}