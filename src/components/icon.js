import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export const Icon = ({ iconName }) => (
    <li>
        <FontAwesomeIcon icon={iconName} />
    </li>
)