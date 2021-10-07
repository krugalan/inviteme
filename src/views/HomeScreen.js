import React from 'react'
import { FeaturesMain } from '../components/features/FeaturesMain'
import { HeaderMain } from '../components/header/HeaderMain'
import { JumboAnimated } from '../components/jumboAinmated/JumboAnimated'




export const HomeScreen = () => {
    return (
        <div className="site-wrapper overflow-hidden" >
            <HeaderMain />
            <JumboAnimated />
            <FeaturesMain />
        </div>
    )
}
