function InputWithLabel({label ,placeholder,form,error}){
 console.log(error)
  return(

<div>
  <div className="text-black max-w-12 grid-cols-2 ">{label}</div>
<span>{error?.message}</span>
<input  className="text-black max-w-12 "
placeholder={placeholder}
{...form} />
</div>

  )
}
export default InputWithLabel