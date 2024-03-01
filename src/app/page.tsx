import { v4 as uuidv4 } from 'uuid';
import { fetchAllData } from "./lib/data/data_fetchers";
import { GET_ALL_CHARACTERS, GET_ALL_EPISODES, GET_ALL_LOCATIONS } from "./lib/data/graphql_queries";
import { getFilteredResidents } from "./lib/utils/actions";
import Filters from "./ui/filter/filters";
import CharacterCardList from "./ui/residents/character-card-list";
import SearchBar from "./ui/search";

export default async function Home(
  searchParams: {
    query?: string;
    location?: string;
    episode?: string;
    character?: string;
  } = { query: '', location: '', episode: '', character: '' }
) {
  const { query, location, episode, character } = searchParams;
  const residents = await getFilteredResidents({ search: query, location, episode, character });

  const characters = await fetchAllData(GET_ALL_CHARACTERS, 'characters')
  const episodes = await fetchAllData(GET_ALL_EPISODES, 'episodes')
  const locations = await fetchAllData(GET_ALL_LOCATIONS, 'locations')

  return (
    <div className="bg-gray-100 dark:bg-gray-900">
      <h1 className="text-center text-4xl font-bold">Rick and Morty App</h1>
      {episode && <h2 className="text-center text-2xl font-bold mt-4">Episode: {episode}</h2>}
      {location && <h2 className="text-center text-2xl font-bold mt-4">Location: {location}</h2>}
      <div className="mt-5 flex w-full justify-center items-center">
        <SearchBar placeholder="Search characters..." />
      </div>
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4">
          <div className="w-full lg:col-span-3 mb-2 text-center font-bold text-lg">
            <Filters locations={locations} episodes={episodes} characters={characters} />
          </div>

          <div key={uuidv4()} className="w-full lg:col-span-8">
            <CharacterCardList initialResidents={residents?.data || []} character={character} episode={episode} location={location} />
          </div>
        </div>
      </div>
    </div>
  );
}
