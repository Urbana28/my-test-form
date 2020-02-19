import React from 'react'
import {CheckBox, CheckBoxLabel, CheckBoxWrapper} from "../styles/checkbox";

const CheckBoxField = ({title, isChecked, onChangeHandler, disabled, id}) => {
    return (
        <CheckBoxWrapper>
            <CheckBox  checked={isChecked} onChange={onChangeHandler} disabled={disabled} id={id} type='checkbox' />
            <CheckBoxLabel disabled={disabled} htmlFor={id}>{title}</CheckBoxLabel>
        </CheckBoxWrapper>
    )
};

export default CheckBoxField