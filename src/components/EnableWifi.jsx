import React, {useEffect} from 'react'
import CheckBoxField from "./CheckBoxField";
import {Select, SelectArrow, SelectTitle, SelectWrapper} from "../styles/select";



const EnableWifi = ({reg, isEnable, onChangeHandler, id, errors, setValue, clearError}) => {

    const error = isEnable && errors.wirelessSettings && errors.wirelessSettings.networkName && errors.wirelessSettings.networkName.type === 'required';
    useEffect(() => {
        setValue('wirelessSettings.networkName', '');
        clearError('wirelessSettings.networkName')
    }, [isEnable, setValue, clearError]);

    return (
        <>
            <CheckBoxField id={id} isChecked={isEnable} onChangeHandler={onChangeHandler}  title='Enable wifi'/>
            <SelectWrapper>
                <SelectTitle disabled={!isEnable}>Wireless Network Name</SelectTitle>
                <Select error={error}
                        disabled={!isEnable} name='wirelessSettings.networkName' ref={reg({
                    required: isEnable})}>
                    <option value=''>Please Select</option>
                    <option value="first">First Name</option>
                    <option value="second">Second Name</option>
                    <option value="third">Third Name</option>
                </Select>
                <SelectArrow error={error} disabled={!isEnable}/>
            </SelectWrapper>
        </>
    )
};


export default EnableWifi