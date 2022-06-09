import React, { useState, forwardRef, useEffect }from 'react'
import MaterialTable from 'material-table'
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

import AuthService from "../services/auth.service"

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
  width: 650,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

function AdminListofUser() {
    //modal
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const [userList, setUserList] = useState ([])
    const [details, setDetails] = useState({})

    useEffect (() => {
        async function fetchData(){
            AuthService.getUserList()
            .then((response) => {
                setUserList(response.data)
            })
        }
        fetchData();
        // eslint-disable-next-line react-hooks/exhaustive-deps
      }, [])

  return (
    <>
        <div style={{
            maxWidth: "95%", 
            display: "block",
            margin: "auto",
            marginTop: "30px",
            fontFamily:'Montserrat',
            minHeight: "70vh"
        }}>
            <MaterialTable
                title="List of Users"
                icons={tableIcons}
                columns ={[
                    { 
                        title: "Resident Number", 
                        field: "resident_number"
                    },
                    { 
                        title: "First Name", 
                        field: "first_name" 
                    },
                    { 
                        title: "Last Name", 
                        field: "last_name" 
                    },
                    { 
                        title: "Date Created", 
                        field: "date_joined" 
                    }
                ]}
                data = {userList}
                actions={[
                    {
                        icon: () => <ArticleOutlinedIcon color="primary" onClick={handleOpen}/>,
                        tooltip: 'Show Details',
                        onClick: (event, rowData) => {
                            //frontend magic
                            var profile_pic_URL = ''
                            var id_pic_URL = ''
                            if(rowData.profile_pic !== null && rowData.profile_pic !== ''){
                                profile_pic_URL = AuthService.CLOUDINARY_URL() + rowData.profile_pic;
                            }
                            if(rowData.id_pic !== null && rowData.id_pic !== ''){
                                id_pic_URL = AuthService.CLOUDINARY_URL() + rowData.id_pic;
                            }
                            console.log(id_pic_URL)
                            setDetails({
                                email: rowData.email,
                                address: rowData.address,
                                age: rowData.age,
                                gender: rowData.gender,
                                date_of_birth: rowData.date_of_birth,
                                civil_status: rowData.civil_status,
                                mobile_number: rowData.mobile_number,
                                id_pic: id_pic_URL,
                                profile_pic: profile_pic_URL,
                            })
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
                    <Typography id="modal-modal-description" sx={{ mt: 2 , fontFamily:'Montserrat'}}>
                        <div style={{display:'flex', justifyContent:'center'}}>
                            <div style={{marginRight:50}}>
                                <b>Email:</b> {details.email} <br/>
                                <b>Address:</b> {details.address} <br/>
                                <b>Age:</b> {details.age} <br/>
                                <b>Gender:</b> {details.gender} <br/>
                                <Box sx={{columnGap: 1,display: 'flex', justifyContent:"flex-start", alignItems:"flex-start"}}>
                                    <b>Picture:</b>
                                    <img src={(details.profile_pic==='' || details.profile_pic===null) ? '../img/image.png': details.profile_pic} alt="" width = "170px" height = "150px"></img>
                                </Box><br/>
                            </div>
                            <div>
                            <b>Date of Birth:</b> {details.date_of_birth} <br/>
                                <b>Civil Status:</b> {details.civil_status} <br/>
                                <b>Contact Number:</b> {details.mobile_number} <br/>
                                <Box sx={{columnGap: 1, display: 'flex', justifyContent:"flex-start", alignItems:"flex-start"}}>
                                    <b>Signature:</b>
                                    <img sx={{flexGrow: 3}} src={(details.id_pic==='' || details.id_pic===null) ? '../img/image.png': details.id_pic} alt="" width = "170px" height = "150px"></img>
                                </Box><br/>
                                
                            </div>
                        </div>
                    </Typography>
                </Box>
            </Modal>
        </div>
    </>

  )
}

export default AdminListofUser