import { Dialog } from "@mui/material";
import { Box } from "@mui/material";
import { Button } from "@mui/material";
import ImageCropper from "./ImageCrop";

const DialogCrop = ({dialogOpen, setDialogOpen,imageToCrop,croppedImage,setCroppedImage })=>{

    const handleclose = ()=>{
        setDialogOpen(false);
    }

    return(
        <Box>
        <Dialog
        open={dialogOpen}
        fullScreen
        >
            Helloooooooooooooooooo
         
        <ImageCropper
          imageToCrop={imageToCrop}
          croppedImage={croppedImage}
          setCroppedImage={setCroppedImage}
        />
        {croppedImage && (
        <div>
          <h2>Cropped Image</h2>
          <img alt="Cropped Img" src={croppedImage} />
        </div>
        )}
        <Button variant="outlined" onClick={handleclose} >Close</Button>

        </Dialog>
        </Box>
    )
}

export default DialogCrop;