import Link from 'next/link'
import React from 'react'
import ShinyText from '~/components/shiny-text'

const Title = () => {
  return (
    <div className="flex flex-col items-center justify-center px-4 text-center mx-auto max-w-3xl">
      <h1 className="text-3xl md:text-5xl text-secondary/85 font-bold mt-10">
        Git Fit — Commit Smarter, Not Harder.
      </h1>
      <h3 className="text-base md:text-xl text-secondary/50 font-medium mt-5">
        AI-powered commit messages, tailored to your diff.
      </h3>
      <Link
        href={`/chat`}
        className="bg-neutral-900/50 text-secondary/50 mt-8 w-full max-w-xs p-3 md:p-2 border border-neutral-800 flex items-center rounded-full justify-center"
      >
        <ShinyText
          text="Start generating now"
          disabled={false}
          speed={2}
          className="custom-class"
        />
      </Link>
    </div>
  )
}

export default Title
