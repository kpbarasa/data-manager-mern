
const data_documents = require('../models/data-index-documents.model');
const data_videos = require('../models/data-index-videos.model');
const data_images = require('../models/data-index-images.model');

// Get DATA
const getData_db = async (dat_index, file_id, dataType) => {

    if(!dat_index) throw "No data selected"

    if(file_id){

        if(dataType === "document"){
            const data = await data_documents.findOne({_id:file_id, data_index_id:dat_index})
        
            return data;
        }
        else if(dataType === "image"){
            const data = await data_images.findOne({_id:file_id, data_index_id:dat_index})
        
            return data;
        }
        else if(dataType === "video"){
            const data = await data_videos.findOne({_id:file_id, data_index_id:dat_index})
        
            return data;
        }

    }

    else {

        if(dataType === "document"){
            const data = await data_documents.find({data_index_id:dat_index})
        
            return data;
        }
        else if(dataType === "image"){
            const data = await data_images.find({data_index_id:dat_index})
        
            return data;
        }
        else if(dataType === "video"){
            const data = await data_videos.find({data_index_id:dat_index})
        
            return data;
        }

    }

}


// SAVE TO DB 
const saveImgTo_db = async (
    data_index_id,
    user_id,
    data_group_id,
    data_value,
    data_mime_type
) => {

    const newData = new data_images({
        data_index_id,
        user_id,
        data_group_id,
        data_value,
        data_mime_type
    });

    await newData.save(function (error, result) {
        if (error) throw error;
        console.log("image saved");
    })

}
const saveDocsTo_db = async (
    data_index_id,
    user_id,
    data_group_id,
    data_value,
    data_mime_type
) => {

    const newData = new data_documents({
        data_index_id,
        user_id,
        data_group_id,
        data_value,
        data_mime_type
    });

    await newData.save(function (error, result) {
        if (error) throw error;
        console.log("image saved");
    })

}
const saveVidsTo_db = async (
    data_index_id,
    user_id,
    data_group_id,
    data_value,
    data_mime_type
) => {

    const newData = new data_videos({
        data_index_id,
        user_id,
        data_group_id,
        data_value,
        data_mime_type
    });

    await newData.save(function (error, result) {
        if (error) throw error;
        console.log("image saved");
    })

}

// UPDATE DB 
const updateImg = async (
    file_id,
    data_value,
    data_mime_type
) => {

    data_images.findById({ _id: file_id })
        .then(
            update => {
                update.data_value = data_value
                update.data_mime_type = data_mime_type
                update.save(function (error, result) {
                    if (error) throw error;
                    console.log("Document updated");
                });

            })
        .catch(error => { if (error) throw error })

}
const updateDocs = async (
    file_id,
    data_value,
    data_mime_type
) => {
    console.log(file_id,
        data_value,
        data_mime_type);
    
    data_documents.findById(file_id)
        .then(
            update => {
                update.data_value = data_value
                update.data_mime_type = data_mime_type
                update.save(function (error, result) {
                    if (error) throw error;
                    console.log("Document updated");
                });

            })
        .catch(error => { if (error) throw error })

}
const updateVids = async (
    file_id,
    data_value,
    data_mime_type
) => {

    data_videos.findById({ data_index_id: file_id })
        .then(
            update => {
                update.data_value = data_value
                update.data_mime_type = data_mime_type
                update.save(function (error, result) {
                    if (error) throw error;
                    console.log("Document updated");
                });

            })
        .catch(error => { if (error) throw error })

}


//DELETE DB
const deleteData = async (index_id, data_type) => {

    if(data_type === "image"){
       
        const getDataImgs = data_images.find({ data_index_id: index_id })

        getDataImgs.map(res => {
            data_images.findByIdAndDelete(res._id)
            .then(() => console.log("All images deleted"))
        })

    }
    else if(data_type === "document"){
       
        const getDataDocs = await data_documents.find({ data_index_id: index_id })
        
        getDataDocs.map(async(res) => {
            data_documents.findByIdAndDelete(res._id)
            .then(() => console.log("All documents deleted"))
        })
        
    }
    if(data_type === "video"){
       
        const getDataVideo = data_videos.find({ data_index_id: index_id })
        
        getDataVideo.map(res => {
            data_videos.findByIdAndDelete(res._id)
            .then(() => console.log("All videos deleted"))
        })
        
    }
    
    // await data_documents.findByIdAndDelete(data_id)
    //     .catch(error => { if (error) throw error })

}

//DELETE DB
const deleteData_single = async (data_id, data_type) => {

    if(data_type === "image"){
             
        data_images.findByIdAndDelete(data_id)
        .then(() => console.log("All documents deleted"))

    }
    else if(data_type === "document"){
        
        data_documents.findByIdAndDelete(data_id)
        .then(() => console.log("All documents deleted"))
        
    }
    else if(data_type === "video"){
       
        
        data_videos.findByIdAndDelete(data_id)
        .then(() => console.log("all video deleted"))
        
    }
    
    // await data_documents.findByIdAndDelete(data_id)
    //     .catch(error => { if (error) throw error })

}

module.exports = { getData_db, saveImgTo_db, saveDocsTo_db, saveVidsTo_db, updateImg, updateDocs, updateVids, deleteData, deleteData_single };