"use client"
import { useSession } from 'next-auth/react'
import { redirect } from 'next/navigation'
import React from 'react'
import ChatInput from '~/app/_components/chats/chat-input'


const page = () => {
  const {data:session} = useSession()
  if(!session?.user.id){
    redirect("/")
  }
  return (
    <div>
      <ChatInput />
    </div>
  )
}

export default page
