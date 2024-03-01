interface Episode {
    id: string;
    name: string;
}

export interface Resident {
    id: string;
    name: string;
    image: string; // URL
    status: "Alive" | "Dead" | "unknown";
    episode: Episode[];
    location: {
        name: string;
    };
}


export interface Location {
    name: string;
    type: string;
    residents: Resident[];
}

export interface Data {
    locations: {
        results: Location[];
    };
}

export interface Response {
    data: Data;
}


export interface AccordionItem {
    id: number;
    name: string;
}