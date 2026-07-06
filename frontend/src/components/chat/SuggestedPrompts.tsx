const prompts = [
  "Am I eligible for PMEGP?",
  "Compare Mudra and PMEGP",
  "Best schemes for women entrepreneurs",
  "Schemes for manufacturing startups in Telangana",
  "Explain TS-iPASS",
  "Documents required for PMEGP"
];

interface Props {
  onSelect: (prompt: string) => void;
}

export default function SuggestedPrompts({
  onSelect
}: Props) {

  return (
    <div className="flex flex-wrap gap-3">
      {prompts.map((prompt) => (
        <button
          key={prompt}
          onClick={() => onSelect(prompt)}
          className="
            rounded-full
            border
            border-cyan-500/20
            bg-white/5
            px-4
            py-2
            text-sm
            transition-all
            hover:border-cyan-400
            hover:bg-cyan-500/10
            hover:shadow-[0_0_20px_rgba(0,255,255,0.2)]
          "
        >
          {prompt}
        </button>
      ))}
    </div>
  );
}