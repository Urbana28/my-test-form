import React from 'react'
import {Radio, RadioItem, RadioLabel} from "../styles/radio-button";

const RadioButton = ({value, selectedValue, disabled, text, name, onChangeHandler}) => {
    return (
        <RadioItem>
            <Radio onChange={onChangeHandler} name={name} value={value} checked={value === selectedValue}
                   disabled={disabled} id={value} type='radio'/>
            <RadioLabel text={text} htmlFor={value}/>
        </RadioItem>
    )
};

export default RadioButton