import React, {useEffect} from 'react'
import CheckBoxField from "./CheckBoxField";
import {InputsGroup} from "../styles/form";
import InputField from "./InputField";


const EnableSecurity = ({reg, disabled, isEnable, onChangeHandler, id, setIsEnableSecurity, errors, setValue, clearError}) => {
    useEffect(() => {
        disabled && setIsEnableSecurity(false);
    }, [disabled, setIsEnableSecurity]);

    return (
        <>
            <CheckBoxField id={id} onChangeHandler={onChangeHandler} isChecked={isEnable} disabled={disabled} title='Enable Wireless Security'/>
            <InputsGroup>
                <InputField clearError={clearError} setValue={setValue} errors={errors} disabled={disabled} name='wirelessSettings.securityKey' reg={reg} required={true} title='Security Key:'/>
            </InputsGroup>
        </>
    )
};


export default EnableSecurity