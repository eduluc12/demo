export abstract class Swapi {
    abstract getPeoples(page: number) : Promise<SwapiPeoples>;
    abstract getPeople(id: number) : Promise<any>;
}

export type SwapiPeoples = {
    total: number,
    siguiente: string,
    anterior: string | null,
    resultados: SwapiPeople[]
}

export type SwapiPeople = {
    nombre: string,
    altura: number,
    masa: number,
    color_cabello: string,
    color_piel: string,
    color_ojos: string,
    fecha_nacimiento: string,
    genero: string,
    mundo: string,
    peliculas: string[],
    especies: string[],
    vehiculos: string[],
    naves_estelares: string[],
    creacion: string,
    edicion: string,
    url: string
}

export type SwapiPeoplesDTO = {
    count: number, 
    next: string,
    previous: string | null,
    results: SwapiPeopleDTO[]
}

export type SwapiPeopleDTO = {
    name: string, 
    height: number, 
    mass: number, 
    hair_color: string, 
    skin_color: string, 
    eye_color: string, 
    birth_year: string, 
    gender: string, 
    homeworld: string 
    films: string[], 
    species: string[], 
    vehicles: string[], 
    starships: string[], 
    created: string, 
    edited: string, 
    url: string
}