import { getMockRes, getMockReq} from '@jest-mock/express';
import {object, string} from 'joi';
import JoiValidator from './validator';

describe('Validator', () => {

    describe('Joi', () => {

        let request : ReturnType<typeof getMockReq>;
        let response : ReturnType<typeof getMockRes>;
        beforeEach(() => {
            response = getMockRes();
            request = getMockReq();
        });

        test('When the input is not valid, response with 422', async () => {
            const middleware = JoiValidator(
                object({
                    name: string()
                })
            );
            request.body = {
                name: 123
            }
            await middleware(
                request,
                response.res,
                response.next
            );
            expect(response.res.status).toHaveBeenCalledWith(422);
            expect(response.res.json).toHaveBeenCalledWith(
                expect.objectContaining({
                    message: 'Unprocessable Entity'
                })
            );
        });

        test('When the input is valid, call next', async () => {
            const middleware = JoiValidator(
                object({
                    name: string()
                })
            );
            request.body = {
                name: 'value'
            }
            await middleware(
                request,
                response.res,
                response.next
            );
            expect(response.next).toBeCalled();
        });

    });

});