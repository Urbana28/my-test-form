import React, {useState, useEffect} from 'react'
import RadioButton from "./RadioButton";
import {InputsGroup} from "../styles/form";
import InputField from "./InputField";



const WirelessSettingsIP = ({reg, disabled, errors, setValue, clearError}) => {
    const [selectedValue, setSelectedValue] = useState('wirelessAutomatically');
    const onChangeHandler = ({target: {value}}) => {
        setSelectedValue(value)
    };

    const isDisabled = selectedValue === 'wirelessAutomatically';
    useEffect(() => {
        disabled && setSelectedValue('wirelessAutomatically')
    }, [disabled]);

    const subnetPattern = /^(((255\.){3}(255|254|252|248|240|224|192|128|0+))|((255\.){2}(255|254|252|248|240|224|192|128|0+)\.0)|((255\.)(255|254|252|248|240|224|192|128|0+)(\.0+){2})|((255|254|252|248|240|224|192|128|0+)(\.0+){3}))$/gm;
    const ipPattern = /\b(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\b/

    return (
        <>
            <RadioButton disabled={disabled} name='wirelessIP' value='wirelessAutomatically' selectedValue={selectedValue}
                         onChangeHandler={onChangeHandler}
                         text='Obtain an IP address automatically (DHCP/BootP)'/>
            <RadioButton disabled={disabled} name='wirelessIP' value='wirelessFollowing' selectedValue={selectedValue}
                         onChangeHandler={onChangeHandler}
                         text='Use the following ip address:'/>
            <InputsGroup>
                <InputField clearError={clearError} setValue={setValue} pattern={ipPattern} errorMessage='Incorrect IP' errors={errors} disabled={isDisabled} name='wirelessSettings.ip' reg={reg} required={true} title='IP address:'/>
                <InputField clearError={clearError} setValue={setValue} pattern={subnetPattern} errorMessage='Incorrect Subnet Mask' errors={errors} disabled={isDisabled} name='wirelessSettings.ipMask' reg={reg} required={true} title='Subnet Mask:'/>
                <InputField clearError={clearError} setValue={setValue} errors={errors} disabled={isDisabled} name='wirelessSettings.gateway' reg={reg} title='Default Gateway: '/>
            </InputsGroup>
        </>
    )
};

export default WirelessSettingsIP