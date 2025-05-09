'use client'

import { useRouter } from 'next/navigation'

import { Typography } from '@mui/material'

export default function Button({ id, isPush, isError }: { id?: string, isPush?: boolean, isError?: boolean }) {
    const router = useRouter()

    const goToFullPage = () => {
        router.replace(`/news/${id}?modal=disabled`)
        window.location.reload()
    }

    const goToBack = () => {
        window.location.href = '/'
    }

    const goToAd = () => {
        router.push('/ad')
    }

    return (
        <>
            {isPush && !isError && (
                <button
                    onClick={goToFullPage}
                    className='bg-[#67D5EB] px-[50px] py-[5px] rounded-[20px] text-[#3A6A8E] text-[34px] hover:text-[#0D2B43] text-center cursor-pointer'>
                    Читать далее
                </button>
            )}
            {!isPush && !isError && (
                <button
                    onClick={goToBack}
                    className='bg-[#67D5EB] px-[50px] py-[5px] rounded-[20px] text-[#3A6A8E] text-[34px] hover:text-[#0D2B43] text-center cursor-pointer'>
                    На главную
                </button>
            )}
            {!isPush && isError && (
                <button className='bg-transparent cursor-pointer'>
                    <Typography
                        onClick={goToAd}
                        className='text-[#67D5EB] hover:underline pt-[20px]'
                        variant='body1'>
                        Читать подробнее...
                    </Typography>
                </button>
            )}
        </>
    )
}
