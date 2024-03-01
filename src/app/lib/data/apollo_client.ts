import { ApolloClient, HttpLink, InMemoryCache } from "@apollo/client";


const GRAPHQL_ENDPOINT =
    process.env.GRAPHQL_ENDPOINT || 'https://rickandmortyapi.com/graphql';

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
