"use client"
import { Link } from 'lucide-react'
import React from 'react'
import StarBorder from '~/components/star-border'

const StarUs = () => {
    return (
        <div className='flex items-center justify-center mx-auto mt-10'>
                <StarBorder
                    as="button"
                    className="custom-class"
                    color="cyan"
                    speed="1s"
                >
                    Star us on Github
                </StarBorder>
        </div>
    )
}

export default StarUs
