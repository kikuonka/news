'use client';

export default function Error({ error }: { error: Error }) {
    return (
        <div className="p-6 text-red-700">
            <h2>Произошла ошибка:</h2>
            <p>{error.message}</p>
        </div>
    );
}
