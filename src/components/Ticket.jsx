import {Box, Typography, Paper} from "@mui/material";
import { makeStyles } from "@mui/styles";

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
    middlecomponent:{
        // borderLeft: `1px solid black`,
        width: '25%',
        height: '100%'
    },
    thirdcomponent:{
        borderLeft: `1px solid rgba(0,0,0,0.14)`,
        width: '25%',
        height: "100%"
    }
})

const Ticket =()=> {

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
                  <TicketImage />
                  {/* <FileUploadComponent /> */}
              </Box>
              <Box className={classes.middlecomponent}>
                  Abhay
              </Box>
              <Box className={classes.thirdcomponent}>
                  Jindal
              </Box>
          </Box>
      </Paper>
    </Box>
    </Box>
  );
}

export default Ticket;