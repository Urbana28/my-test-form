import React, {useState, useEffect} from 'react'
import RadioButton from "./RadioButton";
import {InputsGroup} from "../styles/form";
import InputField from "./InputField";


const WirelessSettingsDS = ({reg, disabled, errors, setValue, clearError}) => {
    const [selectedValue, setSelectedValue] = useState('wirelessPreferred');
    const onChangeHandler = ({target: {value}}) => {
        setSelectedValue(value)
    };

    useEffect(() => {
        disabled && setSelectedValue('wirelessPreferred')
    }, [disabled]);

    const isDisabled = selectedValue === 'wirelessPreferred';
    const dnsPattern = /(?:[a-z0-9](?:[a-z0-9-]{0,61}[a-z0-9])?\.)+[a-z0-9][a-z0-9-]{0,61}[a-z0-9]/g;
    const subnetPattern = /^(((255\.){3}(255|254|252|248|240|224|192|128|0+))|((255\.){2}(255|254|252|248|240|224|192|128|0+)\.0)|((255\.)(255|254|252|248|240|224|192|128|0+)(\.0+){2})|((255|254|252|248|240|224|192|128|0+)(\.0+){3}))$/gm;
    return (
        <>
            <RadioButton disabled={disabled} name='wirelessDS' value='wirelessPreferred' selectedValue={selectedValue}
                         onChangeHandler={onChangeHandler}
                         text='Obtain DNS server address automatically'/>
            <RadioButton disabled={disabled} name='wirelessDS' value='wirelessAlternative' selectedValue={selectedValue}
                         onChangeHandler={onChangeHandler}
                         text='Use the following DNS server address:'/>
            <InputsGroup>
                <InputField clearError={clearError} setValue={setValue} pattern={dnsPattern} errorMessage='Incorrect DNS'
                            errors={errors} disabled={isDisabled} name='wirelessSettings.preferredDNS' reg={reg} required={true} title='Preferred DNS server:'/>
                <InputField clearError={clearError} setValue={setValue} pattern={subnetPattern} errorMessage='Incorrect Subnet Mask'
                            errors={errors} disabled={isDisabled} name='wirelessSettings.dnsMask' reg={reg} required={true} title='Subnet Mask:'/>
            </InputsGroup>
        </>
    )
};

export default WirelessSettingsDS