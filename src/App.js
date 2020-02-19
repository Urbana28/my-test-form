import React, {useState} from 'react';
import './App.css';
import Settings from "./components/Settings";
import {FormWrapper} from "./styles/form";
import {SettingsWrapper} from "./styles/settings";
import SettingsIP from "./components/SettingsIP";
import SettingsDNS from "./components/SettingsDNS";
import EnableWifi from "./components/EnableWifi";
import EnableSecurity from "./components/EnableSecurity";
import WirelessSettingIP from "./components/WirelessSettingsIP";
import WirelessSettingsDS from "./components/WirelessSettingsDS";

import {useForm} from 'react-hook-form'
import {ButtonsContainer, CancelButton, SaveButton} from "./styles/button";


function App() {


  const {register, handleSubmit, errors, setValue, clearError} = useForm({mode: 'onSubmit', reValidateMode: 'onBlur'});
  const onSubmit = (data) => console.log(data);

  const [isEnableWifi, setIsEnableWifi] = useState(false);
  const [isEnableSecurity, setIsEnableSecurity] = useState(false);

  const setIsEnableWifiHandler = () => {
    if (isEnableWifi) setIsEnableWifi(false);
    else {
      setIsEnableWifi(true);
    }
  };

  const setIsEnableSecurityHandler = () => {
    isEnableSecurity ? setIsEnableSecurity(false) : setIsEnableSecurity(true)
  };


  return (
      <div className="App">
        <FormWrapper id='form' onSubmit={handleSubmit(onSubmit)}>
          <SettingsWrapper>
            <Settings withBorder={true} title='Ethernet Settings'>
              <SettingsIP clearError={clearError} setValue={setValue} errors={errors} reg={register}/>
              <SettingsDNS clearError={clearError} setValue={setValue} errors={errors} reg={register}/>
            </Settings>
            <Settings title='Wireless Settings'>
              <EnableWifi clearError={clearError} setValue={setValue} errors={errors} id='enableWifi' isEnable={isEnableWifi} onChangeHandler={setIsEnableWifiHandler}
                          reg={register}/>
              <EnableSecurity clearError={clearError} setValue={setValue} errors={errors} setIsEnableSecurity={setIsEnableSecurity} id='wirelessSecurity' disabled={!isEnableWifi} isEnable={isEnableSecurity}
                              onChangeHandler={setIsEnableSecurityHandler} reg={register}/>
              <WirelessSettingIP clearError={clearError} setValue={setValue} errors={errors} disabled={!isEnableSecurity} reg={register}/>
              <WirelessSettingsDS clearError={clearError} setValue={setValue} errors={errors} disabled={!isEnableSecurity} reg={register}/>
            </Settings>
          </SettingsWrapper>
          <ButtonsContainer>
            <SaveButton type='submit'>Save</SaveButton>
            <CancelButton onClick={() => alert('Форма должна быть закрыта')} type='button'>Cancel</CancelButton>
          </ButtonsContainer>
        </FormWrapper>
      </div>
  );
}

export default App;