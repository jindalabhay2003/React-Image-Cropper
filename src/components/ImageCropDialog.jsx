import React, { useState, useEffect } from "react";
import Cropper from "react-easy-crop"
import "../App.css"
import getCroppedImg from "./CropImage.js";

const aspectRatios = [
    { value: 4/3, text: "4/3" },
    { value: 16/9, text: "16/9" },
    { value: 1/2, text: "1/2" }
]

const ImageCropDialog = ({setDialogOpen,imageUrl,OnCancel,setCroppedImage }) => {

    const [aspectInit, setaspectInit] = useState(null);

    var zoomInit = 1;

    var cropInit = {
        x: 0,
        y: 0
    }

    if (aspectInit === null) {
        setaspectInit(aspectRatios[0]);
    }

    const [zoom, setzoom] = useState(zoomInit);
    const [crop, setcrop] = useState(cropInit);
    const [croppedAreaPixels, setCroppedAreaPixels] = useState(null);

    const onCropChange = (crop) => {
        setcrop(crop);
    }

    const onZoomChange = (zoom) => {
        setzoom(zoom);
    }

    const onCropComplete = (croppedArea,croppedAreaPixels)=>{
        setCroppedAreaPixels(croppedAreaPixels);

    }

    const OnCrop = async ()=>{
        const croppedImageUrl = await getCroppedImg(imageUrl,croppedAreaPixels);
        setCroppedImage(croppedImageUrl);
        setDialogOpen(false);
    }

    return (
        <div>
            <div className="backdrop" >
            </div>
            <div className="crop-container" >
                <Cropper 
                objectFit="contain"
                aspect={aspectRatios[1].value}
                image={imageUrl}
                zoom={zoom}
                crop={crop}
                onCropChange={onCropChange}
                onZoomChange={onZoomChange}
                onCropComplete={onCropComplete}
                />
            </div>
            <div className="controls" >
                <div className="controls-upper-area" >
                    <input className="slider" type="range" min={1} max={3} value={zoom} onInput={(e) => { onZoomChange(e.target.value) }} ></input>
                {/* <select >
                   {aspectRatios.map(ratio=>{
                       <option
                       key = {ratio.text}
                       value={ratio.value}
                       selected={ratio.value == aspectInit.value }
                       >
                        {ratio.text}  
                     </option>
                   })} 
                </select> */}
                </div>
                <div className="button-area">
                    <button onClick={OnCancel} >Cancel</button>
                    <button>Reset</button>
                    <button onClick={OnCrop} >Crop</button>
                    </div>
            </div>
        </div>
    )


}

export default ImageCropDialog;