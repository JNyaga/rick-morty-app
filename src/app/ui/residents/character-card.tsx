"use client"
import Image from "next/image";
import { Suspense } from "react";

import { Resident } from "@/app/lib/utils/definitions";
import { SkeletonCharacterCard } from "../skeletons";

interface CharacterCardProps {
    character: Resident;
}

const CharacterCard: React.FC<CharacterCardProps> = ({ character }) => {
    const badgeRed = "bg-red-100 text-red-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded-full dark:bg-red-900 dark:text-red-300";

    return (
        <Suspense fallback={<SkeletonCharacterCard />}>
            <div className="relative bg-white border rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700 transform transition duration-500 hover:scale-105">
                <div className="flex justify-center items-center">
                    <Image
                        src={character.image}
                        alt={character.name}
                        className="w-full object-cover shadow-md rounded-t-lg"
                        width={300}
                        height={400}
                    />
                </div>

                <div className="px-2.5 text-center">
                    <h5 className="xl font-semibold tracking-tight hover:text-violet-800 dark:hover:text-violet-300 text-gray-900 dark:text-white">
                        {character.name}
                    </h5>
                    <div>
                        <p className="text-sm font-normal text-gray-600 dark:text-gray-400">
                            Last Location:
                        </p>
                        <p className="text-lg text-black dark:text-white">
                            {character.location.name}
                        </p>
                    </div>
                    <div
                        className={`text-xs font-medium me-2 px-4 py-2 mt-3 mr-3 rounded-full ${character.status === "Dead"
                            ? `${badgeRed}`
                            : character.status === "Alive"
                                ? "bg-green-500"
                                : "bg-gray-500"
                            } absolute top-0 right-0`}
                    >
                        {character.status}
                    </div>
                </div>
            </div>
        </Suspense>
    );
};

export default CharacterCard;
