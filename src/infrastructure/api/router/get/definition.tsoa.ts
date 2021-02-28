import {
    Body,
    Controller,
    Get,
    Patch,
    Post,
    Put,
    Response,
    Route,
    Security,
    Request,
    Res,
    TsoaResponse,
    SuccessResponse,
    Head,
    Query,
    Tags,
    Path
  } from 'tsoa';

  import {SwapiPeople, SwapiPeoples} from '../../../../application/contracts/http/swapi'
  import {Animal} from '../../../../domain/animal'

  @Tags('Lambda GET')
  @Route()
  @Response<{message: string}>(500, 'Error Interno', {message: 'Internal Server Error'})
  export abstract class DefinitionLambdaGetController extends Controller {
    /**
     * Obtener datos del API de personas de SWAPI
     * @param page Numero de pagina
     */
    @SuccessResponse(200, 'Datos de todas las personas')
    @Get('/people')
    async getPeoples(
        @Query('page') page? : number
    ) : Promise<SwapiPeoples> {
      return;
    }

    /**
     * Obtener datos del API de una persona de SWAPI
     * @param id Id de la persona
     */
    @SuccessResponse(200, 'Datos de una persona')
    @Get('/people/:id')
    async getPeople(
        @Path('id') id : number
    ) : Promise<SwapiPeople> {
      return;
    }

    /**
     * Obtener datos de la base de datos animales (DynamoDB)
     */
    @SuccessResponse(200, 'Dato de animales')
    @Get('/animals')
    async getAnimals() : Promise<Animal[]> {
      return;
    }
  
  }
  