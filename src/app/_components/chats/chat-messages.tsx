"use client"
import { Copy } from "lucide-react";
import React from "react";
import { toast } from "sonner";

interface Props {
  userMessage: string;
  aiResponse: string;
}

export const ChatMessages = ({ userMessage, aiResponse }: Props) => {
  return (
    <div className="w-full max-w-xl flex flex-col gap-2 items-end justify-end">
      {userMessage && (
        <div className="bg-neutral-900/50 w-3/4 flex items-center justify-center rounded-xl p-2 border text-secondary/50 border-neutral-800 text-xs md:text-sm self-end">
          {userMessage}
        </div>
      )}

      {aiResponse && (
        <div
          className="bg-neutral-900 flex items-center justify-between gap-2 rounded-xl p-2.5 border text-secondary/70 border-neutral-800 text-xs md:text-sm self-start cursor-pointer hover:bg-neutral-800 transition"
          onClick={() =>{
            navigator.clipboard.writeText(`git commit -m "${aiResponse}"`)
            toast.success("Copied to clipboard")
          }
          }
        >
          <span>{`git commit -m "${aiResponse}"`}</span>
          <Copy className="w-3 h-3" />
        </div>
      )}
    </div>
  );
};
