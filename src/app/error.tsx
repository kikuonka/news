'use client'

import { Typography } from '@mui/material'

import Button from './component/Button'

export default function Error({ error }: { error: Error }) {
    return (
        <div className='flex flex-col items-center justify-center p-[40px]'>
            <Typography
                className='text-center text-[#67D5EB]'
                fontSize='128px'
                fontWeight='bold'>
                ERROR
            </Typography>
            <Typography
                className='text-center text-[#67D5EB]'
                fontSize='48px'
                fontWeight='bold'>
                ОШИБКА
            </Typography>
            <img
                className='pt-[40px] pb-[20px]'
                src={'/chikawa-error.png'}
                alt={'Ошибка'}>
            </img>
            <Typography
                className='text-center text-white'
                fontSize='24px'>
                Произошла какая-то ошибка!<br />
                Пока я иду бить кодера, проверь, что ты не пытался перейти по ссылке на очередной скам...<br />
                К сожалению, кодер не чист на душу и публикует разный хлам<br />
                (лишь бы накопить на баночку ЛитЭнерджи)<br />
                Не расставайся, если проблема внутри программы, то ее исправят в скором времени!
            </Typography>
            <div className='pt-[40px]'>
                <Typography
                    className='text-center text-[#FF0000]'
                    fontSize='20px'>
                    log:<br />
                    {error.message}
                </Typography>
            </div>
            <div className='pt-[40px]'>
                <Button />
            </div>
        </div>
    )
}
