"use client";

import { AccordionItem } from '@/app/lib/utils/definitions';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import React, { useCallback } from 'react';

interface FilterAccordionProps {
    items: AccordionItem[];
    filterItem: string;
}

function FilterAccordion({ items, filterItem }: FilterAccordionProps) {
    const searchParams = useSearchParams();
    const pathname = usePathname();
    const { replace, refresh } = useRouter();

    const handleSelect = useCallback(
        (event: React.ChangeEvent<HTMLSelectElement>) => {
            const selectedValue = event.target.value || null;
            const params = new URLSearchParams(window.location.search);
            if (selectedValue) {
                params.set(filterItem, selectedValue);
            } else {
                params.delete(filterItem);
            }
            replace(`${pathname}?${params.toString()}`);
        },
        [filterItem, pathname, replace]
    );

    return (
        <div className="bg-white p-4 rounded-lg shadow-sm">
            <div className="mb-3">
                <label htmlFor="filterSelect" className="block text-sm font-medium text-gray-700">
                    FILTER BY: <b>{filterItem.toUpperCase()}</b>
                </label>
                <select
                    id="filterSelect"
                    className="block w-full px-3 py-2 text-base font-medium text-gray-700 bg-white border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:ring-1 sm:text-sm"
                    value={searchParams.get(filterItem) || ''}
                    onChange={handleSelect}
                >
                    <option value="">Select {filterItem}</option>
                    {items.map((item, index) => (
                        <option key={index} value={item.name}>
                            {item.name}
                        </option>
                    ))}
                </select>
            </div>
        </div>
    );
}

export default FilterAccordion;