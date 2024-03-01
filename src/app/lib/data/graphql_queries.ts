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


export const GET_ALL_EPISODES = gql`
query Episodes ($page: Int) {
        episodes(page: $page) {
            info {
                count
                pages
            }
            results {
                id
                name
            }
        }
    }
`

export const GET_ALL_CHARACTERS = gql`
query Characters($page: Int) {
        characters(page: $page) {
            info {
                count
                pages
            }
            results {
                name
                id
            }
        }
    }
`

export const GET_ALL_LOCATIONS = gql`
query Locations($page: Int) {
        locations(page: $page) {
            info {
                count
                pages
            }
            results {
                name
                id
            }
        }
    }
`


export const GET_CHARACTER = gql`
query Character($characterId: ID!) {
        character(id: $characterId) {
            name
            created
            gender
            id
            image
            species
            status
            type
            episode {
                name
            }
            location {
                name
            }
        }
    }
`