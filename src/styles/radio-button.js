import styled from 'styled-components'


export const RadioItem = styled.div`
    display: flex;
    align-items: center;
    position: relative;
    margin: 5px;
    `;

export const RadioLabel = styled.label`
  z-index: 2;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  margin-top: 1px;
  border: 1px solid darkgray;
  
  &:before {
    content: '${({text}) => text}';
    position: absolute;
    display: block;
    left: 30px;
    top: 0;
     }
  
  &:hover {
    cursor: pointer;
    transition: .3s;
    background: darkgray;
    
      &:after {
        transition: .3s;
        position: absolute;
        content: '';
        width: 10px;
        height: 10px;
        border-radius: 50%;
        top: 7px;
        left: 6px;
        display: block;
        background: white;
      }
    }
       
 `;

export const Radio = styled.input`
    display: none;
    width: 20px;
    height: 20px;
    position: absolute;
    z-index: 1;
    margin: 0;
               
    &:checked + ${RadioLabel} {
      background: #36BCF1;
      border: 1px solid #36BCF1;
        
       &:after {
        transition: .3s;
        position: absolute;
        content: '';
        width: 10px;
        height: 10px;
        border-radius: 50%;
        top: 7px;
        left: 6px;
        display: block;
        background: white;
      }
    }
      
    &:disabled:checked + ${RadioLabel} {
       opacity: .3;
       background: #36BCF1;
       border: 1px solid #36BCF1;
       cursor:auto;
       
       &:hover {
          &:after {
          background: white;
        }
      }
    }
    
    &:disabled + ${RadioLabel} {
        opacity: .3;
        background: none;
        cursor:auto;
        
        &:hover {
          &:after {
          background: none
        }
      }
    }
`;



