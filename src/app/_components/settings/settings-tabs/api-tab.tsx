"use client";

import { Loader } from "lucide-react";
import React, { useState } from "react";
import { toast } from "sonner";
import { Button } from "~/components/ui/button";
import { api } from "~/trpc/react";

const ApiTab = () => {
    const [key, setKey] = useState("");

    const { mutate: generateApiKey, isPending } = api.apiKey.createApikey.useMutation({
        onSuccess: (data) => {
            setKey(data.key);
            toast.success("API key generated successfully.");
        },
        onError: (error) => {
            toast.error(error.message || "Failed to generate API key.");
        },
    });

    return (
        <div className="space-y-4">
            <Button
                variant="snow"
                size="sm"
                onClick={() => generateApiKey()}
                disabled={isPending}
            >
                {isPending ? (
                    <span className="flex items-center justify-center">
                        <Loader className="h-3 w-3 animate-spin" /> Generating new key
                    </span>
                ) : (
                    "Generate new API key"
                )}
            </Button>

            <div className="border-2 border-dotted border-neutral-700 p-4 rounded text-center text-secondary/70">
                <p className="text-xl font-semibold">Your API Key</p>
                <p className="mt-2 font-mono break-all">
                    {key ? key : "No API key active"}
                </p>
            </div>
        </div>
    );
};

export default ApiTab;
