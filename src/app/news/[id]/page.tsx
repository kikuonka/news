import { getNewsById, news } from '@/data/news';
import { notFound } from 'next/navigation';

export async function generateStaticParams() {
    return news.map((n) => ({ id: n.id.toString() }));
}

export const dynamicParams = false;

export default async function NewsPage({ params }: { params: { id: string } }) {
    // Имитация задержки
    await new Promise((resolve) => setTimeout(resolve, 2000));

    const item = await getNewsById(params.id);
    if (!item) return notFound();

    return (
        <div className="p-6">
            <h2 className="text-xl font-bold mb-2">{item.text}</h2>
            <p className="text-sm text-gray-500">
                {new Date(item.date * 1000).toLocaleDateString('ru-RU')}
            </p>

            {item.attachments?.[0]?.image?.src && (
                <img
                    src={item.attachments[0].image.src}
                    alt="Превью"
                    className="mt-4 rounded max-w-full max-h-[300px] object-cover"
                />
            )}
        </div>
    );
}
