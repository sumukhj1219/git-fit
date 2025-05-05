"use client";

import { Loader, Copy } from "lucide-react";
import React, { useEffect, useState } from "react";
import { toast } from "sonner";
import { Button } from "~/components/ui/button";
import { api } from "~/trpc/react";

const ApiTab = () => {
    const [key, setKey] = useState("");

    const { data: apiKey, refetch, isLoading } = api.apiKey.getApiKeys.useQuery();

    useEffect(() => {
        if (apiKey?.key) {
            setKey(apiKey.key);
        }
    }, [apiKey]);

    const { mutate: generateApiKey, isPending } = api.apiKey.createApikey.useMutation({
        onSuccess: (data) => {
            setKey(data.key);
            refetch();
            toast.success("API key generated successfully.");
        },
        onError: (error) => {
            toast.error(error.message || "Failed to generate API key.");
        },
    });

    const handleCopy = () => {
        if (!key) return;
        navigator.clipboard.writeText(key);
        toast.success("API key copied to clipboard!");
    };

    return (
        <div className="space-y-4">
            <Button
                variant="snow"
                size="sm"
                onClick={() => generateApiKey()}
                disabled={isPending}
            >
                {isPending ? (
                    <span className="flex items-center justify-center gap-2">
                        <Loader className="h-3 w-3 animate-spin" />
                        Generating...
                    </span>
                ) : (
                    "Generate new API key"
                )}
            </Button>

            <div className="border-2 border-dotted border-neutral-700 p-4 rounded text-center text-secondary/70 relative">
                <p className="text-xl font-semibold">Your API Key</p>
                {isLoading ? (
                    <div className="mt-4 flex justify-center">
                        <Loader className="h-4 w-4 animate-spin" />
                    </div>
                ) : (
                    <>
                        <p className="mt-2 font-mono break-all text-2xs md:text-xs">{key || "No API key active"}</p>
                        {key && (
                            <Button
                                size="icon"
                                variant="ghost"
                                className="absolute top-3 right-3"
                                onClick={handleCopy}
                            >
                                <Copy className="w-4 h-4" />
                            </Button>
                        )}
                    </>
                )}
            </div >

            {/* <div className="border-2 border-dotted border-neutral-700 p-4 rounded text-center text-secondary/70 relative">
            <p className="text-xl font-semibold">Manage your keys</p>

            </div> */}
        </div>
    );
};

export default ApiTab;
