import { Link,useNavigate } from "react-router-dom";

import {useForm} from "react-hook-form"
import doPostRequest from "../req/req";
import { zodResolver } from "@hookform/resolvers/zod";
import {z } from "zod"
import InputWithLabel from "../component/InputWithLabel";
function Register(){
  const navigate = useNavigate();

const registerSchema=z.object({

  ftname:z.string()

})
const {
  register,
  formState: { errors },
  handleSubmit,
} = useForm({ resolver: zodResolver(registerSchema) });
  const onhandle = (e) => {
    let payload=e
      console.log(payload)

  };
  return( 
        <form onSubmit={handleSubmit(onhandle)}>  
<InputWithLabel 
label={"frname"}
placeholder={"ftname"}
error={errors?.ftname}
from={register("ftname")}
/>

            <button className="content-center w-32 bg-purple-500 rounded-lg">Submit</button>

        </form>
        {/* <div className="flex content-center  justify-center  text-zinc-50">
          <h6 className="mr-1 ">if you already have account please </h6>
          <Link to="/" className="underline">Login</Link>
        </div> */}

  )

}


export default Register;