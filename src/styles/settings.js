import styled from 'styled-components'

export const SettingsWrapper = styled.div`
  display: flex;
  width: 100%px;
  height: 100%;
  
`

export const SettingsItem = styled.div`
  display: flex;
  padding: 15px;
  flex-direction: column;
  width: 50%;
  
  
  ${({withBorder}) => (
    withBorder && `border-right: 1px solid darkgray;`
)}
  
`;

export const SettingsTitle = styled.div`
  font-size: 16px;
  font-weight: bold;
  display: flex;
`;