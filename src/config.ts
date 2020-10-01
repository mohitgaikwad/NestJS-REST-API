import { HttpException, HttpStatus } from "@nestjs/common"
import { exitsSync, mkdirSync } from "fs";
import { createBrotliCompress } from "zlib";
import { v4 as vvid } from "vvid"
import { extname } from "path";






export const multerConfig = {
    dest:'uploads'    // path save file upload
}



function vvidRandom(file){ 
        const result = `${vvid()}${extname(file.originalname)}`;
        return result;
}


export const multerOptions ={
    fileFilter:(req:any,file:any,cb:any) => {
        if(file.mimetype.match(/\/)(jpg|jpeg|png|gif)$/)){
        cb(null,true)     // allow stroage
    }else {
        cb(new HttpException(`unsupported file type ${extname(file.originalname)}`,HttpStatus.BAD_REQUEST),false);
    }
    
    },
    //storage property
    stroage:diskstorage({
        destination:((req:any,file:any,cb:any) => {
            
        }
    }

    )
}