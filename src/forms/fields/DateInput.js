import React from "react";
import "react-datepicker/dist/react-datepicker.css";
import { InputContainer, StyledDatePicker, ErrorLabel } from "../../style/Form";


const DateInput = ({
  input: { value, onChange, onBlur },
  width,
  placeholder,
  ph,
  selected,
  meta: { touched, error },
  ...rest
}) => {
  return (
< InputContainer>
    <StyledDatePicker
        {...rest}
        ph={ph}
        placeholder={placeholder}

        selected={
          value
            ? Object.prototype.toString.call(value) !== '[object Date]'
              ? value.toDate()
              : value
            : new Date()
        }
        onChange={onChange}
        onBlur={(e, val) => onBlur(val)}
        onChangeRaw={e => e.preventDefault()}
      />
{touched&&error&&<ErrorLabel tiny>{error}</ErrorLabel>}
</InputContainer>
  );
};
export default DateInput;
