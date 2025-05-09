import { notFound } from 'next/navigation'
import { Typography } from '@mui/material'

import { getNewsById } from '@/data/news'
import CloseButton from '@/src/app/component/CloseButton'
import Tag from '@/src/app/component/Tag'
import Button from '@/src/app/component/Button'

export default async function NewsModal({ params }: { params: { id: string } }) {
    const item = await getNewsById(params.id);
    if (!item) return notFound();

    return (
        <div className='fixed inset-0 z-50 flex justify-center items-center bg-[#0D2B43]/50'>
            <div className='w-[700px] h-[800px] flex flex-col p-[40px] bg-[#0D2B43] border-4 border-[#67D5EB] shadow-[8px_8px_8px_rgba(103,213,235,0.5)]'>
                <div className='flex justify-end'>
                    <CloseButton />
                </div>
                <img
                    src={item.attachments?.[0]?.image?.src || '/cover.png'}
                    alt='Изображение'
                    className='h-[300px] w-full pt-[40px] object-contain' />
                <div className='py-[20px] w-fit'>
                    <Tag title={item.type} />
                </div>
                <Typography
                    className='text-white text-left whitespace-pre-line'
                    fontSize='24px'>
                    {item.text.length > 90 ? `${item.text.slice(0, 90)}...` : item.text}
                </Typography>
                <div className='py-[40px] mt-auto flex justify-center'>
                    <Button isPush={true} id={params.id} />
                </div>
            </div>
        </div>
    )
}
