import type { ReactNode } from "react";

import Sidebar from "./Sidebar";
import BackgroundEffects from "./BackgroundEffects";

interface Props {
  children: ReactNode;
}

export default function Layout({
  children
}: Props) {
  return (
    <div className="
      relative
      flex
      min-h-screen
      bg-[#050816]
      text-white
    ">
      <BackgroundEffects />

      <Sidebar />

      <main className="
        relative
        z-10
        flex-1
        overflow-y-auto
        p-8
      ">
        {children}
      </main>
    </div>
  );
}