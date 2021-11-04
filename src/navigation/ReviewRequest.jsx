import React from 'react'
import Button  from '@material-ui/core/Button';

const ReviewRequest = ({ handleBack }) => {
    return (
        <div>
            <Button
                variant="contained"
                onClick={handleBack}
                sx={{ mt: 3, ml: 1 }}
                
            >
                Back
            </Button> 
        </div>
    )
}

export default ReviewRequest
