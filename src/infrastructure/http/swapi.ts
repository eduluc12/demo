import {Singleton} from "typescript-ioc";
import Axios from 'axios';
import { Swapi, SwapiPeople, SwapiPeopleDTO, SwapiPeoples, SwapiPeoplesDTO } from "../../application/contracts/http/swapi";

@Singleton
export class SwapiService implements Swapi{

    async getPeoples(page: number = 1): Promise<SwapiPeoples> {
        const data = await Axios.get<SwapiPeoplesDTO>(
            'https://swapi.py4e.com/api/people/?page=' + page
        );
        return {
            total: data.data.count,
            siguiente: data.data.next,
            anterior: data.data.previous,
            resultados: data.data.results.map((value) => {
                return {
                    nombre: value.name,
                    altura: value.height,
                    masa: value.mass,
                    color_cabello: value.hair_color,
                    color_piel: value.skin_color,
                    color_ojos: value.eye_color,
                    fecha_nacimiento: value.birth_year,
                    genero: value.gender,
                    mundo: value.homeworld,
                    peliculas: value.films,
                    especies: value.species,
                    vehiculos: value.vehicles,
                    naves_estelares: value.starships,
                    creacion: value.created,
                    edicion: value.edited,
                    url: value.url
                }
            })
        };
    }

    async getPeople(id: number): Promise<SwapiPeople> {
        const data = await Axios.get<SwapiPeopleDTO>(
            `https://swapi.py4e.com/api/people/${id}`
        );
        const value = data.data;
        return {
            nombre: value.name,
            altura: value.height,
            masa: value.mass,
            color_cabello: value.hair_color,
            color_piel: value.skin_color,
            color_ojos: value.eye_color,
            fecha_nacimiento: value.birth_year,
            genero: value.gender,
            mundo: value.homeworld,
            peliculas: value.films,
            especies: value.species,
            vehiculos: value.vehicles,
            naves_estelares: value.starships,
            creacion: value.created,
            edicion: value.edited,
            url: value.url
        }; 
    }

}