import React, { useState, forwardRef, useEffect }from 'react'
import axios from 'axios';
import MaterialTable from 'material-table'
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

//icon in table
import AddBox from '@material-ui/icons/AddBox';
import ArrowDownward from '@material-ui/icons/ArrowDownward';
import Check from '@material-ui/icons/Check';
import ChevronLeft from '@material-ui/icons/ChevronLeft';
import ChevronRight from '@material-ui/icons/ChevronRight';
import Clear from '@material-ui/icons/Clear';
import DeleteOutline from '@material-ui/icons/DeleteOutline';
import Edit from '@material-ui/icons/Edit';
import FilterList from '@material-ui/icons/FilterList';
import FirstPage from '@material-ui/icons/FirstPage';
import LastPage from '@material-ui/icons/LastPage';
import Remove from '@material-ui/icons/Remove';
import SaveAlt from '@material-ui/icons/SaveAlt';
import Search from '@material-ui/icons/Search';
import ViewColumn from '@material-ui/icons/ViewColumn';

import ArticleOutlinedIcon from '@mui/icons-material/ArticleOutlined';
import DeleteOutlinedIcon from '@mui/icons-material/DeleteOutlined';
import ReceiptLongIcon from '@mui/icons-material/ReceiptLong';
import EmailIcon from '@mui/icons-material/Email';
import Grid from '@material-ui/core/Grid';
import TextareaAutosize from '@mui/material/TextareaAutosize';
import SendIcon from '@mui/icons-material/Send';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';
import Slide from '@mui/material/Slide';

import formService from '../../services/form.service';
import AuthService from '../../services/auth.service';

const tableIcons = {
  Add: forwardRef((props, ref) => <AddBox {...props} ref={ref} />),
  Check: forwardRef((props, ref) => <Check {...props} ref={ref} />),
  Clear: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
  Delete: forwardRef((props, ref) => <DeleteOutline {...props} ref={ref} />),
  DetailPanel: forwardRef((props, ref) => <ChevronRight {...props} ref={ref} />),
  Edit: forwardRef((props, ref) => <Edit {...props} ref={ref} />),
  Export: forwardRef((props, ref) => <SaveAlt {...props} ref={ref} />),
  Filter: forwardRef((props, ref) => <FilterList {...props} ref={ref} />),
  FirstPage: forwardRef((props, ref) => <FirstPage {...props} ref={ref} />),
  LastPage: forwardRef((props, ref) => <LastPage {...props} ref={ref} />),
  NextPage: forwardRef((props, ref) => <ChevronRight {...props} ref={ref} />),
  PreviousPage: forwardRef((props, ref) => <ChevronLeft {...props} ref={ref} />),
  ResetSearch: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
  Search: forwardRef((props, ref) => <Search {...props} ref={ref} />),
  SortArrow: forwardRef((props, ref) => <ArrowDownward {...props} ref={ref} />),
  ThirdStateCheck: forwardRef((props, ref) => <Remove {...props} ref={ref} />),
  ViewColumn: forwardRef((props, ref) => <ViewColumn {...props} ref={ref} />)
};

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };
  
const emailStyle = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 500,
    height: 300,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};


function Approved() {
    //modal
    const [open, setOpen] = useState(false);
    const [openEmail, setOpenEmail] = useState(false);
    const [loading, isLoading] = useState(true);
    const handleOpen = () => setOpen(true);
    const handleOpenEmail = () => setOpenEmail(true);
    const handleClose = () => setOpen(false);
    const handleCloseEmail = () => setOpenEmail(false);
    const [recipient, setRecipient] = useState();
    const [subject, setSubject] = useState();
    const [body, setBody] = useState();
    const [userList, setUserList] = useState();
    const [openAlert, setOpenAlert] = useState(false)
    const [failAlert, setFailAlert] = useState(false)
    const [requestedForms, setRequestedForm] = useState({
        requestedCedula: [], 
        requestedConstituent: [],
        requestedBuilding: [],
        requestedResidency: [],
        requestedBarangayClearance: [],
        requestedComelec: [],
        requestedBusinessClosure: [],
        requestedBailbond: [],
        requestedGuardianship: [],
        requestedIndigencyBurial: [],
        requestedIndigencyClearance: [],
        requestedVoucher: [],
        requestedBusinessClearance: [],
        requestedImmunization: [],
        requestedDentalService: [],
        requestedMaternalCare: [],
    
    })

    var cedula =[]
    var constituent =[]
    var building =[]
    var residency =[]
    var barangayClearance =[]
    var comelec =[]
    var businessClosure =[]
    var bailBond =[]
    var guardianship =[]
    var indigencyBurial =[]
    var indigencyClearance =[]
    var voucher =[]
    var businessClearance =[]
    var immunization =[]
    var dentalService =[]
    var maternalCare =[]

    // const API_URL = "http://127.0.0.1:8000/api/forms/";
    const API_URL = formService.API_URL
    var token = JSON.parse(localStorage.getItem('user')).access;
    
    const [dataInTable, setDataInTable] = useState()

    useEffect(() => {
        async function fetchData(){
            let endpoints = [
                API_URL + "cedula/",
                API_URL + "constituent/",
                API_URL + "building/",
                API_URL + "residency/",
                API_URL + "barangay-clearance/",
                API_URL + "comelec/",
                API_URL + "business-closure/",
                API_URL + "bailbond/",
                API_URL + "guardianship/",
                API_URL + "indigency-burial/",
                API_URL + "indigency-clearance/",
                API_URL + "voucher/",
                API_URL + "business-clearance/",
                API_URL + "immunization/",
                API_URL + "dental-service/",
                API_URL + "maternal-care/"
              ];
             
            //call multiple requests here
            await axios.all(endpoints.map((endpoint) => axios.get(endpoint, {
                headers: {
                    Accept: 'application/json', 
                    Authorization: 'Bearer ' + token
                }
            })))
            .then(
                //get all the data
                axios.spread((...responses) => {
                    for (let i=0; i<16; i++){
                        switch(i){
                            case 0:
                            for (let j=0; j<responses[i].data.length; j++){
                                if (responses[i].data[j].status === "Approved"){
                                    cedula.push(responses[i].data[j])
                                }
                            }
                            break;
                            
                            case 1:
                                for (let j=0; j<responses[i].data.length; j++){
                                    if (responses[i].data[j].status === "Approved"){
                                        constituent.push(responses[i].data[j])
                                    }
                                }
                            break;

                            case 2:
                                for (let j=0; j<responses[i].data.length; j++){
                                    if (responses[i].data[j].status === "Approved"){
                                        building.push(responses[i].data[j])
                                    }
                                }
                            break;

                            case 3:
                                for (let j=0; j<responses[i].data.length; j++){
                                    if (responses[i].data[j].status === "Approved"){
                                        residency.push(responses[i].data[j])
                                    }
                                }
                            break;

                            case 4:
                                for (let j=0; j<responses[i].data.length; j++){
                                    if (responses[i].data[j].status === "Approved"){
                                        barangayClearance.push(responses[i].data[j])
                                    }
                                }
                            break;

                            case 5:
                                for (let j=0; j<responses[i].data.length; j++){
                                    if (responses[i].data[j].status === "Approved"){
                                        comelec.push(responses[i].data[j])
                                    }
                                }
                            break;

                            case 6:
                                for (let j=0; j<responses[i].data.length; j++){
                                    if (responses[i].data[j].status === "Approved"){
                                        businessClosure.push(responses[i].data[j])
                                    }
                                }
                            break;

                            case 7:
                                for (let j=0; j<responses[i].data.length; j++){
                                    if (responses[i].data[j].status === "Approved"){
                                        barangayClearance.push(responses[i].data[j])
                                    }
                                }
                            break;

                            case 8:
                                for (let j=0; j<responses[i].data.length; j++){
                                    if (responses[i].data[j].status === "Approved"){
                                        bailBond.push(responses[i].data[j])
                                    }
                                }
                            break;

                            case 9:
                                for (let j=0; j<responses[i].data.length; j++){
                                    if (responses[i].data[j].status === "Approved"){
                                        guardianship.push(responses[i].data[j])
                                    }
                                }
                            break;

                            case 10:
                                for (let j=0; j<responses[i].data.length; j++){
                                    if (responses[i].data[j].status === "Approved"){
                                        indigencyBurial.push(responses[i].data[j])
                                    }
                                }
                            break;

                            case 11:
                                for (let j=0; j<responses[i].data.length; j++){
                                    if (responses[i].data[j].status === "Approved"){
                                        indigencyClearance.push(responses[i].data[j])
                                    }
                                }
                            break;

                            case 12:
                                for (let j=0; j<responses[i].data.length; j++){
                                    if (responses[i].data[j].status === "Approved"){
                                        voucher.push(responses[i].data[j])
                                    }
                                }
                            break;

                            case 13:
                                for (let j=0; j<responses[i].data.length; j++){
                                    if (responses[i].data[j].status === "Approved"){
                                        businessClearance.push(responses[i].data[j])
                                    }
                                }
                            break;

                            case 14:
                                for (let j=0; j<responses[i].data.length; j++){
                                    if (responses[i].data[j].status === "Approved"){
                                        immunization.push(responses[i].data[j])
                                    }
                                }
                            break;

                            case 15:
                                for (let j=0; j<responses[i].data.length; j++){
                                    if (responses[i].data[j].status === "Approved"){
                                        dentalService.push(responses[i].data[j])
                                    }
                                }
                            break;

                            case 16:
                                for (let j=0; j<responses[i].data.length; j++){
                                    if (responses[i].data[j].status === "Approved"){
                                        maternalCare.push(responses[i].data[j])
                                    }
                                }
                            break;

                            default:
                            break;
                        }
                    }
                    setRequestedForm({
                        requestedCedula : cedula,
                        requestedConstituent : constituent,
                        requestedBuilding : building,
                        requestedResidency : residency,
                        requestedBarangayClearance : barangayClearance,
                        requestedComelec : comelec,
                        requestedBusinessClosure : businessClosure,
                        requestedBailbond : bailBond,
                        requestedGuardianship : guardianship,
                        requestedIndigencyBurial : indigencyBurial,
                        requestedIndigencyClearance : indigencyClearance,
                        requestedVoucher : voucher,
                        requestedBusinessClearance : businessClearance,
                        requestedImmunization : immunization,
                        requestedDentalService : dentalService,
                        requestedMaternalCare : maternalCare,
                    })
                })
            ); 
            
            AuthService.getUserList()
            .then((response) => {
                setUserList(response.data)
            })
        }
        fetchData()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    //compile in array
    const allRequestedForms = [
        ...requestedForms.requestedCedula, 
        ...requestedForms.requestedConstituent,
        ...requestedForms.requestedBuilding,
        ...requestedForms.requestedResidency,
        ...requestedForms.requestedBarangayClearance,
        ...requestedForms.requestedComelec,
        ...requestedForms.requestedBailbond,
        ...requestedForms.requestedGuardianship,
        ...requestedForms.requestedIndigencyBurial,
        ...requestedForms.requestedIndigencyClearance,
        ...requestedForms.requestedVoucher,
        ...requestedForms.requestedBusinessClearance,
        ...requestedForms.requestedDentalService,
        ...requestedForms.requestedImmunization,
        ...requestedForms.requestedMaternalCare,
        ...requestedForms.requestedBusinessClosure
    ]

    if(allRequestedForms.length > 0 && loading){
        setDataInTable(allRequestedForms)
        isLoading(false)
    }

    const deleteData = async (request_number, document_name, updatedRows, index) => {
        await formService.deleteRequest(request_number, document_name)
        .then((response) => {
            if(response.status === 200){
                updatedRows.splice(index, 1)
                setDataInTable(updatedRows)
            }
        })
        .catch((error) =>{
            console.log(error)
        }
        )
    }

    const moveData = async (request_number, status, document_name, updatedRows, index) => {
        await formService.moveFormRequest(request_number, document_name, status)
        .then((response) => {
            if(response.status === 200){
                updatedRows.splice(index, 1)
                setDataInTable(updatedRows)
            }
        })
        .catch((error) =>{
            console.log(error)
        }
        )
    }

    const handleSubmit = () => {
        formService.emailResident(recipient,subject,body)
        .then((response) => {
            if(response.status === 200){
                handleCloseEmail()
                setOpenAlert(true);
            }
        })
        .catch((error) =>{
            console.log(error)
            setFailAlert(true);
        }
        )
        
    }
    const handleCloseAlert = (event, reason) => {
        if (reason === 'clickaway') {
          return;
        }
    
        setOpenAlert(false);
        setFailAlert(false);
    };

    const getRecipient = (resident_number) => {
        for(let i=0; i<userList.length; i++) {
            if (userList[i].resident_number === resident_number){
                setRecipient(userList[i].email)
            }
        }
    }

    const Alert = React.forwardRef(function Alert(props, ref) {
		return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
	});

    
    const [details, setDetails] = useState({})
  return (
    <>
        <div style={{
            maxWidth: "95%", 
            display: "block",
            margin: "auto",
            marginTop: "30px",
            fontFamily:'Montserrat'
        }}>
            <MaterialTable
                title="Approved Requests"
                icons={tableIcons}
                columns ={[
                    { 
                        title: "Request ID", 
                        field: "request_number"
                    },
                    { 
                        title: "Resident Number", 
                        field: "resident_number" 
                    },
                    { 
                        title: "Document", 
                        field: "document_name" 
                    },
                    
                ]}
                data = {dataInTable}
                actions={[
                    {
                        icon: () => <ReceiptLongIcon color='secondary'/>,
                        tooltip: 'Mark as Released',
                        onClick: (event, rowData) => {
                            //frontend magic
                            const index = rowData.tableData.id;
                            const status = "Released"
                            const request_number = rowData["request_number"]
                            const document_name = rowData["document_name"].replace(/\s+/g, '-').toLowerCase()
                            const updatedRows = [...dataInTable]
                            if(window.confirm("Do you want to Release this Document?")){
                                moveData(request_number, status, document_name, updatedRows, index)
                            }
                        },
                    },
                    {
                        icon: () => <ArticleOutlinedIcon color="primary" onClick={handleOpen}/>,
                        tooltip: 'Show Details',
                        onClick: (event, rowData) => {
                            //frontend magic
                            setDetails({
                                request_number: rowData.request_number,
                                case_number: rowData.case_number,
                                purpose: rowData.purpose,
                                has_payment: rowData.has_payment,
                                maintenance_type: rowData.maintenance_type,
                                business_name: rowData.business_name,
                                business_owner: rowData.business_owner,
                                business_address: rowData.business_address,
                                business_nature: rowData.business_nature,
                                start_business_operated: rowData.start_business_operated,
                                last_business_operated: rowData.last_business_operated,
                                id_number: rowData.id_number,
                                date_received: rowData.date_received,
                                signature: rowData.signature,
                                picture: rowData.picture,
                                guardian_name: rowData.guardian_name,
                                mother_name: rowData.mother_name,
                                father_name: rowData.father_name,
                                birth_height: rowData.birth_height,
                                deceased_relationship: rowData.deceased_relationship,
                                deceased_name: rowData.deceased_name,
                                passed_onto_whom: rowData.passed_onto_whom,
                                patient_relationship: rowData.patient_relationship,
                                patient_name: rowData.patient_name,
                                child_name: rowData.child_name,
                                date_of_birth: rowData.date_of_birth,
                                student_name: rowData.student_name,
                                parent_name: rowData.parent_name,
                                school: rowData.school,
                                grade: rowData.grade,
                                birth_place: rowData.birth_place,
                                profession: rowData.profession,
                                monthly_income: rowData.monthly_income,
                                status: rowData.status,
                                date_requested: rowData.date_requested,
                                document_name: rowData.document_name,
                                resident_number: rowData.resident_number
                            })
                        },
                    },
                    {
                        icon: () => <EmailIcon style={{color:'#303f9f'}} onClick={handleOpenEmail}/>,
                        tooltip: 'Email Resident',
                        onClick: (event, rowData) => {
                            //frontend magic
                            const resident_number = rowData["resident_number"]
                            getRecipient(resident_number)
                        },
                    },
                    {
                        icon: () => <DeleteOutlinedIcon color="error"/>,
                        tooltip: 'Delete',
                        onClick: (event, rowData) => {
                            //frontend magic
                            const index = rowData.tableData.id;
                            const request_number = rowData["request_number"]
                            const document_name = rowData["document_name"].replace(/\s+/g, '-').toLowerCase()
                            const updatedRows = [...dataInTable]
                            if(window.confirm("Are you sure you want to delete this request?")){
                                deleteData(request_number, document_name, updatedRows, index)
                            }
                        },
                    }                    
                  ]}
                  options={{
                    actionsColumnIndex: -1
                  }}
            />
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <Typography id="modal-modal-title" variant="h6" component="h2" sx={{fontFamily:'Montserrat'}}>
                        Request Details
                    </Typography>
                    <Typography id="modal-modal-description" sx={{ mt: 2, fontFamily:'Montserrat' }}>
                    <b>Request Number:</b> {details.request_number} <br/>
                            {details.document_name === "Bail Bond" ? <>
                                <b>Case Number:</b> {details.case_number} <br/>
                            </>: null}
                            {details.document_name === "Barangay Clearance" ? <>
                                <b>Purpose:</b> {details.purpose} <br/>
                                <b>Has Payment:</b> {details.has_payment === true ? 'Yes' : 'No'} <br/>
                            </>: null}
                            {details.document_name === "Building Clearance" ? <>
                                <b>Maintenance Type:</b> {details.maintenance_type} <br/>
                                <b>Status:</b> {details.status} <br/>
                            </>: null}
                            {details.document_name === "Business Clearance" ? <>
                                <b>Business Name:</b> {details.business_name} <br/>
                                <b>Business Owner:</b> {details.business_owner} <br/>
                                <b>Business Address:</b> {details.business_address} <br/>
                                <b>Business Nature:</b> {details.business_nature} <br/>
                                <b>Start Business Operated:</b> {details.start_business_operated} <br/>
                            </>: null}
                            {details.document_name === "Business Closure" ? <>
                                <b>Business Name:</b> {details.business_name} <br/>
                                <b>Business Owner:</b> {details.business_owner} <br/>
                                <b>Business Address:</b> {details.business_address} <br/>
                                <b>Business Nature:</b> {details.business_nature} <br/>
                                <b>Last Business Operated:</b> {details.last_business_operated} <br/>
                            </>: null}
                            {details.document_name === "Cedula" ? <>
                                <b>Birth Place:</b> {details.birth_place} <br/>
                                <b>Profession:</b> {details.profession} <br/>
                                <b>Monthly Income:</b> {details.monthly_income} <br/>
                            </>: null}
                            {details.document_name === "Constituent ID" ? <>
                                <b>ID Number:</b> {details.id_number} <br/>
                                <b>Date Received:</b> {details.date_received} <br/>
                                <Box sx={{columnGap: 1, display: 'flex', justifyContent:"flex-start", alignItems:"flex-start"}}>
                                    <b>Signature:</b>
                                    <img sx={{flexGrow: 3}} src={details.signature==='' ? '../img/image.png': details.signature} alt="" width = "170px" height = "150px"></img>
                                </Box><br/>
                                <Box sx={{columnGap: 1,display: 'flex', justifyContent:"flex-start", alignItems:"flex-start"}}>
                                    <b>Picture:</b>
                                    <img src={details.picture==='' ? '../img/image.png': details.picture} alt="" width = "170px" height = "150px"></img>
                                </Box><br/>
                            </>: null}
                            {details.document_name === "Guardianship" ? <>
                                <b>Guardian Name:</b> {details.guardian_name} <br/>
                            </>: null}
                            {details.document_name === "Immunization" ? <>
                                <b>Mother's Name:</b> {details.mother_name} <br/>
                                <b>Father's Name:</b> {details.father_name} <br/>
                                <b>Birth Height:</b> {details.birth_height} <br/>
                            </>: null}
                            {details.document_name === "Indigency Burial" ? <>
                                <b>Deceased Relationship:</b> {details.deceased_relationship} <br/>
                                <b>Deceased Name:</b> {details.deceased_name} <br/>
                                <b>Passed Onto Whom:</b> {details.passed_onto_whom} <br/>
                            </>: null}
                            {details.document_name === "Indigency Clearance" ? <>
                                <b>Patient Relationship:</b> {details.patient_relationship} <br/>
                                <b>Patient Name:</b> {details.patient_name} <br/>
                                <b>Purpose:</b> {details.purpose} <br/>
                                <b>Passed Onto Whom:</b> {details.passed_onto_whom} <br/>
                            </>: null}
                            {details.document_name === "Maternal Care" ? <>
                                <b>Child's Name:</b> {details.child_name} <br/>
                                <b>Date of Birth:</b> {details.date_of_birth} <br/>
                                <b>Birth Place:</b> {details.birth_place} <br/>
                            </>: null}
                            {details.document_name === "Voucher" ? <>
                                <b>Student's Name:</b> {details.student_name} <br/>
                                <b>Parent's Name:</b> {details.parent_name} <br/>
                                <b>School:</b> {details.school} <br/>
                                <b>Grade:</b> {details.grade} <br/>
                            </>: null}
                            <b>Date Requested:</b> {details.date_requested} <br/>
                            <b>Document Name:</b> {details.document_name} <br/>
                            <b>Resident Number:</b> {details.resident_number} <br/>
                    </Typography>
                </Box>
            </Modal>
            <Modal
                open={openEmail}
                onClose={handleCloseEmail}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={emailStyle}>
                    <Typography id="modal-modal-title" variant="h6" component="h2" sx={{fontFamily:'Montserrat'}}>
                        Email Resident
                    </Typography>
                    <Typography id="modal-modal-description" sx={{ mt: 2, fontFamily:'Montserrat' }}>
                        <Grid>
                                <TextareaAutosize
                                    value={recipient}
                                    aria-label="empty textarea"
                                    placeholder="Recipient"
                                    disabled
                                    style={{ width: 500, height:30, fontFamily:'Montserrat',fontSize:15}}
                                />
                                <TextareaAutosize
                                    onChange={(e) => setSubject(e.target.value)}
                                    aria-label="empty textarea"
                                    placeholder="Subject"
                                    style={{ width: 500, height:30, fontFamily:'Montserrat',fontSize:15}}
                                />
                                <TextareaAutosize
                                    onChange={(e) => setBody(e.target.value)}
                                    aria-label="empty textarea"
                                    placeholder="Body"
                                    style={{ width: 500, fontFamily:'Montserrat',fontSize:15}}
                                    minRows={6}
                                />

                                <Button variant="contained" style={{float:'right', fontFamily:'Montserrat', fontWeight:600, backgroundColor:'#303f9f'}} endIcon={<SendIcon/>} onClick={handleSubmit}>
                                    Submit
                                </Button>
                        </Grid>
                    </Typography>
                </Box>
            </Modal> 
            <Snackbar open={openAlert} autoHideDuration={3000} onClose={handleCloseAlert} anchorOrigin={{vertical: 'bottom', horizontal: 'right'}} TransitionComponent={Slide}>
                <Alert onClose={handleCloseAlert} severity="success" sx={{ width: '100%' }}>
                  Email sent!
                </Alert>
            </Snackbar>
            <Snackbar open={failAlert} autoHideDuration={3000} onClose={handleCloseAlert} anchorOrigin={{vertical: 'bottom', horizontal: 'right'}} TransitionComponent={Slide}>
                <Alert onClose={handleCloseAlert} severity="error" sx={{ width: '100%' }}>
                An error occurred after sending an email. Please try again.
                </Alert>
            </Snackbar>
    
        </div>
    </>

  )
}

export default Approved