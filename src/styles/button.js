import styled from 'styled-components'

export const ButtonsContainer = styled.div`
  display: flex;
  border-top: 1px solid darkgray;
`;

export const SaveButton = styled.button`
  width: 100px;
  height: 30px;
  border-radius: 50px;
  border: none;
  background: #36BCF1;
  color: #ffffff;
  transition: .3s;
  margin: 10px;
  
  &:hover {
    cursor: pointer;
    box-shadow: 0 0 5px rgba(0, 0, 0, .3);
    transition: .3s;
  }
  
  &:focus, &:active {
    outline: none;
  }
`;

export const CancelButton = styled(SaveButton)`
  background: #ffffff;
  border: 1px solid #36BCF1;
  color: #36BCF1;
`