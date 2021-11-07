import React, { useState } from 'react'
import FormHeader from './components/FormHeader'
import Button  from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles'
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';


const useStyles = makeStyles((theme) => ({
    root: {
        padding: '5px 30px 0px 30px',
      
    },
    title:{ 
        fontWeight: 600,
        fontSize:'1.4rem',
    },
    info:{
        fontWeight: 500,
        fontSize:'1rem',
        paddingLeft:'25px'
    },
    button: {
        width: '10%',
        height: '10%',   
        left: '77%',
    },
    firstpagebutton: {
        width: '10%',
        height: '10%',   
        left: '90%',
    },
    buttondiv: {
        paddingTop: '15px',
        paddingBottom: '15px'
    }
}));

const VoucherForm = ({ activeForm, handleBack, handleNext}) => {
    const classes = useStyles();
    const[studentName, setStudentName] = useState('')
    const[studentNameError, setStudentNameError] = useState(false)

    const[parentName, setParentName] = useState('')
    const[parentNameError, setParentNameError] = useState(false)

    const[school, setSchool] = useState('')
    const[schoolError, setSchoolError] = useState(false)

    const[schoolAddress, setSchoolAddress] = useState('')
    const[schoolAddressError, setSchoolAddressError] = useState(false)

    const[grade, setGrade] = useState('')
    const[gradeError, setGradeError] = useState(false)
    
    const handleSubmit = (e) =>{
        let setChecker = true
        e.preventDefault()
        
        setStudentNameError(false)
        if(studentName == ''){
            setStudentNameError(true)
            setChecker = false
        }

        setParentNameError(false)
        if(parentName == ''){
            setParentNameError(true)
            setChecker = false
        }

        setSchoolError(false)
        if(school == ''){
            setSchoolError(true)
            setChecker = false
        }

        setSchoolAddressError(false)
        if(schoolAddress == ''){
            setSchoolAddressError(true)
            setChecker = false
        }

        setGradeError(false)
        if(grade == ''){
            setGradeError(true)
            setChecker = false
        }

        if(setChecker){
            //function to save the data in the form to the database
            handleNext()
        }
    }

    return (
        <>
            <FormHeader formTitle={'Voucher Form'}/>
            <Grid container component="main" className={classes.root}>
                <Grid item xs={12}>
                    <Paper elevation={3} >
                        <Box p={2} className={classes.title}>
                            <form onSubmit={handleSubmit}>

                                <div className={classes.info}>
                                    <Grid container spacing={2}>

                                        {/* Student Name */}
                                        <Grid item xs={6}>
                                            <TextField
                                                onChange={(e) => setStudentName(e.target.value)}
                                                variant="outlined"
                                                margin="normal"
                                                required
                                                fullWidth
                                                id="studentname"
                                                label="Student Name"
                                                name="studentname"
                                                autoComplete="studentname"
                                                autoFocus
                                                error={studentNameError}
                                            />
                                        </Grid>

                                        {/* Parent Name */}
                                        <Grid item xs={6}>
                                            <TextField
                                                onChange={(e) => setParentName(e.target.value)}
                                                variant="outlined"
                                                margin="normal"
                                                required
                                                fullWidth
                                                id="parentName"
                                                label="Parent Name"
                                                name="parentname"
                                                autoComplete="parentname"
                                                autoFocus
                                                error={parentNameError}
                                            />
                                        </Grid>
                                        
                                        {/* School */}
                                        <Grid item xs={6}>
                                            <TextField
                                                onChange={(e) => setSchool(e.target.value)}
                                                variant="outlined"
                                                margin="normal"
                                                required
                                                fullWidth
                                                id="school"
                                                label="School"
                                                name="school"
                                                autoComplete="school"
                                                autoFocus
                                                error={schoolError}
                                            />
                                        </Grid>
                                        
                                        {/* School Address */}
                                        <Grid item xs={6}>
                                            <TextField
                                                onChange={(e) => setSchoolAddress(e.target.value)}
                                                variant="outlined"
                                                margin="normal"
                                                required
                                                fullWidth
                                                id="schooladdress"
                                                label="School Address"
                                                name="schooladdress"
                                                autoComplete="schooladdress"
                                                autoFocus
                                                error={schoolAddressError}
                                            />
                                        </Grid>
                                        
                                        {/* Grade */}
                                        <Grid item xs={6}>
                                            <TextField
                                                onChange={(e) => setGrade(e.target.value)}
                                                variant="outlined"
                                                margin="normal"
                                                required
                                                fullWidth
                                                id="grade"
                                                label="Grade"
                                                name="grade"
                                                autoComplete="grade"
                                                autoFocus
                                                error={gradeError}
                                            />
                                        </Grid>
                                    </Grid>
                                </div>

                                {/* Buttons */}
                                <div className={classes.buttondiv}>
                                    {activeForm !== 0 &&
                                        <Button 
                                            onClick={handleBack} 
                                            color="primary"
                                            className={classes.button}
                                        >
                                            Back
                                        </Button>
                                    }         
                                        <Button
                                            variant="contained"
                                            onClick={handleSubmit}
                                            type="submit"
                                            color="primary"
                                            className={activeForm === 0 ? classes.firstpagebutton : classes.button}
                                        >
                                            Next
                                        </Button>
                                </div>
                            </form> 
                        </Box>
                    </Paper>
                </Grid>
            </Grid>
        </>
    )
}

export default VoucherForm