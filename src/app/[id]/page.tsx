import Image from 'next/image';
import Link from 'next/link';
import prisma from '../../../prisma/client';
import { fetchCharacterById } from '../lib/data/data_fetchers';
import getStatusColor from '../lib/utils/utils';
import Title from '../ui/character-detail/title';

// Define the CharacterDetail component
const CharacterDetail = async ({ params }: { params: { id: string } }) => {

    // Fetch character data
    const character = await fetchCharacterById(params.id);
    const databaseCharacter = await prisma.character.findUnique({
        where: { id: Number(params.id) }
    });

    // Set the description
    const description = databaseCharacter?.description ? databaseCharacter.description : "Add Description";

    // Format date
    const formatDate = (dateString: string) => {
        const options: Intl.DateTimeFormatOptions = { year: 'numeric', month: 'long', day: 'numeric' };
        return new Date(dateString).toLocaleDateString(undefined, options);
    };

    return (
        <div className='flex flex-col items-center justify-center bg-gray-100 dark:bg-gray-900 py-10 min-h-screen'>
            <div className='max-w-md bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden md:max-w-2xl'>
                <div className='md:flex'>
                    <div className='md:flex-shrink-0'>
                        {character.image && (
                            <Image className="h-48 w-full object-cover md:w-48" src={character.image} alt={character.name} width={500} height={500} />
                        )}
                    </div>
                    <div className='p-8'>
                        {character.species && (
                            <div className='uppercase tracking-wide text-sm text-indigo-500 font-semibold'>{character.species}</div>
                        )}
                        <Link href={`${params.id}/edit`}>
                            <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded float-right'>
                                Edit Description
                            </button>
                        </Link>
                        <Link href="#">
                            {character.name && (
                                <span className='block mt-1 text-lg leading-tight font-medium text-black dark:text-white hover:underline'>{character.name}</span>
                            )}
                        </Link>
                        {character.status && (
                            <p className={`mt-2 ${getStatusColor(character.status)}`}>
                                <Title>Status</Title>: {character.status}
                            </p>
                        )}
                        {character.gender && (
                            <p className='mt-2'>
                                <Title>Gender</Title>: {character.gender}
                            </p>
                        )}
                        {character.type && (
                            <p className='mt-2'>
                                <Title>Type</Title>: {character.type}
                            </p>
                        )}
                        {character.created && (
                            <p className='mt-2'>
                                <Title>Created</Title>: {formatDate(character.created)}
                            </p>
                        )}
                        {character.location && character.location.name && (
                            <p className='mt-2'>
                                <Title>Location</Title>: {character.location.name}
                            </p>
                        )}
                        <div className='mt-2'>
                            <Title>Description</Title>:
                            <p className='text-gray-500 dark:text-gray-400 bg-yellow-200 p-2 rounded'>{description}</p>
                        </div>
                        {character.episode && character.episode.length > 0 && (
                            <>
                                <p className='mt-2'>
                                    <Title>Episodes</Title>: {character.episode.length}
                                </p>
                                <div className='mt-2'>
                                    <Title>Episode List</Title>:
                                </div>
                                <ul className='list-disc list-inside'>
                                    {character.episode.map((episode: { name: string }) => (
                                        <li key={episode.name} className='mt-2'>
                                            <Title>{episode.name}</Title>
                                        </li>
                                    ))}
                                </ul>
                            </>
                        )}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CharacterDetail