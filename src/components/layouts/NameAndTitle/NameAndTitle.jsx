import React from 'react';
import Name from './Name';
import Title from './Title';

import './NameAndTitle.css'

function NameAndTitle() {
    return ( <>
        <Name className="name-element"/>
        <Title className="designation-element"/>
    </> );
}

export default NameAndTitle
;