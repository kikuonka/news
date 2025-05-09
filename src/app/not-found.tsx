'use client'

import { Typography } from '@mui/material'

import Button from './component/Button'

export default function NotFoundPage() {
    return (
        <div className='flex flex-col items-center justify-center'>
            <Typography
                className='text-center text-[#67D5EB]'
                fontSize='128px'
                fontWeight='bold'>
                404
            </Typography>
            <Typography
                className='text-center text-[#67D5EB]'
                fontSize='48px'
                fontWeight='bold'>
                СТРАНИЦА НЕ НАЙДЕНА
            </Typography>
            <img
                className='pt-[40px] pb-[20px]'
                src={'/chikawa-not-found.png'}
                alt={'Страница не найдена'}>
            </img>
            <Typography
                className='text-center text-white'
                fontSize='24px'>
                Извини, я не могу найти данный адрес страницы в своем списке...<br />
                Скорее всего, его не существует,<br />
                но, на всякий случай, проверь - правильно ли ты его ввел ❤
            </Typography>
            <div className='pt-[40px]'>
                <Button />
            </div>
        </div>
    )
}
