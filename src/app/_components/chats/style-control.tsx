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
} from "~/components/ui/dropdown-menu"

const styleControllers = [
    "concise",
    "conventional",
    "emoji",
    "casual",
    "jira",
    "strict"
]

const StyleControl = ({ selected, onSelect }: { selected: string; onSelect: (style: string) => void }) => {
    return (
        <div className='absolute bottom-3 left-3 z-20 '>
            <DropdownMenu >
                <DropdownMenuTrigger asChild>
                    <Button size="icon" className="p-1  ring-none rounded-full  bg-neutral-950 text-secondary ">
                        <PenIcon className="w-3 h-3 " />
                    </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent className='bg-neutral-900/80 border text-sm border-neutral-700 text-secondary/50'>
                    <DropdownMenuLabel>Select Style</DropdownMenuLabel>
                    <DropdownMenuSeparator className='bg-neutral-950' />
                    {styleControllers.map((style) => (
                        <DropdownMenuItem
                        className={`hover:bg-purple-500/20 bg-neutral-950/25 rounded-md transition-colors duration-150 ${
                          style === selected ? "bg-neutral-700/30 text-secondary border border-neutral-700" : "bg-transparent"
                        }
                          data-[highlighted]:bg-neutral-900/20 data-[highlighted]:text-secondary 
                        
                        `}
                        key={style}
                        onClick={() => onSelect(style)}
                      >
                        {style === selected ? <Check className='h-1 w-1 bg-green-950 rounded-xl border border-neutral-700' /> : ""} {style}
                      </DropdownMenuItem>
                      
                    ))}
                </DropdownMenuContent>
            </DropdownMenu>
        </div>
    );
};

export default StyleControl

