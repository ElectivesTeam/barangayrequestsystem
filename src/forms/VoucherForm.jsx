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

const VoucherForm = ({ activeForm, handleBack, handleNext,handleChange, voucher}) => {
    const classes = useStyles();
    const[studentNameError, setStudentNameError] = useState(false)
    const[parentNameError, setParentNameError] = useState(false)
    const[schoolError, setSchoolError] = useState(false)
    const[schoolAddressError, setSchoolAddressError] = useState(false)
    const[gradeError, setGradeError] = useState(false)
    const [information, setInformation] = useState({
        studentName: voucher.studentName,
        parentName: voucher.parentName,
        school: voucher.school,
        schoolAddress: voucher.schoolAddress,
        grade: voucher.grade,
    });
    
    const handleSubmit = (e) =>{
        let setChecker = true
        e.preventDefault()
        
        setStudentNameError(false)
        if(information.studentName == ''){
            setStudentNameError(true)
            setChecker = false
        }

        setParentNameError(false)
        if(information.parentName == ''){
            setParentNameError(true)
            setChecker = false
        }

        setSchoolError(false)
        if(information.school == ''){
            setSchoolError(true)
            setChecker = false
        }

        setSchoolAddressError(false)
        if(information.schoolAddress == ''){
            setSchoolAddressError(true)
            setChecker = false
        }

        setGradeError(false)
        if(information.grade == ''){
            setGradeError(true)
            setChecker = false
        }

        if(setChecker){
            //function to save the data in the form to the database
            handleChange("voucherForm", information)
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
                                                onChange={(e) => setInformation({...information, studentName:e.target.value})}
                                                variant="outlined"
                                                margin="normal"
                                                defaultValue={voucher.studentName}
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
                                                onChange={(e) => setInformation({...information, parentName:e.target.value})}
                                                variant="outlined"
                                                margin="normal"
                                                defaultValue={voucher.parentName}
                                                required
                                                fullWidth
                                                id="parentName"
                                                label="Parent Name"
                                                name="parentname"
                                                autoComplete="parentname"
                                                
                                                error={parentNameError}
                                            />
                                        </Grid>
                                        
                                        {/* School */}
                                        <Grid item xs={6}>
                                            <TextField
                                                onChange={(e) => setInformation({...information, school:e.target.value})}
                                                variant="outlined"
                                                margin="normal"
                                                defaultValue={voucher.school}
                                                required
                                                fullWidth
                                                id="school"
                                                label="School"
                                                name="school"
                                                autoComplete="school"
                                                
                                                error={schoolError}
                                            />
                                        </Grid>
                                        
                                        {/* School Address */}
                                        <Grid item xs={6}>
                                            <TextField
                                                onChange={(e) => setInformation({...information, schoolAddress:e.target.value})}
                                                variant="outlined"
                                                margin="normal"
                                                defaultValue={voucher.schoolAddress}
                                                required
                                                fullWidth
                                                id="schooladdress"
                                                label="School Address"
                                                name="schooladdress"
                                                autoComplete="schooladdress"
                                                
                                                error={schoolAddressError}
                                            />
                                        </Grid>
                                        
                                        {/* Grade */}
                                        <Grid item xs={6}>
                                            <TextField
                                                onChange={(e) => setInformation({...information, grade:e.target.value})}
                                                variant="outlined"
                                                margin="normal"
                                                defaultValue={voucher.grade}
                                                required
                                                fullWidth
                                                id="grade"
                                                label="Grade"
                                                name="grade"
                                                autoComplete="grade"
                                                
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