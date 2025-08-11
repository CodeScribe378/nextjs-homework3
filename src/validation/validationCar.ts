import Joi from "joi";


export const validationCar = Joi.object({
    brand: Joi.string().pattern(/^[a-zA-Zа-яА-яёЁіІїЇєЄҐґ]{1,20}$/).messages({
        'string.pattern.base': 'it is not suitable to pattern'
    }),
    price: Joi.number().min(0).max(1000000).messages({
        'number.min': 'it is required 0 min number',
        'number.max': 'it is required 1000000 max number'
    }),
    year: Joi.number().min(1990).max(2024).messages({
        'number.min': 'min year should be 1990',
        'number.max': 'max year should be 2024'
    })
})