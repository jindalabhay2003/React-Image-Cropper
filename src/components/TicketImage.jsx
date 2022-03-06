import UploadFileIcon from '@mui/icons-material/UploadFile';
import {Box, Typography} from "@mui/material"
import { makeStyles } from '@mui/styles';
import { useRef, useState, useEffect } from 'react';
import { Dialog } from '@mui/material';
import DialogCrop from './DialogCrop';
import ImageCropDialog from './ImageCropDialog';
import "../App.css"

const useStyles = makeStyles({
    container:{
    },
    IconClass:{
        display: 'flex',
        justifyContent: 'center'
    },
    TextClass1:{
        display: 'flex',
        justifyContent: 'center'

    },
    TextClass2:{
        display: 'flex',
        justifyContent: 'center'

    },
    main: {
        width: "120px !important",
        height: "95px !important"
    },
    upperText:{
        fontSize: "30px !important",
        fontFamily: 'Segoe UI,Helvetica Neue,Helvetica,Lucida Grande,Arial,Ubuntu,Cantarell,Fira Sans,sans-serif !important',
        color: '#1984CB'       
    },
    lowerText: {
        fontSize: '12px !important',
        fontFamily: 'Segoe UI,Helvetica Neue,Helvetica,Lucida Grande,Arial,Ubuntu,Cantarell,Fira Sans,sans-serif !important',
        color: '#1984CB' 
    }
})


const TicketImage = ()=> {

    const classes = useStyles();
    const FileUploadRef = useRef();

  const [imageToCrop, setImageToCrop] = useState(undefined);
  const [croppedImage, setCroppedImage] = useState(null);
  const [dialogOpen,setDialogOpen] = useState(false);

  const onUploadFile = (event) => {
    if (event.target.files && event.target.files.length > 0) {
      const reader = new FileReader();

      reader.addEventListener("load", () => {
        const image = reader.result;

        setImageToCrop(image);
        setDialogOpen(true);
      });

      reader.readAsDataURL(event.target.files[0]);
    }
  };

//   useEffect(()=>{
//       setDialogOpen(true);
//   },[imageToCrop]);
const OnCancel =()=>{
    setImageToCrop(null);
    setCroppedImage(null);
    setDialogOpen(false);
}

    return (
        <Box>
        {
         croppedImage!=null?<Box style={{position: "relative"}} > <img style={{maxWidth: "495px",maxHeight: "280px" }} src={croppedImage}/> <h6 className='check' >Helooo</h6> </Box>:
        <Box className={classes.container}>
            <Box className={classes.IconClass}>
            <UploadFileIcon onClick={(event)=>{
                event.preventDefault();
                FileUploadRef.current.click();
            }} className={classes.main} style={{fill: "#1984CB"}}  />
            <input type="file" accept="image/*" style={{display: 'none' }} ref={FileUploadRef} onChange={onUploadFile}  />
            </Box>
            <Box className={classes.TextClass1}>
            <Typography className={classes.upperText}> Upload Media</Typography>
            </Box>
            <Box className={classes.TextClass2} >
            <Typography className={classes.lowerText}>or drag directly from your computer</Typography>
            </Box>
            {
                dialogOpen?<ImageCropDialog setDialogOpen={setDialogOpen} imageUrl={imageToCrop} OnCancel={OnCancel} setCroppedImage={setCroppedImage} ></ImageCropDialog>:null
            }
            {/* {
                croppedImage && <Box> <img style={{maxWidth: "495px",maxHeight: "280px"}} src={croppedImage}/> </Box>
            } */}
        </Box>
        }
        </Box>
    )
    
}

export default TicketImage;