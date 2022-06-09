import React, { useState, forwardRef, useEffect }from 'react'
import { useHistory } from "react-router-dom";
import MaterialTable from 'material-table'
import Chip from '@mui/material/Chip';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
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
import CheckIcon from '@mui/icons-material/Check';
import ReceiptLongIcon from '@mui/icons-material/ReceiptLong';
import AssignmentLateOutlinedIcon from '@mui/icons-material/AssignmentLateOutlined';
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';
import QuestionMarkIcon from '@mui/icons-material/QuestionMark';

import formService from '../services/form.service';
import AuthService from '../services/auth.service';
import authService from '../services/auth.service';

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

//modal design
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


function MyRequests() {
    //modal
    let history = useHistory();
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    useEffect(() => {
        async function fetchData() {
            if (!authService.getCurrentUser()){
                history.push('/')
            }
            else {
                formService.getMyRequests()
                .then((response) => {
                    setDataInTable(response.data)
                })
                .catch((error) =>{
                    console.log(error)
                }
                )
            }
        }
        fetchData();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

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

    const [details, setDetails] = useState({})   

    const [dataInTable, setDataInTable] = useState([])
    return (
        <>
            <div style={{
                maxWidth: "95%", 
                display: "block",
                margin: "auto",
                marginTop: "30px",
                minHeight: "70vh"
            }}>
                <MaterialTable
                    title="My Requests"
                    icons={tableIcons}
                    columns ={[
                        { 
                            title: "Request ID", 
                            field: "request_number"
                        },
                        { 
                            title: "Document", 
                            field: "document_name" 
                        },
                        { 
                            title: "Date of Request", 
                            field: "date_requested"
                        },
                        { 
                            title: "Request Status", 
                            field: 'status',
                            render: (rowData) => (
                                rowData.status === "Approved" ? <Chip icon={<CheckIcon/>} label="Approved" color="success" variant="outlined"/> :
                                rowData.status === "Released" ? <Chip icon={<ReceiptLongIcon/>} label="Released" color="primary" variant="outlined"/> :
                                rowData.status === "Pending" ? <Chip icon={<AssignmentLateOutlinedIcon/>} label="Pending" color="warning" variant="outlined"/> :
                                rowData.status === "Rejected" ? <Chip icon={<CloseOutlinedIcon/>} label="Rejected" color="error" variant="outlined"/> : 
                                                                    <Chip icon={<QuestionMarkIcon/>} label="Unknown Status" variant="outlined"/>
                            )
                        },
                        // { 
                        //     title: "Payment Status", 
                        //     field: "paymentStatus" 
                        // },
                        
                    ]}
                    data = {dataInTable}
                    actions={[
                        {
                            icon: () => <ArticleOutlinedIcon color="primary"/>,
                            tooltip: 'Show Details',
                            onClick: (event, rowData) => {
                                //frontend magic
                                var signature_URL = ''
                                var picture_URL = ''
                                if(rowData.picture !== null && rowData.picture !== ''){
                                    picture_URL = AuthService.CLOUDINARY_URL() + rowData.picture;
                                }
                                if(rowData.signature !== null && rowData.signature !== ''){
                                    signature_URL = AuthService.CLOUDINARY_URL() + rowData.signature;
                                }
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
                                    signature: signature_URL,
                                    picture: picture_URL,
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
                                handleOpen()
                            },
                        },
                        rowData => ({
                            icon: () => <DeleteOutlinedIcon color="error"/>,
                            tooltip: 'Delete',
                            disabled: rowData.status === "Approved",
                            onClick: (event, rowData) => {
                                //frontend magic
                                const index = rowData.tableData.id;
                                const request_number = rowData["request_number"]
                                const document_name = rowData["document_name"].replace(/\s+/g, '-').toLowerCase()
                                const updatedRows = [...dataInTable]
                                if(window.confirm("Are you sure you want to delete this request?")){
                                    console.log(index)
                                    deleteData(request_number, document_name, updatedRows, index)
                                }
                            },
                        })
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
                        <Typography id="modal-modal-title" variant="h6" component="h2">
                            Request Details
                        </Typography>
                        <Typography id="modal-modal-description" sx={{ mt: 2 }}>
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
            </div>
        </>
        
      )
  
}

export default MyRequests