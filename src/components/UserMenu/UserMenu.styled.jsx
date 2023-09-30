import styled from "@emotion/styled";

export const Ul = styled.ul`
  display: flex;
  align-items: center;
  gap: 15px;
`

export const B = styled.b`
  color: #585252;
`

export const Button = styled.button`
  padding: 2px 5px;

  color: white;

  background-color: #22415a;
  border: 1px solid transparent;
  border-radius: 4px;
  
  cursor: pointer;

  transition: 250ms;

  &:hover,
  &:focus {
    transform: scale(1.05);
  }
`