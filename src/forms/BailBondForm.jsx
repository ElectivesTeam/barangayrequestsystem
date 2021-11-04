import React from 'react'
import FormHeader from './components/FormHeader'

import NameTextField from './components/text fields/NameTextField'

const BailBondForm = () => {
    return (
        <>
            <FormHeader formTitle={'Bail Bond Form'}/>
            <NameTextField/>
        </>
    )
}

export default BailBondForm
