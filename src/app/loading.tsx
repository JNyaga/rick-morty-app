import React from 'react';
import { FiltersSkeleton, SkeletonCardList } from './ui/skeletons';

function loading() {
    return (
        <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-4">
                <div className="w-full lg:col-span-3 mb-5">
                    <div className="text-center font-bold text-lg mb-2">
                        <FiltersSkeleton />
                    </div>
                </div>
                <div className="w-full lg:col-span-8">
                    <SkeletonCardList />
                </div>
            </div>
        </div>
    );
}

export default loading