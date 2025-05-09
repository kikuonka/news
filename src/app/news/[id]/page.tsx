import { getNewsById } from '@/data/news'
import Tag from '@/src/app/component/Tag'
import Button from '@/src/app/component/Button'

import { notFound } from 'next/navigation'
import { Typography } from '@mui/material'

export const dynamic = 'force-dynamic'

export default async function NewsPage({ params }: { params: { id: string } }) {
    await new Promise((resolve) => setTimeout(resolve, 2000));

    const item = await getNewsById(params.id);
    if (!item) return notFound();

    return (
        <div className='flex flex-col justify-center items-center p-[20px] bg-[#0D2B43]'>
            <Typography
                className='text-[#67D5EB] text-center'
                variant='h2'
                fontWeight='bold'>
                NEWS
            </Typography>
            <div className='flex flex-col items-start p-[20px] w-full'>
                <Typography
                    className='text-white text-left'
                    fontSize='48px'
                    fontWeight='bold'>
                    {item.text.length > 50 ? `${item.text.slice(0, 50)}...` : item.text}
                </Typography>
                <div className='flex justify-center items-center gap-[20px] pt-[20px]'>
                    <Typography
                        className='text-white text-left'
                        fontSize='24px'>
                        {new Date(item.date * 1000).toLocaleDateString('ru-RU')}
                    </Typography>
                    <Tag title={item.type} />
                </div>
                <div className='pt-[40px] w-full'>
                    {item.attachments?.[0]?.image?.src && (
                        <img
                            src={item.attachments[0].image.src}
                            alt="Cover"
                            className='float-left max-h-[450px] mr-[40px] mb-[40px]'
                        />
                    )}
                    <Typography
                        className='text-white text-left whitespace-pre-line'
                        fontSize='24px'>
                        {item.text}
                    </Typography>
                </div>
                <div className='w-full flex justify-center items-center pt-[80px]'>
                    <Button />
                </div>
            </div>
        </div>
    )
}
