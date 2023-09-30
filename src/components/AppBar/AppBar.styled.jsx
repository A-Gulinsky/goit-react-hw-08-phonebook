import styled from "@emotion/styled";

export const AppBarContainer = styled.div`
  display: flex;
  justify-content: space-between;

  margin-bottom: 40px;
  padding: 15px 10px;

  background-color: #d1c8c8;
  border-radius: 4px;
  box-shadow: 2px 4px 5px 0px rgba(0,0,0,0.75);

  transition: 250ms;

  &:hover {
    box-shadow: 2px 7px 5px 0px rgba(24, 24, 24, 0.75);
    transform: scale(1.001);
  }
`