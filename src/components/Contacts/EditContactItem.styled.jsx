import styled from "@emotion/styled";

export const EditForm = styled.form`
  display: flex;
  align-items: center;
  gap: 15px;
`

export const InputText = styled.input`
  width: 150px;
  padding: 3px 6px;

  font-size: 18px;
  font-weight: 600;

  background-color: #5a99ec;
  border-radius: 4px;
  border: 0px solid transparent;

  outline: black;
  color: white;
`

export const InputNumber = styled.input`
  
  width: 105px;
  padding: 3px 6px;

  font-size: 18px;
  font-weight: 600;

  background-color: #5a99ec;
  border-radius: 4px;
  border: 1px solid transparent;

  outline: none;
  color: white;

  &::-webkit-inner-spin-button {
    -webkit-appearance: none;
    appearance: none;
    margin: 0;
  }
`

export const ButtonSave = styled.input`
  padding: 4px 8px;
  
  color: white;

  background-color: #5782f6;
  border: 1px solid #4b4848;
  border-radius: 4px;

  transition: 150ms;

  cursor: pointer;

  &:hover,
  &:focus {

    transform: scale(1.02);
  }
`