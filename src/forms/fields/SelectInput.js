import React from "react";
import { Option,Select, ErrorLabel, InputContainer } from "../../style/Form";


const SelectInput = ({
  input,
  placeholder,
  options,
  meta: { touched, error },

}) => {


  return(


<InputContainer error={touched && !!error}>

<Select dir="rtl"
  value={input.value}
  onChange={(value)=>input.onChange(value)}
  placeholder={placeholder}
options={options}

>

      <Option disabled key='' value=''>{placeholder}</Option>;

{options&&options.map((opt, key) => {
        return <Option key={key} value={opt.id}>{opt.fullName}</Option>;
        
   })}

</Select>

{touched&&error&&<ErrorLabel tiny>{error}</ErrorLabel>}
</InputContainer>
  )
};
export default SelectInput;
