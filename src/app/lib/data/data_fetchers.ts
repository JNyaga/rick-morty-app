
import { DocumentNode } from "graphql";
import { getClient } from "./apollo_client";
import { GET_LOCATIONS } from "./graphql_queries";

const client = getClient();

// Getting all locations
export async function fetchLocations(
    page: number,
    filter: {
        name: string;
    }
) {
    try {
        const result = await client.query({
            query: GET_LOCATIONS,
            variables: { filter, page },
            // fetchPolicy: 'no-cache',
        });

        return result;
    } catch (error) {
        console.error("Error fetching locations:", error);
        throw error;
    }
}



export async function fetchAllData(query: DocumentNode, dataKey: string) {
    try {
        const fetchedData: any[] = [];
        let queryResult;
        let page = 1;

        do {
            queryResult = await client.query({
                query: query,
                // fetchPolicy: 'no-cache',
                variables: { page }
            });

            fetchedData.push(...queryResult.data[dataKey].results);
            page++;
        } while (page <= queryResult.data[dataKey].info.pages);

        return fetchedData;
    } catch (error) {
        console.error('Error fetching data:', error);
        throw error;
    }
}
