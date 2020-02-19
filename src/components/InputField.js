import React, {useEffect, useState} from 'react'
import {Error, Input, InputItem, InputLabel} from "../styles/input";

const InputField = ({title, required, reg, name, disabled = true, pattern, errorMessage, errors = false, setValue, clearError}) => {

    const [isReset, setIsReset] = useState(false);


    const nameArr = name.split('.');
    const requiredError = !isReset && !disabled && errors[nameArr[0]] && errors[nameArr[0]][nameArr[1]] && errors[nameArr[0]][nameArr[1]].type === 'required';
    const patternError = !isReset && !disabled && errors[nameArr[0]] && errors[nameArr[0]][nameArr[1]] && errors[nameArr[0]][nameArr[1]].type === 'pattern';

    useEffect(() => {
        setValue(name, '');
        clearError(name);
        !disabled && setIsReset(false)
    }, [disabled, setValue, name, clearError]);

    return (
        <>
            <InputItem>
                <Input
                    error={requiredError || patternError}
                    name={name} ref={reg({
                    required: required && !disabled,
                    pattern: {
                        value: !disabled && pattern,
                        message: errorMessage
                    }
                })} disabled={disabled}/>
                <InputLabel required={required}>{title}</InputLabel>
            </InputItem>
            <Error>{requiredError && `Field is required!`}</Error>
            <Error>{patternError && `${errorMessage}`}</Error>
        </>
    )
};

export default InputField