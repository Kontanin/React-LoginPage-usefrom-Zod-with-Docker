import {useForm} from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod";
import {z } from "zod"
import InputWithLabel from "../component/InputWithLabel";
function Register(){

const registerSchema=z.object({
  ftname:z.string().min(1)

})

const {
  register,
  formState: { errors },
  handleSubmit,
  getValues
} = useForm({ resolver: zodResolver(registerSchema) });

  const onhandle = (e) => {
    let payload=e
      console.log(payload)
      console.log(getValues('ftname'),"getValues")
  };

  const onhandle1 = (e) => {
    let payload=e
      console.log(payload)
      console.log(getValues('ftname'),"getValues11111")
  };

  console.log(getValues('ftname'),"getValues")


  return( 
        <form onSubmit={handleSubmit(onhandle)}>  
<InputWithLabel 
label={"ftname"}
placeholder={"ftname"}
error={errors?.ftname}
from={register("ftname")}
/>
<input type="button" />
<button  type="button" className="content-center w-32 bg-purple-500 rounded-lg" onClick={onhandle1} >show</button>
            <button className="content-center w-32 bg-purple-500 rounded-lg">Submit</button>
        </form>
  )
}
export default Register;