import _ from 'lodash';
import { Resident } from "../utils/definitions";
import { fetchLocations } from './data_fetchers';

/**
 * Search residents by name.
 * @param residents - The array of residents to search.
 * @param query - The name to search for.
 * @returns An array of residents matching the search query.
 */
export function searchResidentsByName(residents: Resident[], query?: string): Resident[] {
    if (!query) return residents;

    const results = residents.filter(resident => {
        return resident.name.toLowerCase().includes(query.toLowerCase());
    });

    const uniqueResults = _.uniqBy(results, 'name');
    return uniqueResults;
}

/**
 * Filter residents by episode.
 * @param residents - The array of residents to filter.
 * @param episodeName - The name of the episode to filter by.
 * @returns An array of residents that appeared in the specified episode.
 */
export function filterResidentsByEpisode(residents: Resident[], episodeName?: string): Resident[] {
    if (!episodeName) return residents;

    const results = residents.filter(resident => {
        return resident.episode.some(episode => episode.name.toLowerCase() === episodeName.toLowerCase());
    });

    const uniqueResults = _.uniqBy(results, 'name');
    return uniqueResults;
}

/**
 * Filter residents by character name.
 * @param residents - The array of residents to filter.
 * @param characterName - The name of the character to filter by.
 * @returns An array of residents with the specified character name.
 */
export function filterResidentsByCharacter(residents: Resident[], characterName?: string): Resident[] {
    if (!characterName) return residents;

    const results = residents.filter(resident => {
        return resident.name.toLowerCase() === characterName.toLowerCase();
    });

    const uniqueResults = _.uniqBy(results, 'name');
    return uniqueResults;
}

/**
 * Fetch residents with filters.
 * @param page - The page number to fetch.
 * @param search - The name to search for.
 * @param location - The location name to filter by.
 * @param episode - The episode name to filter by.
 * @param character - The character name to filter by.
 * @returns An object containing the filtered residents and the total number of pages.
 */
export async function fetchResidentsWithFilters(page?: number, search?: string, location?: string, episode?: string, character?: string) {
    try {
        const filter = { name: location || '' }
        const result = await fetchLocations(page || 1, filter);
        const data = result.data; // Access the 'data' property
        const info = data.locations.info;
        let residents = _.flatMap(data.locations.results, location => location.residents);
        residents = filterResidentsByEpisode(residents, episode);
        residents = filterResidentsByCharacter(residents, character);
        residents = searchResidentsByName(residents, search || undefined);
        return { data: residents, pages: info.pages }; // Add a comma between searchResidents and info.pages
    } catch (error) {
        // Handle error
    }
}
