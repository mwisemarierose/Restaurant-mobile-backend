import multer from "multer"

 const upload = multer({
     storage: multer.diskStorage({}),
    
 filename:(req, file, cb) =>{
    cb(null, new Date().toISOString() + file.originalname);
  },
  
 fileFilter: (req,file,cb)=>{
 let ext = file.originalname.split('.').pop()
  if(ext !=='jpeg'&& ext !=='jpg' && ext !== 'png'){
  cb(new Error('unsupported format'),false)
  return
  }
  cb(null, true)
 }
});

export default upload