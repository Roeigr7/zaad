import styled from "styled-components";
/////TextArea HOMEPAGE////////
export const TextArea = styled.textarea`
  width: 100%;
  resize: none;
  border: 1px solid green;
  &:focus {
    box-shadow: 0 8 5px rgba(81, 203, 238, 1);
    border: 1px solid rgba(81, 203, 238, 4);
  }
`;

