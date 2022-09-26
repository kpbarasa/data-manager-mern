const getDatatType = (dataType) =>{
    console.log(dataType);
    if(dataType === "mp4") return "video" ;
    else if(dataType === "jpeg" || dataType === "jpg" || dataType === "png" || dataType === "jpeg") return "image" ;
    else if(dataType === "jpeg") return "image" ;
    else if(dataType === "docx") return "document";
    else if(dataType === "vnd.openxmlformats-officedocument.wordprocessingml.document") return "document";
    else if(dataType === "pdf") return "pdf" ;
    else throw "Data format not found !";
}

const getStrgLoc = (fileType) =>{
    if(fileType === "video") return "videos/" ;
    else if(fileType === "image" ) return "images/" ;
    else if(fileType === "document") return "documents/docs/" ;
    else if(fileType === "pdf") return "documents/pdf/" ;
    
}

const checkFileSize = (file_type, data_file) => {
    if (file_type === "image" && data_file.size > 1000000) throw "Upload exeeds maximum  image file size 1mb";

    if (file_type === "video" && data_file.size > 10000000) throw "Upload exeeds maximum video file size 10mb";

    if (file_type === "document" && data_file.size > 2000000) throw "Upload exeeds maximum document file size 2mb";

    if (file_type === "pdf" && data_file.size > 2000000) throw "Upload exeeds maximum pdf file size 2mb";
}

module.exports = {getStrgLoc, getDatatType, checkFileSize};