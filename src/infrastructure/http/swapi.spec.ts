import Axios from 'axios';
import {SwapiService} from './swapi';

describe('Swapi', () => {

    let instance : SwapiService;

    beforeEach(() => {
        instance = new SwapiService();
    });

    afterEach(() => {
        jest.restoreAllMocks();
    });

    describe('getPeoples()', () => {
        test('when the external data is received, normalize the keys', async () => {
            jest.spyOn(Axios, 'get').mockResolvedValue({
                data: {
                    count: 1,
                    next: '#next',
                    previous: '#prev',
                    results: [
                        {
                            name: 'name',
                            height: 1,
                            mass: 1,
                            hair_color: 'red',
                            skin_color: 'red',
                            eye_color: 'red',
                            birth_year: '1996',
                            gender: 'M',
                            homeworld: 'homeworld',
                            films: [],
                            species: [],
                            vehicles: [],
                            starships: [],
                            created: "2014-12-09T13:50:51.644000Z", 
                            edited: "2014-12-20T21:17:56.891000Z", 
                            url: "https://swapi.py4e.com/api/people/1/"
                        }
                    ]
                }
            });
            const result = await instance.getPeoples();
            expect(result).toStrictEqual({
                total: 1,
                siguiente: '#next',
                anterior: '#prev',
                resultados: [
                    {
                        nombre: 'name',
                        altura: 1,
                        masa: 1,
                        color_cabello: 'red',
                        color_piel: 'red',
                        color_ojos: 'red',
                        fecha_nacimiento: '1996',
                        genero: 'M',
                        mundo: 'homeworld',
                        peliculas: [],
                        especies: [],
                        vehiculos: [],
                        naves_estelares: [],
                        creacion: "2014-12-09T13:50:51.644000Z", 
                        edicion: "2014-12-20T21:17:56.891000Z", 
                        url: "https://swapi.py4e.com/api/people/1/"
                    }
                ]
            });
        });
    });

    describe('getPeople()', () => {
        test('when the external data is received, normalize the keys', async () => {
            jest.spyOn(Axios, 'get').mockResolvedValue({
                data: {
                            name: 'name',
                            height: 1,
                            mass: 1,
                            hair_color: 'red',
                            skin_color: 'red',
                            eye_color: 'red',
                            birth_year: '1996',
                            gender: 'M',
                            homeworld: 'homeworld',
                            films: [],
                            species: [],
                            vehicles: [],
                            starships: [],
                            created: "2014-12-09T13:50:51.644000Z", 
                            edited: "2014-12-20T21:17:56.891000Z", 
                            url: "https://swapi.py4e.com/api/people/1/"
                }
            });
            const result = await instance.getPeople(1);
            expect(result).toStrictEqual({
                nombre: 'name',
                altura: 1,
                masa: 1,
                color_cabello: 'red',
                color_piel: 'red',
                color_ojos: 'red',
                fecha_nacimiento: '1996',
                genero: 'M',
                mundo: 'homeworld',
                peliculas: [],
                especies: [],
                vehiculos: [],
                naves_estelares: [],
                creacion: "2014-12-09T13:50:51.644000Z", 
                edicion: "2014-12-20T21:17:56.891000Z", 
                url: "https://swapi.py4e.com/api/people/1/"
            });
        });
    });
});