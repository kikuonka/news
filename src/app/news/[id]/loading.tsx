import { Typography } from '@mui/material'

import LoadingSpinner from '@/src/app/component/LoadingSpinner'

export default function Loading() {
    return (
        <div className='flex flex-col items-center justify-center'>
            <Typography
                className='text-center text-[#67D5EB]'
                fontSize='128px'
                fontWeight='bold'>
                Пу-пу-пу...
            </Typography>
            <Typography
                className='text-center text-[#67D5EB]'
                fontSize='48px'
                fontWeight='bold'>
                ЗАГРУЗКА
            </Typography>
            <img
                className='pt-[40px] pb-[20px]'
                src={'/chikawa-loading.png'}
                alt={'Загрузка'}>
            </img>
            <Typography
                className='text-center text-white'
                fontSize='24px'>
                Просто подожди немного ❤️
            </Typography>
            <LoadingSpinner />
        </div>
    )
}
