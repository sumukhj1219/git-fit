import { Check, PenIcon } from 'lucide-react'
import React from 'react'
import { Button } from '~/components/ui/button'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '~/components/ui/dropdown-menu'

const styleControllers = [
  "concise",
  "conventional",
  "casual", 
  "emoji",
  "jira",         
  "strict",       
]

const StyleControl = ({
  selected,
  onSelect,
  isProUser,
  onUpgradeClick,
}: {
  selected: string;
  onSelect: (style: string) => void;
  isProUser: boolean;
  onUpgradeClick: () => void;
}) => {
  return (
    <div className='absolute bottom-12 left-3 z-20 '>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button size="icon" className="p-1 absolute  ring-none rounded-full bg-neutral-950 text-secondary">
            <PenIcon className="w-3 h-3" />
          </Button>
        </DropdownMenuTrigger>

        <DropdownMenuContent className='bg-neutral-900/80 border text-sm border-neutral-700 text-secondary/50'>
          <DropdownMenuLabel>Select Style</DropdownMenuLabel>
          <DropdownMenuSeparator className='bg-neutral-950' />
          {styleControllers.map((style, index) => {
            const isProOnly = index >= 3;

            return (
              <DropdownMenuItem
                key={style}
                onClick={() => {
                  if (isProOnly && !isProUser) {
                    onUpgradeClick();
                    return;
                  }
                  onSelect(style);
                }}
                className={`
                  hover:bg-purple-500/20 bg-neutral-950/25 rounded-md transition-colors duration-150 
                  ${style === selected ? "bg-neutral-700/30 text-secondary border border-neutral-700" : ""}
                  data-[highlighted]:bg-neutral-900/20 data-[highlighted]:text-secondary
                  ${isProOnly && !isProUser ? "opacity-50 cursor-not-allowed" : ""}
                `}
              >
                {style === selected ? <Check className='h-1 w-1 bg-green-950 rounded-xl border border-neutral-700' /> : ""} {style}
                {isProOnly && !isProUser && <span className="ml-auto text-xs text-purple-500">PRO</span>}
              </DropdownMenuItem>
            )
          })}
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};

export default StyleControl;
