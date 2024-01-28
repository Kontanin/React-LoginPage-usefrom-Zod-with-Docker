function InputWithLabel({label ,placeholder,form,error}){
 console.log(error)
  return(

<div className="text-black max-w-12 grid-cols-3" >
  <div className="text-black max-w-12">{label}</div>
  <span>{error?.message}</span>
    <input  className="text-black max-w-12 "
    placeholder={placeholder}
    {...form} />
</div>

  )
}
export default InputWithLabel