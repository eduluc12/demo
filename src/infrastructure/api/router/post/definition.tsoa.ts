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

  import {AnimalDTO} from './dto/animal'

  @Tags('Lambda POST')
  @Route()
  @Response<{message: string}>(500, 'Error Interno', {message: 'Internal Server Error'})
  export abstract class DefinitionLambdaPostController extends Controller {
    /**
     * Creacion de un animal
     * @param body Datos del animal
     */
    @SuccessResponse(201, 'Creado Correctamente')
    @Post('/animals')
    async createAnimal(
        @Body() body : AnimalDTO
    ) : Promise<void> {
      return;
    }
  
  }
  