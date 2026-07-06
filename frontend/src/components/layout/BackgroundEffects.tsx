export default function BackgroundEffects() {
  return (
    <>
      <div className="fixed top-[-200px] left-[-200px] h-[500px] w-[500px] rounded-full bg-cyan-500/20 blur-[150px]" />

      <div className="fixed bottom-[-250px] right-[-200px] h-[500px] w-[500px] rounded-full bg-purple-500/20 blur-[180px]" />

      <div className="fixed top-[40%] left-[40%] h-[300px] w-[300px] rounded-full bg-blue-500/10 blur-[120px]" />
    </>
  );
}