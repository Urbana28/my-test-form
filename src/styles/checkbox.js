import styled from 'styled-components'

export const CheckBoxWrapper = styled.div`
  display: flex;
  align-items: center;
  margin: 5px;
 `;

export const CheckBoxLabel = styled.label`
    position: relative;
    opacity: ${({disabled}) => disabled ? .3 : 1};
    &:hover {
      cursor: pointer;
    }
    
    &:before {
    content: '';
    position: absolute;
    width: 20px;
    height: 20px;
    border: 1px solid #BFBFBF;
    background: #FFFFFF;
    top: 1px;
    left: -30px;
    z-index: 1;
    opacity: ${({disabled}) => disabled ? .3 : 1};
  }

  &:after {
    position: absolute;
    content: '';
    width: 12px;
    height: 4px;
    border-left: 2px solid #36BCF1;
    border-bottom: 2px solid #36BCF1;
    background: #FFFFFF;
    top: 7px;
    left: -25px;
    z-index: 2;
    transform: rotate(-45deg);
  }
`;

export const CheckBox = styled.input`
  opacity: 0;
  width: 22px;
  height: 20px;
  
  &:checked + ${CheckBoxLabel} {
    &:after {
      opacity: 1;
    }
  }
  
  &:not(:checked) + ${CheckBoxLabel} {
    &:after {
      opacity: 0;
    }
  }
`;