import React, {useState} from 'react'
import RadioButton from "./RadioButton";
import {InputsGroup} from "../styles/form";
import InputField from "./InputField";

const SettingsDNS = ({reg, errors, setValue, clearError}) => {
    const [selectedValue, setSelectedValue] = useState('autoDNS');
    const onChangeHandler = ({target: {value}}) => {
        setSelectedValue(value)
    };

    const isDisabled = selectedValue === 'autoDNS';
    const dnsPattern = /(?:[a-z0-9](?:[a-z0-9-]{0,61}[a-z0-9])?\.)+[a-z0-9][a-z0-9-]{0,61}[a-z0-9]/g;

    return (
        <>
            <RadioButton name='ethernetDNS' value='autoDNS' selectedValue={selectedValue} onChangeHandler={onChangeHandler}
                         text='Obtain DNS server address automatically'/>
            <RadioButton name='ethernetDNS' value='followingDNS' selectedValue={selectedValue} onChangeHandler={onChangeHandler}
                         text='Use the following DNS server address:'/>
            <InputsGroup>
                <InputField clearError={clearError} setValue={setValue} pattern={dnsPattern} errorMessage='Incorrect DNS'
                            errors={errors} disabled={isDisabled} name='ethernetSettings.preferredDNS' reg={reg} required={true} title='Preferred DNS server:'/>
                <InputField clearError={clearError} setValue={setValue} pattern={dnsPattern} errorMessage='Incorrect DNS'
                            errors={errors} disabled={isDisabled} name='ethernetSettings.alternativeDNS' reg={reg}  title='Alternative DNS server:'/>
            </InputsGroup>
        </>
    )
};

export default SettingsDNS