
import ReactCrop from "react-image-crop";
import 'react-image-crop/dist/ReactCrop.css'
import {useState} from "react";
import { Box } from '@mui/material';


// const getCroppedImg = async (image,crop,setCroppedImage) => {
//     try {
//         const canvas = document.createElement("canvas");
//         const scaleX = image.naturalWidth / image.width;
//         const scaleY = image.naturalHeight / image.height;
//         canvas.width = crop.width;
//         canvas.height = crop.height;
//         const ctx = canvas.getContext("2d");
//         ctx.drawImage(
//             image,
//             crop.x * scaleX,
//             crop.y * scaleY,
//             crop.width * scaleX,
//             crop.height * scaleY,
//             0,
//             0,
//             crop.width,
//             crop.height
//         );

//         const base64Image = canvas.toDataURL("image/jpeg", 1);

//         setCroppedImage(base64Image);

//     } catch (e) {
//         console.log("crop the image");
//     }
// };



const ImageCrop = (props)=> {

    const {imageToCrop, croppedImage, setCroppedImage} = props;
    const [crop, setCrop] = useState({aspect: 16 / 9});



    return(
        <Box>
            
        </Box>

    )
}

export default ImageCrop;