import data from './news.json'

export type NewsAttachment = {
    type: string
    image?: {
        src: string
        width: number
        height: number
    }
    link?: string
    titleLink?: string
    caption?: string
    description?: string
}

export type NewsItem = {
    id: number
    text: string
    date: number
    type: string
    attachments?: NewsAttachment[]
}

export const news: NewsItem[] = data

export async function getNewsById(id: string | number): Promise<NewsItem | undefined> {
    return news.find((item) => item.id === Number(id))
}
