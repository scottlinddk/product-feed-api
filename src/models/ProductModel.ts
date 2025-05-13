export interface Product {
    forhandler?: string | undefined;
    kategorinavn?: string | undefined;
    brand?: string | undefined;
    produktnavn?: string | undefined;
    produktid?: string | undefined;
    ean?: string | undefined;
    beskrivelse?: string | undefined;
    nypris?: string | undefined;
    glpris?: string | undefined;
    fragtomk?: string | undefined;
    lagerantal?: string | undefined;
    size?: string | undefined;
    color?: string | undefined;
    billedurl?: string | undefined;
    vareurl?: string | undefined;
    tilbud?: {
        aktiv: boolean;
    };
}

export let Products: Product[] = [];

export interface PagedProducts {
    page: number;
    totalPages: number;
    totalItems: number;
    limit: number;
    items: Product[];
}

