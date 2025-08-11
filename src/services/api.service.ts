import axios from "axios";
import {ICars} from "@/Models/ICars/ICars";

const AxiosInstant = axios.create({
    baseURL: 'http://185.69.152.209/carsAPI/v1',
   headers: {'Content-type': 'application/json'}
})

export const GetCars = async(): Promise <ICars[]>=>{
 const {data} = await AxiosInstant.get('/cars')
    return data
}

type CarProps ={
    brand: string,
    price: number,
    year: number
}
export const CreateCar =async ({brand, price, year}: CarProps)=>{
    await AxiosInstant.post('/cars', {brand, price, year})
}

