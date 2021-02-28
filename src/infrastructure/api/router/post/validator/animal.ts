import {object, string} from 'joi'

export default object({
    nombre: string()
        .required(),

    color: string()
        .required(),
})