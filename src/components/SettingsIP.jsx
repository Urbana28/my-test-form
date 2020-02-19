import React, {useState} from 'react'
import RadioButton from "./RadioButton";
import {InputsGroup} from "../styles/form";
import InputField from "./InputField";


const SettingsIP = ({reg, errors, setValue, clearError}) => {
    const [selectedValue, setSelectedValue] = useState('automatically');
    const onChangeHandler = ({target: {value}}) => {
        setSelectedValue(value)
    };

    const isDisabled = selectedValue === 'automatically';
    const subnetPattern = /^(((255\.){3}(255|254|252|248|240|224|192|128|0+))|((255\.){2}(255|254|252|248|240|224|192|128|0+)\.0)|((255\.)(255|254|252|248|240|224|192|128|0+)(\.0+){2})|((255|254|252|248|240|224|192|128|0+)(\.0+){3}))$/gm
    const ipPattern = /\b(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\b/
    return (
        <>
            <RadioButton name='ethernetIP' value='automatically' selectedValue={selectedValue} onChangeHandler={onChangeHandler}
                         text='Obtain an IP address automatically (DHCP/BootP)'/>
            <RadioButton name='ethernetIP' value='following' selectedValue={selectedValue} onChangeHandler={onChangeHandler}
                         text='Use the following ip address:'/>
            <InputsGroup>
                <InputField clearError={clearError} setValue={setValue} errorMessage='Incorrect IP' pattern={ipPattern} errors={errors} disabled={isDisabled} name='ethernetSettings.ip' reg={reg} required={true} title='IP address:'/>
                <InputField clearError={clearError} setValue={setValue} errorMessage='Incorrect Subnet Mask' pattern={subnetPattern} errors={errors} disabled={isDisabled} name='ethernetSettings.mask' reg={reg} required={true} title='Subnet Mask:'/>
                <InputField clearError={clearError} setValue={setValue} errors={errors} disabled={isDisabled} name='ethernetSettings.gateway' reg={reg} title='Default Gateway: '/>
            </InputsGroup>
        </>
    )
};

export default SettingsIP