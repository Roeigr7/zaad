import React from "react";
import { Input, InputContainer, Label, ErrorLabel } from "../style/Form";

const TextInput = ({
  input,
  type,
  ph,
  meta: { touched, error },
  props

}) => {
  return(
<InputContainer> 

<Input

{...input}  type={type}  
error={touched && !!error}
ph={ph}
required/>

<Label>{ph}</Label>
{touched&&error&&<ErrorLabel>{error}</ErrorLabel>}

</InputContainer>
  )
};
export default TextInput;
