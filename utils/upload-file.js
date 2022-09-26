const uuid = require("uuid");
const moment = require('moment');
const fs = require('fs');
const data_index = require('../models/data-index.model');
const data_documents = require('../models/data-index-documents.model');
const data_videos = require('../models/data-index-videos.model');
const data_images = require('../models/data-index-images.model');
const { saveImgTo_db, saveDocsTo_db, saveVidsTo_db, updateImg, updateDocs, updateVids } = require('./database')
const { getDatatType, getStrgLoc, checkFileSize } = require('./get-data-type');

const uploadFiles_func = async (user_id, data_index_id, data_group_id, data_file, data_title) => {

    const data_usr_id = user_id;
    const currentdate = moment().format('YYYYMMDD');

    //  Upload Multiple files 
    if (data_file.length > 1) {

        for (var i = 0; i < data_file.length; i++) {
            // Get file mime type
            var mime_ype = data_file[i].mimetype.split("/")[1];

            if (mime_ype === "vnd.openxmlformats-officedocument.wordprocessingml.document") {

                mime_ype = "docx";

            }

            // Get file mime type
            const file_type = getDatatType(mime_ype);

            // Check file size
            checkFileSize(file_type, data_file)

            // file title
            const fileInfo = data_usr_id + "-" + file_type + "-" + "g" + data_group_id + "-" + currentdate + '-' + data_title.replaceAll(' ', '-') + "." + mime_ype;

            // Get file location
            const fileLocation = getStrgLoc(file_type);

            // File path
            const filePath = "assets/" + fileLocation + fileInfo;

            // Palce files localy on server
            data_file[i].mv(filePath, function (err) {

                if (err) throw err;

            })

            // Save file datat to db 
            if (file_type === "image") {
                saveImgTo_db(
                    data_index_id, // Index Id
                    user_id, // user Id
                    data_group_id,  // Group Id
                    data_value = filePath, // image path
                    data_mime_type = file_type // Data type

                )
            }
            // Save file datat to db 
            else if (file_type === "video") {
                saveVidsTo_db(
                    data_index_id, // Index Id
                    user_id, // user Id
                    data_group_id,  // Group Id
                    data_value = filePath, // image path
                    data_mime_type = file_type // Data type

                )
            }
            // Save file datat to db 
            else if (file_type === "document") {
                saveDocsTo_db(
                    data_index_id, // Index Id
                    user_id, // user Id
                    data_group_id,  // Group Id
                    data_value = filePath, // image path
                    data_mime_type = file_type // Data type

                )
            }

        }
    }

    // Upload Single file 
    else {

        const data_group_id = "sinlge";

        // Get file mime type
        var mime_ype = data_file.mimetype.split("/")[1];

        if (mime_ype === "vnd.openxmlformats-officedocument.wordprocessingml.document") {

            mime_ype = "docx";

        }

        // Get file mime type
        const file_type = getDatatType(mime_ype);
        console.log(file_type);

        // Check file size
        checkFileSize(file_type, data_file)

        // file title
        const fileInfo = data_usr_id + "-" + file_type + "-" + "u" + "-" + currentdate + '-' + data_title.replaceAll(' ', '-') + "." + mime_ype;
        console.log(fileInfo);

        // Get file location
        const fileLocation = getStrgLoc(file_type);
        console.log(fileLocation);

        // File path
        const filePath = "assets/" + fileLocation + fileInfo;
        console.log(filePath);

        // Palce file localy on server
        data_file.mv(filePath, function (err) {

            if (err) throw err;

        })

        // Save file datat to db 
        if (file_type === "image") {
            saveImgTo_db(
                data_index_id, // Index Id
                user_id, // user Id
                data_group_id,  // Group Id
                data_value = filePath, // image path
                data_mime_type = file_type // Data type

            )
        }
        else if (file_type === "video") {
            saveVidsTo_db(
                data_index_id, // Index Id
                user_id, // user Id
                data_group_id,  // Group Id
                data_value = filePath, // image path
                data_mime_type = file_type // Data type

            )
        }
        else if (file_type === "document") {
            saveDocsTo_db(
                data_index_id, // Index Id
                user_id, // user Id
                data_group_id,  // Group Id
                data_value = filePath, // image path
                data_mime_type = file_type // Data type

            )
        }



    }

}


const apendFiles_func = async (data_index_id, data_file) => {

    const currentdate = moment().format('YYYYMMDD');

    const dataIndex_res = await data_index.findOne({ _id: data_index_id });
    console.log(dataIndex_res);
    const data_usr_id = dataIndex_res.user_id;
    const data_title = dataIndex_res.data_title;
    const user_id = dataIndex_res.user_id;
    const data_group_id = dataIndex_res.group_Id;

    //  Upload Multiple files 
    if (data_file.length > 1) {

        for (var i = 0; i < data_file.length; i++) {
            // Get file mime type
            var mime_ype = data_file[i].mimetype.split("/")[1];

            if (mime_ype === "vnd.openxmlformats-officedocument.wordprocessingml.document") {

                mime_ype = "docx";

            }

            // Get file mime type
            const file_type = getDatatType(mime_ype);

            // Check file size
            checkFileSize(file_type, data_file)

            // file title
            const fileInfo = data_usr_id + "-" + file_type + "-" + "g" + "-" + currentdate + '-' + data_title.replaceAll(' ', '-') + "." + mime_ype;

            // Get file location
            const fileLocation = getStrgLoc(file_type);

            // File path
            const filePath = "assets/" + fileLocation + fileInfo;

            // Palce files localy on server
            data_file[i].mv(filePath, function (err) {

                if (err) throw err;

            })

            // Save file datat to db 
            if (file_type === "image") {
                saveImgTo_db(
                    data_index_id, // Index Id
                    user_id, // user Id
                    data_group_id,  // Group Id
                    data_value = filePath, // image path
                    data_mime_type = file_type // Data type

                )
            }
            // Save file datat to db 
            else if (file_type === "video") {
                saveVidsTo_db(
                    data_index_id, // Index Id
                    user_id, // user Id
                    data_group_id,  // Group Id
                    data_value = filePath, // image path
                    data_mime_type = file_type // Data type

                )
            }
            // Save file datat to db 
            else if (file_type === "document") {
                saveDocsTo_db(
                    data_index_id, // Index Id
                    user_id, // user Id
                    data_group_id,  // Group Id
                    data_value = filePath, // image path
                    data_mime_type = file_type // Data type

                )
            }

        }
    }

    // Upload Single file 
    else {

        // Get file mime type
        var mime_ype = data_file.mimetype.split("/")[1];

        if (mime_ype === "vnd.openxmlformats-officedocument.wordprocessingml.document") {

            mime_ype = "docx";

        }

        // Get file mime type
        const file_type = getDatatType(mime_ype);

        // Check file size
        checkFileSize(file_type, data_file)

        // file title
        const fileInfo = data_usr_id + "-" + file_type + "-" + "g" + "-" + currentdate + '-' + data_title.replaceAll(' ', '-') + "." + mime_ype;


        // Get file location
        const fileLocation = getStrgLoc(file_type);

        // File path
        const filePath = "assets/" + fileLocation + fileInfo;
        console.log(filePath);

        // Palce file localy on server
        data_file.mv(filePath, function (err) {

            if (err) throw err;

        })

        // Save file datat to db 
        if (file_type === "image") {
            saveImgTo_db(
                data_index_id, // Index Id
                user_id, // user Id
                data_group_id,  // Group Id
                data_value = filePath, // image path
                data_mime_type = file_type // Data type

            )
        }
        else if (file_type === "video") {
            saveVidsTo_db(
                data_index_id, // Index Id
                user_id, // user Id
                data_group_id,  // Group Id
                data_value = filePath, // image path
                data_mime_type = file_type // Data type

            )
        }
        else if (file_type === "document") {
            saveDocsTo_db(
                data_index_id, // Index Id
                user_id, // user Id
                data_group_id,  // Group Id
                data_value = filePath, // image path
                data_mime_type = file_type // Data type

            )
        }



    }

}


const updateFiles_func = async (file_id, user_id, data_index_id, data_file, data_title) => {

    const data_usr_id = user_id;
    const currentdate = moment().format('YYYYMMDD');

    //  Update Multiple files 
    if (data_file.length > 1) {

        const data_group_id = uuid.v4();

        for (var i = 0; i < data_file.length; i++) {
            // Get file mime type
            var mime_ype = data_file[i].mimetype.split("/")[1];

            if (mime_ype === "vnd.openxmlformats-officedocument.wordprocessingml.document") {

                mime_ype = "docx";

            }

            // Get file mime type
            const file_type = getDatatType(mime_ype);

            // Check file size
            checkFileSize(file_type, data_file)

            // file title
            const fileInfo = data_usr_id + "-" + file_type + "-" + "g" + i + "-" + data_group_id + "-" + currentdate + '-' + data_title.replaceAll(' ', '-') + "." + mime_ype;

            // Get file location
            const fileLocation = getStrgLoc(file_type);

            // File path
            const filePath = "assets/" + fileLocation + fileInfo;

            // Palce files localy on server
            data_file[i].mv(filePath, function (err) {

                if (err) throw err;

            })

            // Save file datat to db 
            if (file_type === "image") {
                saveImgTo_db(
                    data_index_id, // Index Id
                    user_id, // user Id
                    data_group_id,  // Group Id
                    data_value = filePath, // image path
                    data_mime_type = file_type // Data type

                )
            }
            // Save file datat to db 
            else if (file_type === "video") {
                saveVidsTo_db(
                    data_index_id, // Index Id
                    user_id, // user Id
                    data_group_id,  // Group Id
                    data_value = filePath, // image path
                    data_mime_type = file_type // Data type

                )
            }
            // Save file datat to db 
            else if (file_type === "document") {
                saveDocsTo_db(
                    data_index_id, // Index Id
                    user_id, // user Id
                    data_group_id,  // Group Id
                    data_value = filePath, // image path
                    data_mime_type = file_type // Data type

                )
            }

        }
    }

    // Update Single file 
    else {

        const data_group_id = "sinlge";

        // Get file mime type
        var mime_ype = data_file.mimetype.split("/")[1];
        if (mime_ype === "vnd.openxmlformats-officedocument.wordprocessingml.document") {

            mime_ype = "docx";

        }

        // Get file mime type
        const file_type = getDatatType(mime_ype);

        // Check file size
        checkFileSize(file_type, data_file)

        // file title
        const fileInfo = data_usr_id + "-" + file_type + "-" + "u" + "-" + currentdate + '-' + data_title.replaceAll(' ', '-') + "." + mime_ype;

        // Get file location
        const fileLocation = getStrgLoc(file_type);

        // File path
        const filePath = "assets/" + fileLocation + fileInfo;

        // Replace exisiting file  function
        const replaceExistingFile = async (get_file) => {

            if (get_file) {

                // Delete a file
                fs.unlink(get_file.data_value, (err) => {
                    if (err) {
                        throw err;
                    }

                });

                // Palce file localy on server
                data_file.mv(get_file.data_value, function (err) {

                    if (err) throw err;

                });

            }

        }

        // Save file datat to db 
        if (file_type === "image") {

            // Get file information
            const get_file = await data_images.findOne({ _id: file_id });

            // Replace exisiting file  function
            replaceExistingFile(file_id, get_file)

            updateImg(
                data_image_id = file_id, // File Id
                data_index_id, // Index Id
                user_id, // user Id
                data_group_id,  // Group Id
                data_value = filePath, // image path
                data_mime_type = file_type // Data type

            )
        }
        else if (file_type === "video") {

            // Get file information
            const get_file = await data_videos.findOne({ _id: file_id });

            // Replace exisiting file  function
            replaceExistingFile(file_id, get_file)

            updateVids(
                file_id, // File Id
                data_value = filePath, // image path
                data_mime_type = mime_ype // Data type

            )
        }
        else if (file_type === "document") {

            // Get file information
            const get_file = await data_documents.findOne({ _id: file_id });

            // Replace exisiting file  function
            replaceExistingFile(get_file)

            updateDocs(
                file_id, // File Id
                data_value = filePath, // image path
                data_mime_type = mime_ype // Data type

            )
        }

    }

}

module.exports = { uploadFiles_func, apendFiles_func, updateFiles_func };