import styled from 'styled-components'

export const SelectWrapper = styled.div`
  display: flex;
  position: relative;
  margin: 10px;
`;

export const SelectTitle = styled.div`
  margin-top: 3px;
  margin-right: 15px;
  position: relative;
  opacity: ${({disabled}) => disabled ? .3 : 1};
  &:after {
    content: '*';
    color: red;
    position: absolute;
    top: -6px;
    right: -9px;
  }
`;

export const SelectArrow = styled.div`
      width: 10px;
      height: 10px;
      border-left: 2px solid ${({error}) => error ? 'red' : '#49d3ff'};
      border-bottom: 2px solid ${({error}) => error ? 'red' : '#49d3ff'};
      position: absolute; 
      transform: rotate(-45deg);
      top: 8px;
      left: 410px;
      z-index: 1;
      opacity: ${({disabled}) => disabled ? .3 : 1};
`;

export const Select = styled.select`
    width: 250px;
    height: 35px;
    border: 1px solid ${({error}) => error ? 'red' : '#d1d1d6'};
    opacity: ${({disabled}) => disabled ? .3 : 1};
    background: none;
    z-index: 2;
    -webkit-appearance: none;
    padding-left: 5px;
    
        
    &:hover {
      border: 1px solid ${({disabled, error}) => disabled ? '#d1d1d6' : error ? 'red' : '#49d3ff'};
      cursor: pointer;
    }
    
    &:active, &:focus {
      outline: none;
    }
`;