import Link from 'next/link'
import { Typography } from '@mui/material'
import { Dot } from 'lucide-react'

import { news } from '@/data/news'

export default function HomePage() {
    return (
        <main className='flex flex-col justify-center items-center p-[20px] bg-[#0D2B43]'>
            <Typography
                className='text-[#67D5EB] text-center'
                variant='h2'
                fontWeight='bold'>
                NEWS
            </Typography>
            <div className='grid grid-cols-[2fr_1fr] gap-[40px] pt-[20px] w-full'>
                <div className='bg-[#3A6A8E]/50 p-[40px]'>
                    <Typography
                        className='text-[#FFFFFF] text-left'
                        variant='h4'
                        fontWeight='bold'>
                        НОВОСТИ
                    </Typography>
                    <div className='pt-[40px]'>
                        <ul className='space-y-[40px]'>
                            {news.map((n) => (
                                <li key={n.id}>
                                    <div className='flex justify-between'>
                                        <div className='flex flex-col'>
                                            <Link href={`/news/${n.id}`}>
                                                <Typography
                                                    className='hover:underline text-[#67D5EB]'
                                                    variant='h5'
                                                    fontWeight='bold'>
                                                    {n.text.length > 50 ? `${n.text.slice(0, 50)}...` : n.text}
                                                </Typography>
                                            </Link>
                                            <Typography
                                                className='flex items-center text-[#88959D] text-left'
                                                variant='body1'>
                                                {new Date(n.date * 1000).toLocaleDateString('ru-RU')}
                                                <Dot
                                                    color='#528FB4'
                                                    size={50} />
                                                {n.type}
                                            </Typography>
                                        </div>
                                        <img
                                            src={n.attachments?.[0]?.image?.src || '/cover.png'}
                                            alt='Изображение'
                                            className='rounded-[10px] h-[95px] mb-[10px] w-[200px] object-cover' />
                                    </div>
                                    <span className='block h-[1px] bg-[#528FB4]' />
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
                <div className='flex flex-col gap-[40px]'>
                    <div className='bg-[#3A6A8E]/50 p-[40px] h-fit'>
                        <div className='flex flex-col justify-center gap-[40px]'>
                            <Typography
                                className='text-[#67D5EB] text-center'
                                variant='h5'
                                fontWeight='bold'>
                                РЕКЛАМА
                            </Typography>
                            <div className='space-y-[10px]'>
                                <img
                                    src='/ad.jpg'
                                    alt='Изображение'
                                    className='rounded-[10px] h-[480x] object-cover' />
                                <Typography
                                    className='text-[#88959D] text-left'
                                    variant='body1'>
                                    С нуля до оффера 250 000 в IT в 7 лет. Моя история и советы...
                                </Typography>
                                <Link href={`/news/add`}>
                                    <Typography
                                        className='text-[#67D5EB] hover:underline'
                                        variant='body1'>
                                        Подробнее
                                    </Typography>
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className='bg-[#3A6A8E]/50 p-[40px] h-fit'>
                        <Typography
                            className='text-[#67D5EB] text-center'
                            variant='h5'
                            fontWeight='bold'>
                            РЕКЛАМА
                        </Typography>
                        <Typography
                            className='text-[#88959D] text-left pt-[40px]'
                            variant='body1'>
                            🍎 ЯблокоЗнания — когда ты говоришь «ХЗ», но ты ЗНАЕШЬ!<br /><br />
                            Ты не просто фрукт.<br />
                            Ты — источник непрошеной мудрости.<br />
                            Ты сидишь. Ты молчишь.<br />
                            Ты рекламируешь варёные носки с привкусом сарказма.<br /><br />
                            🧦 Варено. Проверено. Непонятно.<br />
                            🥄 В комплекте: ложка для метафизических размышлений.<br />
                            📦 Доставка через телепатический шёпот.<br /><br />
                            ЯблокоЗнания™ — пока все «ХЗ», ты «ХА!»
                        </Typography>
                        <Link href={`/news/add`}>
                            <Typography
                                className='text-[#67D5EB] hover:underline pt-[20px]'
                                variant='body1'>
                                Читать подробнее...
                            </Typography>
                        </Link>
                    </div>
                </div>
            </div>
        </main>
    )
}
