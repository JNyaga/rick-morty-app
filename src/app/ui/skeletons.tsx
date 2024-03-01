// Loading animation
const shimmer =
    'before:absolute before:inset-0 before:-translate-x-full before:animate-[shimmer_2s_infinite] before:bg-gradient-to-r before:from-transparent before:via-white/60 before:to-transparent';

/**
 * Renders a skeleton card component.
 * This component is used to display a loading state or a placeholder while data is being fetched.
 */
export function SkeletonCharacterCard() {
    return (
        <div className={`relative bg-white border rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700 transform transition duration-500 hover:scale-105 ${shimmer}`}>
            <div className="flex justify-center items-center">
                <div className={`animate-pulse w-full h-40 bg-gray-200 rounded-t-lg ${shimmer}`}></div>
            </div>
            <div className="px-2.5 text-center">
                <div className={`animate-pulse h-5 bg-gray-200 rounded-full ${shimmer}`}></div>
                <div className="mt-2">
                    <div className={`animate-pulse h-4 bg-gray-200 rounded ${shimmer}`}></div>
                    <div className={`mt-1 animate-pulse h-4 bg-gray-200 rounded ${shimmer}`}></div>
                </div>
                <div className={`absolute top-0 right-0 mt-3 mr-3 rounded-full animate-pulse bg-gray-200 h-4 w-4 ${shimmer}`}></div>
            </div>
        </div>
    );
}


export function SkeletonCardList() {
    return (
        <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 p-4 md:p-2 xl:p-5">
            {/* Render a number of skeleton cards */}
            {[...Array(10)].map((_, i) => <SkeletonCharacterCard key={i} />)}
        </div>
    )
}

export const FiltersSkeleton = () => {
    return (
        <div className="bg-white text-black p-4 rounded-lg shadow-sm">
            <h3 className="text-2xl font-bold text-center mb-3">Filters</h3>
            <div className="text-blue-500 cursor-pointer hover:underline text-center mb-3">
                Loading...
            </div>
            <div className="accordion" id="accordionExample">
                <div className="skeleton-accordion"></div>
                <div className="skeleton-accordion"></div>
                <div className="skeleton-accordion"></div>
            </div>
        </div>
    );
};
