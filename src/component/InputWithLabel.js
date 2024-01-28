function InputWithLabel({label ,placeholder,form,error}){
 console.log(error)
  return(

<div>
  <div className="px-4 text-black">{label}</div>
<span>{error?.message}</span>
<input
placeholder={placeholder}
{...form} />
</div>

  )
}
export default InputWithLabel