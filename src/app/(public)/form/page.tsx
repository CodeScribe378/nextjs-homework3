'use client'
import {useForm} from "react-hook-form";
import {validationCar} from "@/validation/validationCar";
import {joiResolver} from "@hookform/resolvers/joi";
import {CreateCar} from "@/services/api.service";


const FormPage =()=>{

    interface IForm{
        brand: string,
        price: number,
        year: number
    }
    const {handleSubmit, register, reset, formState: {errors, isValid}} = useForm<IForm>({mode: 'all', resolver: joiResolver(validationCar)})

    const customHandler =({brand, price, year}: IForm)=>{
        CreateCar({brand, price, year})
        reset()
    }

    return(
        <div>
            <form onSubmit={handleSubmit(customHandler)}>
                <label>
                <input type='text' {...register('brand')} placeholder={'brand'}/>
                    {errors.brand && <div>{errors.brand.message}</div>}
                </label>

                <label>
                <input type='number' {...register('price')} placeholder={'price'}/>
                    {errors.price && <div>{errors.price.message}</div>}
                </label>

                <label>
                <input type='number' {...register('year')} placeholder={'year'}/>
                    {errors.year && <div>{errors.year.message}</div>}
                </label>

                <button disabled={!isValid}>send</button>
            </form>


        </div>
    )
}
export default FormPage