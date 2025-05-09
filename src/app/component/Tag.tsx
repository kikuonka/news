import { Typography } from '@mui/material'

export default function Tag({ title }: { title: string }) {
    return (
        <div className='px-[20px] py-[5px] rounded-[100px] bg-[#3A6A8E]/50 '>
            <Typography
                className='text-white text-center'
                fontSize='24px'>
                {title}
            </Typography>
        </div>
    )
}
