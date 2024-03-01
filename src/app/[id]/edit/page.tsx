import { fetchCharacterById } from "@/app/lib/data/data_fetchers";
import { updateCharacterDescription } from "@/app/lib/utils/actions";
import prisma from "../../../../prisma/client";

const DescriptionForm = async ({ params }: { params: { id: string } }) => {
    const character = await fetchCharacterById(params.id);
    const databaseCharacter = await prisma.character.findUnique({
        where: { id: Number(params.id) }
    })

    return (
        <form action={updateCharacterDescription} className="w-full max-w-sm mx-auto mt-8">
            <input type="hidden" name="id" value={character.id} />
            <input type="hidden" name="name" value={character.name} />
            <div className="mb-6">
                <label
                    htmlFor="description"
                    className="block text-sm text-gray-700 dark:text-gray-300 capitalize font-bold"
                >
                    Description of {character.name}
                </label>
                <textarea
                    id="description"
                    name="description"
                    rows={6}
                    className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 rounded-md w-full sm:text-sm border border-gray-300 dark:border-gray-700 dark:bg-gray-800 p-2.5 text-gray-900 dark:text-gray-100"
                    defaultValue={databaseCharacter?.description || ""}
                    placeholder="Enter your description here..."
                ></textarea>
            </div>
            <button
                type="submit"
                className="inline-flex items-center px-4 py-2 bg-indigo-500 text-white font-bold rounded-md hover:bg-indigo-700 focus:ring-4 focus:outline-none focus:ring-indigo-300 disabled:opacity-50"
            >
                Submit
            </button>
        </form>
    );
};

export default DescriptionForm;