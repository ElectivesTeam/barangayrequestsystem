import React from 'react'
import FormHeader from './components/FormHeader'
import Button  from '@material-ui/core/Button';

const BailBondForm = () => {
    return (
        <>
            <FormHeader formTitle={'Bail Bond Form'}/>
            {/* {activeForm !== 0 &&
                <Button onClick={handleBack} sx={{ mt: 3, ml: 1 }}>
                    Back
                </Button>
            }
                        
            <Button
                variant="contained"
                onClick={handleNext}
                sx={{ mt: 3, ml: 1 }}
            >
                Next
            </Button> */}
        </>
    )
}

export default BailBondForm