import React from 'react'
import {SettingsTitle, SettingsItem} from "../styles/settings";

const Settings = ({title, withBorder, children}) => {
    return (
        <SettingsItem withBorder={withBorder}>
            <SettingsTitle>{title}</SettingsTitle>
            {children}
        </SettingsItem>
    )
};

export default Settings