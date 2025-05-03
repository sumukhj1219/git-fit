import React from "react";

interface Props {
  selected: string;
  onCommit: (commit: string | null) => void;
}

const commitTypes = [
  "feat",
  "fix",
  "docs",
  "style",
  "refactor",
  "perf",
  "test",
  "chore",
  "build",
  "ci",
  "revert",
];

const CommitTypes = ({ selected, onCommit }: Props) => {
  return (
    <div className="w-full flex items-center flex-wrap gap-2">
      {commitTypes.map((commit) => {
        const isSelected = selected === commit;
        return (
          <span
            key={commit}
            onClick={() => onCommit(isSelected ? null : commit)}
            className={`cursor-pointer rounded-lg border px-2 py-1 text-xs transition-all duration-200 ${
              isSelected
                ? "bg-green-950 text-secondary/50 border-neutral-800"
                : "bg-neutral-950 text-secondary/50 border-neutral-800 hover:text-secondary/70 hover:border-neutral-700"
            }`}
          >
            {commit}
            {isSelected && (
              <span className="ml-2 text-sm font-bold">×</span> 
            )}
          </span>
        );
      })}
    </div>
  );
};

export default CommitTypes;
