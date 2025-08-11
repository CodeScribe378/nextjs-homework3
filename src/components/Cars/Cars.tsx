import {GetCars} from "@/services/api.service";
import Car from "@/components/Car/Car";

const Cars =async()=>{
   const cars = await GetCars()

    return(
        <div>
            {cars.map((car)=><Car key={car.id} car={car}/>)}
        </div>
    )
}
export default Cars
