const uuid = require("uuid");
const path = require('path');
const mongoose = require('mongoose');
const md5 = require('crypto-md5');
const data = require('../models/data-index.model');
const { uploadFiles_func, updateFiles_func } = require('../utils/upload-file');
const { apendFiles_func } = require('../utils/upload-file');
const { getData_db } = require('../utils/database');
const { getDatatType } = require('../utils/get-data-type');
const { deleteFIle_func, deleteFIle_single_func } = require('../utils/delete-file')
const { responseFormat, responseFormat_data_index, responseErrFormat, dataFormat } = require('../utils/response-format')


// VIEWS HERE ==================================================================================================================
// =============================================================================================================================
const getData = (req, res) => {
    try {
        console.log({ status: res.status, message: "success" });

        if (res.ok) throw new Error()

        else return res.render('get_data')

    } catch (error) {

        res.json({ err: error, status: res.status, message: "Error" })

    }
}

const viewGetdata = (req, res) => {
    try {
        console.log({ status: res.status, message: "success" });


        if (res.ok) throw new Error()

        else return res.send('gggggggggg')

    } catch (error) {

        res.json({ err: error, status: res.status, message: "Error" })

    }
}

const updatetData = (req, res) => {
    try {
        console.log({ status: res.status, message: "success" });


        if (res.ok) throw new Error()

        else return res.render('update_data')

    } catch (error) {

        res.json({ err: error, status: res.status, message: "Error" })

    }
}

const viewUpdateData = (req, res) => {
    try {
        console.log({ status: res.status, message: "success" });


        if (res.ok) throw new Error()

        else return res.render('update_data')

    } catch (error) {

        res.json({ err: error, status: res.status, message: "Error" })

    }
}

const viewInputData = (req, res) => {
    try {
        console.log({ status: res.status, message: "success" });


        if (res.ok) throw new Error()

        else return res.render('input_data')

    } catch (error) {

        res.json({ err: error, status: res.status, message: "Error" })

    }
}

const viewSearchData = (req, res) => {
    try {
        console.log({ status: res.status, message: "success" });

        if (res.ok) throw new Error()

        else return res.render('view_search_data')

    } catch (error) {

        console.log({ err: error, status: res.status, message: "Error" });
        res.json({ err: error, status: res.status, message: "Error" })

    }
}

// CONTROLLERS =================================================================================================================
// GET =========================================================================================================================
// 1. Find data index returns index with "index id" req parameters
// 2. Find data, retuns all data with "index id" req parameters
// 3. Update Insert data with "index id" and "data id" req parameters

// 1. Find data index returns index with "index id" req parameters
//    Route: /get/index/:index_id
const findData_index = async (req, res) => {

    try {

        // Request parameters
        const index_id = req.params.index_id;
        console.log(index_id);

        const getData = await data.findOne({ _id: index_id })
        console.log(getData);

        // Check if datat exists 
        if (!getData) throw "data index does not exists.";
        res.json(
            responseFormat_data_index(
                res_status = "Success", // Response Status
                message = "successfully retrieved data", // Response Message
                getData
            )
        );

    } catch (error) {
        res.status(500).json({
            staus: "fail",
            error
        })

    }


}

// 1. Find data index returns index with "index id" req parameters
//    Route: /get/index/type/:data_type
const findData_index_type = async (req, res) => {

    try {
        // Request parameters
        const index_id = req.params.index_id;
        const dataType = req.params.data_type;
        console.log("dataType");
        console.log(dataType);

        const getData = await data.find({ data_type: "jpeg" })

        // Check if datat exists 
        if (!getData) throw "data index does not exists.";
        res.json(
            responseFormat_data_index(
                res_status = "Success", // Response Status
                message = "successfully retrieved data", // Response Message
                getData
            )
        );

    } catch (error) {
        res.status(500).json({
            staus: "fail",
            error
        })

    }


}

// 2. Find data, retuns all data with "index id" req parameters
//    Route: /get/index/data/:index_id
const findData = async (req, res) => {

    try {

        // Request parameters
        const index_id = req.params.index_id;

        const getIndexData = await data.findOne({ _id: index_id });
        const dataType = getDatatType(getIndexData.data_type);
        const getData = await getData_db(index_id, dataType);

        // Check if datat exists 
        if (!getData) throw "data index does not exists.";
        res.json(
            responseFormat_data_index(
                res_status = "Success", // Response Status
                message = "successfully retrieved " + dataType + "  data", // Response Message
                dataType,
                getData
            )
        );

    } catch (error) {
        res.status(500).json(responseErrFormat(
            staus = "fail", // status
            error // Error message

        ))
    }
}

// 1. Find data index returns index with "index id" and "data id" req parameters
//    Route: /get/index/data/:index_id
const findData_file = async (req, res) => {

    try {

        // Request parameters
        const index_id = req.params.index_id;
        const file_id = req.params.file_id;

        const getIndexData = await data.findOne({ _id: index_id });
        const dataType = getDatatType(getIndexData.data_type);
        const getData = await getData_db(index_id, file_id, dataType);

        // Check if datat exists 
        if (!getData) throw "data index does not exists.";
        res.json(
            responseFormat_data_index(
                res_status = "Success", // Response Status
                message = "successfully retrieved " + dataType + "  data", // Response Message
                dataType,
                getData
            )
        );

    } catch (error) {
        res.status(500).json(responseErrFormat(
            staus = "fail", // status
            error // Error message

        ))
    }
}


// POST ========================================================================================================================
// 1. Upload data
// 2. Append group data using "index id" req parameters.
// 3. Update data using "index id" req parameters.
// 4.Delete all data,data index, image/video/document files "index id" req parameters.
// 5. Delete data

// 1. Upload data 
//    Data: text, Files(images, video(mp4), word docs, pdf).
//    Route: /post
const inputData = async (req, res) => {

    // generate ID (Mongoose id object)
    const mongooseObj_Id = mongoose.Types.ObjectId();
    const index_id = mongoose.Types.ObjectId();

    // Request body
    const { data_title, data_text } = req.body;
    const data_file = req.files.data_file;
    const user_id = mongooseObj_Id;

    // Get data type 
    var data_type = "";
    if (data_file.length > 0) data_type = data_file[0].mimetype.split("/")[1];
    else data_type = data_file.mimetype.split("/")[1];

    // Sort  dta single or grouped
    var group_Id = md5("single")
    if (data_file.length > 0) group_Id = uuid.v4();

    //Upload count
    var data_count = 1;
    if (req.files.length > 0) {
        data_count = req.files.length;
    }

    try {
        //  1. Check file Exists
        const dataExists = await data.findOne({ data_title: data_title });
        if (dataExists) throw "Data dalready exist";

        // 2. Upload files 
        // Upload file fucntion
        if (!data_file) throw "no ffile uploaded !";

        // Upload fucntion
        uploadFiles_func(
            user_id,  // User Id
            index_id, // Index Id
            group_Id, //group id
            data_file, // Uploaded file data
            data_title // Data title
        );

        // 3. Create dat object and save to database
        // Save mongoose data object
        if (uploadFiles_func) {
            // New  mongoose data object
            const newData = new data({
                _id: index_id,
                data_title,
                user_id,
                group_Id,
                data_type,
                data_count,
                data_status: "published"
            });

            // Save data 
            await newData.save(function (error, result) {

                if (error) throw error;

                // Json response format 
                res.json(responseFormat(
                    res_status = "Success", // Response Status
                    message = "successfully saved data", // Response Message
                    data_title, // Data title
                    user_id, // USer Id
                    group_Id, // Data group Id
                    data_type, // Data Type
                    data_count, // Data Count
                    data_status = "published")) // Data status
            })
        }


    } catch (error) {
        res.status(500).json({
            staus: "fail",
            error
        })

    }


}

// 2. Append group data using "index id" req parameters.
//    Add dtat to exisiting grouped data 
//    Route: /append/:index_id
const appendGroupData = async (req, res) => {
    try {

        // Request parameters
        const index_id = req.params.index_id;

        // Request body
        const data_file = req.files.data_file;
        if (!data_file) throw "No files  uploaded";

        // Check request parameters 
        if (!index_id && !file_id) throw "No request paramaratesrs found";

        // Check if index exists 
        const dataIndex = await data.findOne({ _id: index_id });
        if (!dataIndex) throw "Data does not exist";

        // Upload file fucntion
        apendFiles_func(
            index_id, // Index Id
            data_file, // Uploaded file data
        );

        if (apendFiles_func) {

            // Json response  
            res.json(responseFormat(
                res_status = "Success", // Response Status
                message = "successfully Apended", // Response Message
                "dataIndex.data_title", // Data title
                user_id = dataIndex.user_id, // USer Id
                group_Id = dataIndex.group_Id, // Data group Id
                data_type = dataIndex.data_type, // Data Type
                data_count = dataIndex.data_count, // Data Count
                data_status = dataIndex.data_status
            )) // Data status

        }




    } catch (error) {
        res.status(500).json(responseErrFormat(
            staus = "fail", // status
            error // Error message

        ))
    }

}

// 3. Update data using "index id" req parameters.
//    Data: text, Files(images, video(mp4), word docs, pdf).
//    Route: /update/:index_id/:file_id
const updateData = async (req, res) => {

    // Request parameters
    const index_id = req.params.index_id;
    const file_id = req.params.file_id;

    // Request body
    const { data_title, data_text, data_status } = req.body;
    const data_file = req.files.data_file;


    // Check request parameters 
    if (!index_id && !file_id) throw "No request paramaratesrs found";

    // Check if index exists 
    const dataIndex = await data.find({ _id: index_id });
    if (!dataIndex) throw "Data does not exist";


    // Check if uploaded exists 
    if (data_file) {

        // Then
        // Upload file
        updateFiles_func(
            file_id,
            user_id = dataIndex.user_id,  // User Id
            index_id, // Index Id
            data_file, // Uploaded file data
            data_title // Data title
        );

    } else throw "No file uploaded";

    // Update index
    await data.findOne({ _id: index_id })
        .then(oldData => {
            oldData.data_title = data_title,
                oldData.data_count = oldData.data_count,
                oldData.data_status = data_status,
                oldData.save(function (error, result) {

                    if (error) throw error;

                    res.json(responseFormat(
                        res_status = "Success", // Response Status
                        message = "successfully Updated data", // Response Message
                        data_title, // Data title
                        oldData.user_id, // USer Id
                        oldData.group_Id, // Data group Id
                        oldData.data_type, // Data Type
                        oldData.data_count, // Data Count
                        data_status // Data status
                    ))
                })
        })
    try {

    } catch (error) {
        res.status(500).json(responseErrFormat(
            staus = "fail", // status
            error // Error message

        ))
    }
}

// 4. Delete all data,data index, image/video/document files "index id" req parameters.
//    Route: /delete/:index_id
//   + Delete index 
//   + Delete uploaded files 
//   + Delete index 
const deleteAllData = async (req, res) => {

    try {

        // Request parameters
        const index_id = req.params.index_id;

        // Check request parameters 
        if (!index_id) throw "No request paramaratesrs found";

        // Check if index exists 
        const dataIndex = await data.find({ _id: index_id });
        if (!dataIndex) throw "Data does not exist";

        // Deklete file function
        deleteFIle_func(index_id)

        if (deleteFIle_func) {

            // Delete index 
            await data.findByIdAndDelete(index_id)

            res.json(responseFormat(
                res_status = "Success", // Response Status
                message = "successfully Deleted All data.", // Response Message
                dataIndex.data_title, // Data title
                dataIndex.user_id, // USer Id
                dataIndex.group_Id, // Data group Id
                dataIndex.data_type, // Data Type
                dataIndex.data_count, // Data Count
                dataIndex.data_status // Data status
            ))

        }

    } catch (error) {
        res.status(500).json(responseErrFormat(
            staus = "fail", // status
            error // Error message

        ))
    }

}

// 5. Delete data image/video/document files by index.
//    Route: /delete/:index_id/:file_id
//    + get gourp data via index id
//    + get grouped data ids 
//    + Delete group data
const deleteData = async () => {

    try {

        // Request parameters
        const index_id = req.params.index_id;
        const data_id = req.params.file_id;

        // Check request parameters 
        if (!index_id) throw "No request paramaratesrs found";

        // Check if index exists 
        const dataIndex = await data.find({ _id: index_id });
        if (!dataIndex) throw "Data does not exist";

        // Deklete file function
        deleteFIle_single_func(index_id, data_id)

        if (deleteFIle_single_func) {

            res.json(responseFormat(
                res_status = "Success", // Response Status
                message = "successfully deleted data", // Response Message
                dataIndex.data_title, // Data title
                dataIndex.user_id, // USer Id
                dataIndex.group_Id, // Data group Id
                dataIndex.data_type, // Data Type
                dataIndex.data_count, // Data Count
                dataIndex.data_status // Data status
            ))

        }

    } catch (error) {
        res.status(500).json(responseErrFormat(
            staus = "fail", // status
            error // Error message

        ))
    }

}

//  Update user password.
const getMedia_url = (req, res) => {

    console.log('Get media endpoint was hit')

    res.sendFile(path.join(__dirname + '../../assets/imgs/' + req.params.id + ''))
    console.log('Get image path was hit')


}

module.exports = {
    getData,
    viewGetdata,
    viewInputData,
    viewUpdateData,
    viewSearchData,
    
    findData,
    findData_file,
    findData_index,
    findData_index_type,

    inputData,
    appendGroupData,
    updateData,
    deleteAllData,
    deleteData,

    getMedia_url
}