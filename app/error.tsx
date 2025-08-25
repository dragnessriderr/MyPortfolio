'use client' // error boundaries must be Client Components

import { useEffect } from 'react'

export default function Error({
    error,
    reset,
}: {
    error: Error & { digest?: string }
    reset: () => void
}) {
    useEffect(() => {
        // log the error to an error reporting service
        console.error(error)
    }, [error])

    return (
        <div>
            <h2>Oh no! Something went wrong!</h2>
            <button
                onClick={
                    // attempt to recover by trying to re-render the segment
                    () => reset()
                }
            >
                Try again
            </button>
        </div>
    )
}