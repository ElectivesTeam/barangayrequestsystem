import React, { useState } from 'react'
import FormHeader from './components/FormHeader'
import Button  from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';

const BuildingClearanceForm = ({ activeForm, handleBack, handleNext}) => {
    // fetching of data
    // const[lastname, setLastname] = useState('')
    // const[lastnameError, setLastnameError] = useState(false)
    
    const handleSubmit = (e) =>{
        let setChecker = true
        e.preventDefault()
        
        //validation if the textfield is not empty
        // setLastnameError(false)
        // if(lastname == ''){
        //     setLastnameError(true)
        //     setChecker = false
        // }

        if(setChecker){
            //function to save the data in the form to the database
            console.log('submitted')
            handleNext()
        }

    }

    return (
        <>
            <FormHeader formTitle={'Building Clearance Form'}/>
            <form onSubmit={handleSubmit}>

                {/* Data forms here - sample textfield*/}

                {/* <TextField
                    onChange={(e) => setLastname(e.target.value)}
                    variant="outlined"
                    margin="normal"
                    required
                    fullWidth
                    id="last_name"
                    label="Last Name"
                    name="last_name"
                    autoComplete="last_name"
                    autoFocus
                    error={lastnameError}
                /> */}
                
                {/* Buttons */}
                {activeForm !== 0 &&
                    <Button 
                        onClick={handleBack} 
                        sx={{ mt: 3, ml: 1 }}
                    >
                        Back
                    </Button>
                }         
                <Button
                    variant="contained"
                    onClick={handleSubmit}
                    sx={{ mt: 3, ml: 1 }}
                    type="submit"
                >
                    Next
                </Button>

                </form>    
        </>
    )
}

export default BuildingClearanceForm