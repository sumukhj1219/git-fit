import { cn } from "~/lib/utils";
import React from "react";
import {
  IconClipboardCopy,
  IconFileBroken,
  IconSignature,
  IconTableColumn,
} from "@tabler/icons-react";
import { BentoGrid, BentoGridItem } from "~/components/ui/bento-grid";
import { PaletteIcon, SettingsIcon, SparklesIcon } from "lucide-react";

export function Features() {
  return (
    <>
      <h2 className="text-secondary/50 flex items-center justify-center mx-auto m-10 text-5xl font-medium mt-20">
        Features
      </h2>
      <BentoGrid>
        {items.map((item, i) => (
          <BentoGridItem
            key={i}
            className={item.className}
            title={item.title}
            description={item.description}
            image={item.image}
            icon={item.icon}
          />
        ))}
      </BentoGrid>
    </>
  );
}
const items = [
  {
    title: "AI Commit Generator",
    description: "Generate smart, context-aware commit messages from your Git diffs using AI.",
    icon: <SparklesIcon className="h-4 w-4 text-neutral-500" />,
    image: "/preview.png",
    className: "md:col-span-2",
  },
  {
    title: "Commit Type Selection",
    description: "Choose commit types like feat, fix, chore, style, and more with a simple interface.",
    icon: <SettingsIcon className="h-4 w-4 text-neutral-500" />,
    image: "/type.png",
    className: "md:col-span-1",
  },
  {
    title: "Custom Commit Styles",
    description: "Switch between commit formats like Jira, Emoji, Concise, or Conventional.",
    icon: <PaletteIcon className="h-4 w-4 text-neutral-500" />,
    image: "/style.png",
    className: "md:col-span-3",
  },
];
