import {FC} from "react";
import {ICars} from "@/Models/ICars/ICars";

type Props ={
    car: ICars
}
 const Car: FC<Props> =({car})=>{
    return(
        <div>
            <p>brand: {car.brand}, price: {car.price}, year: {car.year}</p>
        </div>
    )
}
export default Car