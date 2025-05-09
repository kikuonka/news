'use client'

import { useRouter } from 'next/navigation'
import { X } from 'lucide-react'

export default function CloseButton() {
    const router = useRouter()

    return (
        <X
            onClick={router.back}
            className='flex justify-end cursor-pointer'
            size='50px'
            color='#67D5EB' />
    )
}
