const express = require('express')
const fileUpload = require('express-fileupload');
const { catchErrors } = require("../handlers/errorHandler");

// CONTROLLERS ====================================================================================================
const {
      getData,
      viewInputData,
      viewUpdateData,
      viewSearchData,

      findData,
      findData_index,
      findData_index_type,
      findData_file,
      getMedia_url,
      
      inputData,
      updateData,
      appendGroupData,
      deleteAllData,
      deleteData,
} = require('../controllers/data')


// MIDDLEWARE ====================================================================================================
const authPost = require('../middleware/auth-post.middleware')
const router = express.Router()

// default options
router.use(fileUpload())

// views 
router.get('/', (getData))
router.get('/view/post', (viewInputData))
router.get('/view/update', (viewUpdateData))
router.get('/view/search', (viewSearchData))

// Post
router.post('/post', authPost, catchErrors(inputData))
router.post('/update/:index_id/:file_id', authPost, catchErrors(updateData))
router.post('/append/:index_id', authPost, catchErrors(appendGroupData))
router.get('/delete/:index_id', catchErrors(deleteAllData))
router.get('/delete/:index_id/:file_id', catchErrors(deleteData))

// Get
router.get('/get/index/:index_id', catchErrors(findData_index))
router.get('/get/index/type/:data_type', catchErrors(findData_index_type))
router.get('/get/index/data/:index_id', catchErrors(findData))
router.get('/get/index/data/:index_id', catchErrors(findData_file))

router.get('/get/media/:id', (getMedia_url))

module.exports = router;