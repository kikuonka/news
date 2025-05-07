import { getNewsById } from '@/data/news';
import { notFound } from 'next/navigation';

export default async function NewsModal({ params }: { params: { id: string } }) {
    const item = await getNewsById(params.id);
    if (!item) return notFound();

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
            <div className="bg-white p-6 rounded shadow-md w-[400px]">
                <h3 className="text-lg font-semibold">{item.text}</h3>
                <p className="mt-2 text-sm text-gray-500">
                    {new Date(item.date * 1000).toLocaleDateString('ru-RU')}
                </p>

                {item.attachments?.[0]?.image?.src && (
                    <img
                        src={item.attachments[0].image.src}
                        alt="Изображение"
                        className="mt-4 rounded w-full max-h-[200px] object-cover"
                    />
                )}
            </div>
        </div>
    );
}
