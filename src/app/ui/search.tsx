"use client";

import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import React, { useCallback } from 'react';
import { useDebouncedCallback } from 'use-debounce';


const SearchBar = ({ placeholder }: {
    placeholder: string;
}) => {
    const searchParams = useSearchParams();
    const currentPathname = usePathname();
    const { replace, refresh } = useRouter();

    const handleSearch = useDebouncedCallback(
        useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
            const searchTerm = event.target.value || null;
            const params = new URLSearchParams(window.location.search);
            if (searchTerm) {
                params.set('query', searchTerm);
            } else {
                params.delete('query');
            }
            replace(`${currentPathname}?${params.toString()}`);
        }, [currentPathname, replace]),
        400
    );

    return (
        <div className="flex flex-1 items-center justify-center p-6">
            <div className="w-full max-w-lg">
                <form className="mt-auto sm:flex sm:items-center">
                    <input
                        id="query"
                        name="query"
                        placeholder={placeholder}
                        type="search"
                        autoFocus
                        defaultValue={searchParams.get('query')?.toString()}
                        onChange={handleSearch}
                    />
                </form>
            </div>
        </div>
    );
};

export default SearchBar;
