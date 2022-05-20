import {Box, Typography, Paper} from "@mui/material";
import { makeStyles } from "@mui/styles";
import { useState } from "react";
import Button from '@mui/material/Button';

// Components
import TicketImage from "./TicketImage";
import Test from "./Test";

const useStyles  = makeStyles({
    root:{
        justifyContent: 'center',
        paddingTop: '20px',
    },
    component:{
        display: "flex",
        height: '280px',
        width: '100%'
    },
    firstcomponent:{
        width: '50%',
        height: "100%",
        border: '1px solid black',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    },
    // middlecomponent:{
    //     // borderLeft: `1px solid black`,
    //     width: '25%',
    //     height: '100%'
    // },
    secondcomponent:{
        borderLeft: `1px solid black`,
        width: '50%',
        height: "100%",
        fontFamily: "Cursive",
        fontSize: "40px",
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    }
})

const Ticket =()=> {

    const [croppedImage, setCroppedImage] = useState(null);

    const classes = useStyles();

    return(
        <Box>
    <Box className={classes.root}
      sx={{
        display: 'flex',
        '& > :not(style)': {
          m: 1,
          width: 990,
          height: 280,
        },
      }}
    >
      <Paper elevation={6} >
          <Box className={classes.component}>
              <Box className={classes.firstcomponent}>
                  <TicketImage croppedImage={croppedImage} setCroppedImage={setCroppedImage} />
                  {/* <FileUploadComponent /> */}
              </Box>
              <Box className={classes.secondcomponent} >
              {    
              croppedImage==null?<Typography style={{fontWeight: '800',fontFamily: 'cursive',fontSize: '22px'}} > 👈 Your cropped Image will appear here</Typography>:
              <Box>
                  <Typography style={{fontWeight: '800',fontFamily: 'cursive',fontSize: '24px'}} > Your Cropped Image is Ready 😊</Typography>
                  <a style={{textDecorationLine: 'none'}} href={croppedImage} download><Button variant="contained">Click here to download</Button></a>
              </Box>
              }
              </Box>
          </Box>
      </Paper>
    </Box>
    </Box>
  );
}

export default Ticket;