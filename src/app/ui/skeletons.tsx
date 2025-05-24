// src/app/ui/skeletons.tsx
import React from 'react';

// Reusable shimmer animation class defined in Tailwind config
const shimmer = 'relative overflow-hidden before:absolute before:inset-0 before:-translate-x-full before:animate-shimmer before:bg-gradient-to-r before:from-transparent before:via-white/60 before:to-transparent';

/**
 * Skeleton for a single character card, mimicking CharacterCard component.
 */
export function SkeletonCharacterCard() {
    return (
        <div className={`relative bg-white dark:bg-gray-800 border rounded-lg shadow-md transform transition duration-500 ${shimmer}`}>
            {/* Image placeholder */}
            <div className="flex justify-center items-center">
                <div className="w-full h-64 bg-gray-200 dark:bg-gray-700 rounded-t-lg" />
            </div>
            {/* Text placeholders */}
            <div className="px-4 py-3 text-center">
                {/* Name placeholder */}
                <div className="h-6 w-3/4 mx-auto bg-gray-200 dark:bg-gray-700 rounded" />
                {/* Location label placeholder */}
                <div className="mt-2 h-4 w-1/2 mx-auto bg-gray-200 dark:bg-gray-700 rounded" />
                {/* Location value placeholder */}
                <div className="mt-1 h-5 w-2/3 mx-auto bg-gray-200 dark:bg-gray-700 rounded" />
                {/* Status badge placeholder */}
                <div className="absolute top-2 right-2 h-6 w-16 bg-gray-200 dark:bg-gray-700 rounded-full" />
            </div>
        </div>
    );
}

/**
 * Skeleton for the character card list, mimicking CharacterCardList component.
 */
export function SkeletonCardList() {
    return (
        <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 p-4 md:p-2 xl:p-5">
            {[...Array(6)].map((_, i) => (
                <SkeletonCharacterCard key={i} />
            ))}
            {/* Pagination loading indicator */}
            <div className="col-span-full flex justify-center mt-4">
                <svg
                    aria-hidden="true"
                    className="h-8 w-8 animate-spin fill-sky-600 text-gray-200 dark:text-gray-600"
                    viewBox="0 0 100 101"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                        fill="currentColor"
                    />
                    <path
                        d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                        fill="currentFill"
                    />
                </svg>
                <span className="sr-only">Loading...</span>
            </div>
        </div>
    );
}

/**
 * Skeleton for the filters component, mimicking Filters component.
 */
export function FiltersSkeleton() {
    return (
        <div className={`bg-white dark:bg-gray-800 p-4 rounded-lg shadow-sm ${shimmer}`}>
            {/* Title placeholder */}
            <div className="h-8 w-1/3 mx-auto bg-gray-200 dark:bg-gray-700 rounded mb-3" />
            {/* Clear filters placeholder */}
            <div className="h-5 w-1/4 mx-auto bg-gray-200 dark:bg-gray-700 rounded mb-3" />
            {/* Accordion placeholders */}
            <div className="grid grid-cols-1 gap-4">
                {[...Array(3)].map((_, i) => (
                    <div key={i} className="p-4 bg-gray-100 dark:bg-gray-700 rounded-lg">
                        <div className="h-4 w-1/2 bg-gray-200 dark:bg-gray-600 rounded mb-2" />
                        <div className="h-10 w-full bg-gray-200 dark:bg-gray-600 rounded" />
                    </div>
                ))}
            </div>
        </div>
    );
}

/**
 * Skeleton for the character detail page, mimicking CharacterDetail component.
 */
export function CharacterSkeleton() {
    return (
        <div className={`flex flex-col items-center justify-center bg-gray-100 dark:bg-gray-900 py-10 min-h-screen ${shimmer}`}>
            <div className="max-w-md bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden md:max-w-2xl">
                <div className="md:flex">
                    {/* Image placeholder */}
                    <div className="md:flex-shrink-0">
                        <div className="h-48 w-full md:w-48 bg-gray-200 dark:bg-gray-700" />
                    </div>
                    <div className="p-8 w-full">
                        {/* Species placeholder */}
                        <div className="h-4 w-1/4 bg-gray-200 dark:bg-gray-700 rounded mb-2" />
                        {/* Edit button placeholder */}
                        <div className="h-10 w-32 bg-gray-200 dark:bg-gray-700 rounded float-right mb-4" />
                        {/* Name placeholder */}
                        <div className="h-6 w-3/4 bg-gray-200 dark:bg-gray-700 rounded mb-4" />
                        {/* Status, gender, type, created, location, description, episodes placeholders */}
                        {[...Array(6)].map((_, i) => (
                            <div key={i} className="mt-2 flex items-center">
                                <div className="h-4 w-1/4 bg-gray-200 dark:bg-gray-700 rounded mr-2" />
                                <div className="h-4 w-1/2 bg-gray-200 dark:bg-gray-700 rounded" />
                            </div>
                        ))}
                        {/* Episode list placeholder */}
                        <div className="mt-4">
                            <div className="h-4 w-1/3 bg-gray-200 dark:bg-gray-700 rounded mb-2" />
                            {[...Array(3)].map((_, i) => (
                                <div key={i} className="h-4 w-2/3 bg-gray-200 dark:bg-gray-700 rounded mt-1" />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}