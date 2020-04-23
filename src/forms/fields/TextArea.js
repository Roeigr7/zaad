import React from "react";
import { TextArea, InputContainer, Label, ErrorLabel } from "../../style/Form";

const TextAreaInput = ({
  input,
  type,
  ph,
rows,
meta: { touched, error }
}) => {

  return(
  <InputContainer>
<TextArea
error={touched && !!error}
{...input}  type={type} ph={ph} rows={rows} required
/>
<Label>{ph}</Label>
{touched&&error&&<ErrorLabel>{error}</ErrorLabel>}

</InputContainer>

  )
};
export default TextAreaInput;
