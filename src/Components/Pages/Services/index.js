import React from 'react'
import { homeObjOne, homeObjThree } from './style';
import { InfoSection } from '../../../components';

const Services = () => {
    return (
        <>
            <InfoSection {...homeObjOne}/>
            <InfoSection {...homeObjThree}/>
        </>
    )
}

export default Services;
