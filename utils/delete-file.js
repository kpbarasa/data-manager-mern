
const data_index = require('../models/data-index.model');
const data_documents = require('../models/data-index-documents.model');
const data_videos = require('../models/data-index-videos.model');
const data_images = require('../models/data-index-images.model');
const {getDatatType} = require('./get-data-type')
const { deleteData, deleteData_single } = require('./database')

const deleteFIle_func = async (index_id) => {

    const getData_index = await data_index.findOne({ _id: index_id})
    var dataType = getData_index.data_type;
    
    if (dataType === "vnd.openxmlformats-officedocument.wordprocessingml.document") {

        dataType = "document";

    }else{

        dataType = getDatatType(getData_index.data_type);

    }

    // Delete Fdata from db
    deleteData(index_id, dataType)

}



const deleteFIle_single_func = async (index_id, data_id) => {

    const getData_index = await data_index.findOne({ _id: index_id})
    var dataType = getData_index.data_type;
    
    if (dataType === "vnd.openxmlformats-officedocument.wordprocessingml.document") {

        dataType = "document";

    }else{

        dataType = getDatatType(getData_index.data_type);

    }

    // Delete Fdata from db
    deleteData_single(data_id, dataType)

}



module.exports = { deleteFIle_func, deleteFIle_single_func };