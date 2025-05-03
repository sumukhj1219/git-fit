"use client";

import React, { useState } from "react";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Loader, SendHorizonal } from "lucide-react";

import { Button } from "~/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "~/components/ui/form";
import { Textarea } from "~/components/ui/textarea";
import { api } from "~/trpc/react";
import CommitTypes from "./commit-types";
import { ChatMessages } from "./chat-messages";
import StyleControl from "./style-control";

const formSchema = z.object({
  message: z.string().min(2, {
    message: "Hey! You cannot send blank input thanks to Zod.",
  }),
});

const ChatInput = () => {
  const [commitType, setCommitType] = useState("");
  const [userMessage, setUserMessage] = useState("");
  const [aiResponse, setAiResponse] = useState("");
  const [style, setStyle] = useState("concise");

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: { message: "" },
  });

  const { mutate: generateCommit, isPending } = api.tools.generateCommit.useMutation({
    onSuccess: (response) => {
      setAiResponse(response);
      form.reset();
    },
  });

  const onSubmit = (values: z.infer<typeof formSchema>) => {
    setUserMessage(values.message);
    setAiResponse(""); 
    generateCommit({ ...values, commitType, style });
    form.reset()
  };

  return (
    <div className="max-w-2xl w-full mx-auto px-4 py-6 flex flex-col justify-center items-center min-h-screen">
      {(userMessage || aiResponse) && (
        <div className="flex-1 overflow-y-auto mb-4  pr-1 custom-scrollbar mt-20 max-w-xl overflow-x-hidden">
          <ChatMessages userMessage={userMessage} aiResponse={aiResponse} />
        </div>
      )}

      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
          <CommitTypes
            selected={commitType}
            onCommit={(commit) => {
              setCommitType(commit || "");
              const current = form.getValues("message");
              const clean = current.replace(/^\w+:\s*/, "");
              form.setValue("message", commit ? `${commit}: ${clean}` : clean);
            }}
          />

          <FormField
            control={form.control}
            name="message"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <div className="relative top-3 left-3 z-20">
                    <Textarea
                      {...field}
                      rows={8}
                      placeholder="Paste a `git diff` output here to generate a commit message."
                      className="w-full text-secondary/50 bg-neutral-900 rounded-2xl border border-neutral-700 shadow-[0_0_0_1px_#27272a,inset_0_0_8px_#27272a] focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-purple-500 pl-12 pr-14 pb-14 resize-none text-xs md:text-sm custom-scrollbar max-h-60"

                    />
                    <StyleControl selected={style} onSelect={setStyle} />
                    <Button
                      type="submit"
                      size="icon"
                      disabled={isPending}
                      className="absolute bottom-3 right-3 z-20 bg-neutral-950 rounded-full hover:bg-neutral-950/30 text-white"

                    >
                      {isPending ? (
                        <Loader className="h-2 w-2 animate-spin" />
                      ) : (
                        <SendHorizonal className="h-4 w-4" />
                      )}
                    </Button>
                  </div>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </form>
      </Form>
    </div>
  );
};

export default ChatInput;
