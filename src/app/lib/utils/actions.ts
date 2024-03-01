"use server";

import { fetchResidentsWithFilters } from "../data/data_utils";

export async function getFilteredResidents({
    page = 1,
    search,
    location,
    episode,
    character
}: {
    page?: number
    search?: string | undefined
    location?: string | undefined
    episode?: string | undefined
    character?: string | undefined
}) {
    const residents = await fetchResidentsWithFilters(page, search, location, episode, character);
    return residents;
}