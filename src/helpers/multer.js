import multer from "multer"
import path from "path"

 const upload = multer({
     storage: multer.diskStorage({}),
    
 filename:(req, file, cb) =>{
    cb(null, new Date().toISOString() + file.originalname);
  },
  
 fileFilter: (req,file,cb)=>{
 let ext = path.extname(file.originalname)
  if(ext !=='.jpeg'&& ext !=='.jpg' && ext !== '.png'){
  cb(new Error('un supported format'),false)
  return
  }
  cb(null, true)
 }
});

export default upload