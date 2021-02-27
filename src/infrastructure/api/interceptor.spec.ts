import { getMockRes } from '@jest-mock/express';
import Interceptor from './interceptor';
describe('Interceptor', () => {

    let response : ReturnType<typeof getMockRes>;
    beforeEach(() => {
        response = getMockRes();
    });

    test('When dont exists exception, call next function', () => {
        Interceptor()(
            undefined,
            null,
            null,
            response.next
        )
        expect(response.next).toBeCalled();
    });

    test('When exists exception, send json with internal error', () => {
        Interceptor()(
            new Error('message'),
            null,
            response.res,
            response.next
        )
        expect(response.res.status).toHaveBeenCalledWith(500);
        expect(response.res.json).toHaveBeenCalledWith(
            expect.objectContaining({
                message: 'Internal Server Error'
            })
        );
    });

});