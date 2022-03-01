import React, { useState, forwardRef }from 'react'
import MaterialTable from 'material-table'
import Chip from '@mui/material/Chip';
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
import CheckIcon from '@mui/icons-material/Check';
import ReceiptLongIcon from '@mui/icons-material/ReceiptLong';
import AssignmentLateOutlinedIcon from '@mui/icons-material/AssignmentLateOutlined';
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';
import QuestionMarkIcon from '@mui/icons-material/QuestionMark';

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

//dummy data
const data = [
  {
      requestId: "123456",
      name: "Juan Dela Cruz",
      document: "Cedula",
      dateOfRequest: "02-22-22",
      paymentStatus: "Paid",
      requestStatus: "Approved"
  },
  {
      requestId: "4578",
      name: "Juan Dela Cruz",
      document: "Barangay Indigency",
      dateOfRequest: "02-22-22",
      paymentStatus: "Free",
      requestStatus: "Approved"
  }
]

function Approved() {
    //modal
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    
    const [dataInTable, setDataInTable] = useState(data)
  return (
    <>
        <div style={{
            maxWidth: "95%", 
            display: "block",
            margin: "auto",
            marginTop: "30px"
        }}>
            <MaterialTable
                title="Approved Requests"
                icons={tableIcons}
                columns ={[
                    { 
                        title: "Request ID", 
                        field: "requestId"
                    },
                    { 
                        title: "Name", 
                        field: "name" 
                    },
                    { 
                        title: "Document", 
                        field: "document" 
                    },
                    { 
                        title: "Date of Request", 
                        field: "dateOfRequest"
                    },
                    { 
                        title: "Request Status", 
                        field: 'requestStatus',
                        render: (rowData) => (
                            rowData.requestStatus == "Approved" ? <Chip icon={<CheckIcon/>} label="Approved" color="success" variant="outlined"/> :
                            rowData.requestStatus == "Released" ? <Chip icon={<ReceiptLongIcon/>} label="Released" color="primary" variant="outlined"/> :
                            rowData.requestStatus == "Pending" ? <Chip icon={<AssignmentLateOutlinedIcon/>} label="Pending" color="warning" variant="outlined"/> :
                            rowData.requestStatus == "Rejected" ? <Chip icon={<CloseOutlinedIcon/>} label="Rejected" color="error" variant="outlined"/> : 
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
                        icon: () => <ReceiptLongIcon color='secondary'/>,
                        tooltip: 'Mark as Released',
                        onClick: (event, rowData) => {
                            //frontend magic
                            const index = rowData.tableData.id;
                            const updatedRows = [...dataInTable]
                            if(window.confirm("Do you want to Release this Document?")){
                                console.log(index)
                                updatedRows.splice(index, 1)
                                setDataInTable(updatedRows)
                            }
                        },
                    },
                    {
                        icon: () => <ArticleOutlinedIcon color="primary" onClick={handleOpen}/>,
                        tooltip: 'Show Details',
                    },
                    {
                        icon: () => <DeleteOutlinedIcon color="error"/>,
                        tooltip: 'Delete',
                        onClick: (event, rowData) => {
                            //frontend magic
                            const index = rowData.tableData.id;
                            const updatedRows = [...dataInTable]
                            if(window.confirm("Are you sure you want to delete this request?")){
                                console.log(index)
                                updatedRows.splice(index, 1)
                                setDataInTable(updatedRows)
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
                    <Typography id="modal-modal-title" variant="h6" component="h2">
                        Request Details
                    </Typography>
                    <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                        //Details
                    </Typography>
                </Box>
            </Modal>
        </div>
    </>

  )
}

export default Approved