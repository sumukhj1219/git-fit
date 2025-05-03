"use client";

import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import ChatInput from "~/app/_components/chats/chat-input";

const Page = () => {
  const { data: session, status } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (status === "unauthenticated") {
      router.push("/api/auth/signin");
    }
  }, [status, router]);

  if (status === "loading") {
    return <div className="p-4 text-center text-neutral-400">Loading...</div>;
  }

  return (
    <div>
      <ChatInput />
    </div>
  );
};

export default Page;
