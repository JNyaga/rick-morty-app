"use server"
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';
import { z } from 'zod';
import prisma from '../../../../prisma/client';
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



const FormSchema = z.object({
    id: z.coerce.number(),
    name: z.string(),
    description: z.string().optional(),
});

export async function updateCharacterDescription(formData: FormData) {
    const { id, name, description } = FormSchema.parse({
        id: formData.get('id'),
        name: formData.get('name'),
        description: formData.get('description')
    });

    const data = {
        id: Number(id),
        name,
        description: description || ''
    };

    const databaseCharacter = await prisma.character.upsert({
        where: { id: data.id },
        create: data,
        update: data
    });

    revalidatePath(`/rick/${databaseCharacter.id}/`);
    redirect(`/rick/${databaseCharacter.id}/`);
}