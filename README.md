# Rick And Morty App

## Getting Started

The project was first initialized with `npx create-next-app `



## Fetching Location Data

- Location data was retrieved from the `graphql` API at `https://rickandmortyapi.com/graphql`.
- Utilizing the `Graphql` endpoint streamlined the process by allowing comprehensive data retrieval in a single request, encompassing:
  - Locations
    - Residents' details including status, name, image, and episodes they appear in.

### Implementation Details:

- Established a dedicated `src/app/lib/data` folder to centralize all data-related operations.

![image-20240301164442287](./assets/README/image-20240301164442287.png)

- Key files within the folder include:

  - `data_fetchers.ts`: Functions designed for data retrieval.
  - `data_utils.ts`: Utilities facilitating data manipulation.
  - `apollo_client.ts`: Client setup to facilitate communication with the `graphql` API.
  - `graphql_queries.ts`: Defined queries tailored for fetching required data efficiently.

  

#### **changes**

> install apollo client:

```bash
npm install @apollo/client graphql @types/graphql
```

> `src\app\lib\data\data_fetchers.ts`

```typescript
import { getClient } from "./apollo_client";
import { GET_LOCATIONS } from "./graphql_queries";

const client = getClient();

//getting all locations
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

```



> `src\app\lib\data\apollo_client.ts`

```typescript
import { ApolloClient, HttpLink, InMemoryCache } from "@apollo/client";


const GRAPHQL_ENDPOINT =
    process.env.GRAPHQL_ENDPOINT ||  'https://rickandmortyapi.com/graphql';

let client: ApolloClient<any> | null = null;
export const getClient = () => {
    //create a new client if there is none
    // or if we are on the server
    if (!client || typeof window === "undefined") {
        client = new ApolloClient({
            cache: new InMemoryCache(),
            link: new HttpLink({
                uri: GRAPHQL_ENDPOINT,
            }),
        });
    }
    return client;
}

```



> `src\app\lib\data\graphql_queries.ts`

```typescript
import { gql } from "@apollo/client";

export const GET_LOCATIONS = gql`
query Locations($filter: FilterLocation, $page: Int) {
    locations(filter: $filter, page: $page) {
      results {
        residents {
          id
          image
          name
          status
          episode {
            name
            episode
            id
          }
          location {
            name
          }
        }
      }
      info {
        count
        pages
      }
    }
  }
`
```





