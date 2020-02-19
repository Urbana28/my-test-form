import styled from 'styled-components'


export const InputItem = styled.div`
  display: flex;
  flex-direction: row-reverse;
  justify-content: flex-end;
  margin: 3px;
  align-items: center;
`;

export const InputLabel = styled.label`
  position: relative;
  margin-right: 15px;
  
  ${({required}) => (
    required ?
        `
    &:after {
    content: '*';
    color: red;
    position: absolute;
    top: -6px;
    right: -9px;
  }` : null
)}
 `;

export const Input = styled.input`
  width: 350px;
  height: 30px;
  border: 1px solid ${({error}) => error ? 'red' : '#d1d1d6'};
  padding-left: 5px;
  
  &:hover {
    border: 1px solid ${({error}) => error ? 'red' : '#49d3ff'};
    transition: .3s;
  }
  
  &:focus {
    outline: none;
    border: 1px solid ${({error}) => error ? 'red' : '#39b9e2'};
    box-shadow: 0 0 2px rgba(0, 0, 0, .3);
  }
  
  &:disabled {
    background: none;
    opacity: .3;
  }
  
  &:disabled + ${InputLabel} {
    opacity: .3;
  }
`;


export const Error = styled.div`
  color: red;
  font-size: 14px;
`

