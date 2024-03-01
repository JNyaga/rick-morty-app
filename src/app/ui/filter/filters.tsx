"use client";

import { AccordionItem } from '@/app/lib/utils/definitions';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import FilterAccordion from './filter-accordian';

type FilterProps = {
    locations: AccordionItem[];
    episodes: AccordionItem[];
    characters: AccordionItem[];
};

export default function Filters({ locations, episodes, characters }: FilterProps) {
    const searchParams = useSearchParams();
    const pathname = usePathname();
    const { replace } = useRouter();

    // Function to clear all filters
    const clearFilters = () => {
        const filterKeys = ["location", "episode", "character"];
        const params = new URLSearchParams(searchParams);

        // Remove each filter from the URL search params
        filterKeys.forEach(key => {
            if (params.get(key)) {
                params.delete(key);
            }
        });

        // Replace the current URL with the updated search params
        replace(`${pathname}?${params.toString()}`);
    };

    return (
        <div className="bg-white text-black p-4 rounded-lg shadow-sm">
            <h3 className="text-2xl font-bold text-center mb-3">Filters</h3>
            <div className="text-blue-500 cursor-pointer hover:underline text-center mb-3" onClick={clearFilters}>
                Clear Filters
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:flex flex-col-reverse gap-4" id="accordionExample">
                <FilterAccordion items={characters} filterItem='character' />
                <FilterAccordion items={locations} filterItem='location' />
                <FilterAccordion items={episodes} filterItem='episode' />
            </div>
        </div>
    );
}