"use client"
import React from 'react'
import Settings from '../settings/settings'
import { Avatar, AvatarFallback, AvatarImage } from '~/components/ui/avatar'
import { useSession } from 'next-auth/react'
import ShinyText from '~/components/shiny-text'


const Navbar = () => {
  const { data: session } = useSession()

  return (
    <nav className='fixed top-4 m-2 left-1/2 -translate-x-1/2 z-50 bg-neutral-950/10 hover:bg-neutral-950/5 backdrop-blur-md rounded-xl  max-w-xl w-full px-6 py-3 text-secondary/50 border border-neutral-700 shadow-lg'>
      <div className='flex items-center justify-between mx-auto'>
        <Settings />
        <ShinyText text="Powered by precision" disabled={false} speed={3} className='custom-class' />
        <Avatar>
          <AvatarImage src={session?.user?.image || undefined} />
          <AvatarFallback>
            {session?.user?.name?.[0]?.toUpperCase() || 'U'}
          </AvatarFallback>
        </Avatar>
      </div>
    </nav>
  )
}

export default Navbar
