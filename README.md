# M-Pesa
Data manager

<p>
    Simple mpesa back end API that exposses endpoints that allow for Mpesa transactions Customer to business(C2B).
</p>


# 1.NODE DEPENDENCIES 
<p>

<b>Dependencies:<b>

+  dotenv

+  ejs

+  express

+  express-fileupload

+  mongoose


<b>Dev dependencies:<b> 

+   nodemon

</p>


# 2 Git ignore files 

+  node_module

+  .env




# 3 env  

      ```
      ATLAS_URI=mongodb+srv://<UserName>:<password>.4p1ws.mongodb.net/myFirstDatabase?retryWrites=true&w=majority

      ```

## 4 Server.js:
####  Database connection string

```
const uri = process.env.ATLAS_URI;
mongoose.connect(uri, { 
  
useNewUrlParser: true, useUnifiedTopology: true 

},err => { 
      if(err){
        console.log('Error un able Connected to MongoDB!!!')
      }
      else{
        console.log('Connected to MongoDB!!!')
      }
    }
)

const connection = mongoose.connection;
connection.once('open', () => {
  console.log("MongoDB database connection established successfully"); 
})
```

# 5 APP COMPONENETS 
## 5 Models:
### 5.1 data_cat.model.js

```
Schema:
  cat_title: {
    type: String,
    required: true, 
    unique: true,
    index:{unique: true}
  }, 
  data_cat_parent: {
    type: String,
    required: true,  
  }, 
```

### 5.2 data_group.model.js

```
Schema:
  group_title: {
    type: String,
    required: true, 
    unique: true,
    index:{unique: true}
  },
  group_content: {
    type: String,
    required: true,  
  },
  data_group_type: {
    type: String,
    required: true,  
  }, 
```
### 5.3 data_type.model.js

```
Schema:
  category_title: {
    type: String,
    required: true, 
    unique: true,
    index:{unique: true}
  }, 
```
### 5.4 data.model.js

```
Schema:
  data_tittle: {
    type: String,
    required: true, 
    unique: true,
    index:{unique: true}
  },
  data_usr_id: {
    type: String,
    required: true,  
  },
  data_group_type: {
    type: String,
    required: true,  
  },
  data_description: {
    type: String, 
    required: true  
  },
  data_value: {
    type: String,
    required: true, 
    trim: true,
    minlength: 3
  },
  data_type: {
    type: String,
    required: true, 
    trim: true,
    minlength: 3
  },
  data_date: {
    type: Date,
    required: true, 
    trim: true,
    minlength: 3
  },
  data_status: {
    type: String,
    required: true, 
    trim: true,
    minlength: 3
  }, 
```

## 6 Views:

### 6.1 Partial Views:

#### 6.2 footer.ejs
Footer View 

#### 6.2 input_data.ejs
Input data view

#### 6.2 update_data.ejs
Update data view

### 6.2 get_data.ejs
View data

### 6.3 input_data.ejs
Input data view

#### 6.4 update_data.ejs
Edit data view

## 7 Controllers (data.js):
### 7.1 viewGetdata
   
      ```
      Response-:
            {

            } 
       
      ```

### 7.2 viewInputData
   
      ```
      Response-:
            {

            } 
       
      ```
### 7.3 viewUpdateData
   
      ```
      Response-:
            {

            } 
       
      ```
### 7.4 viewSearchData
   
      ```
      Response-:
            {

            } 
       
      ```
### 7.5 getData
   
      ```
      Response-:
            {

            } 
       
      ```
### 7.6 updateData
   
      ```
      Response-:
            {

            } 
       
      ```
### 7.7 getMedia
   
      ```
      Response-:
            {

            } 
       
      ```
### 7.8 updatetData
   
      ```
      Response-:
            {

            } 
       
      ```
### 7.9 inputData
   
      ```
      Response-:
            {

            } 
       
      ```
### 7.10 trashtData
   
      ```
      Response-:
            {

            } 
       
      ```
### 7.11 restoretData
   
      ```
      Response-:
            {

            } 
       
      ```
### 7.12 deletData
   
      ```
      Response-:
            {

            } 
       
      ```
### 7.13 uploadMedia
   
      ```
      Response-:
            {

            } 
       
      ```
### 7.14 retrieveData
   
      ```
      Response-:
            { 

            } 
       
      ```
### 7.15 findData
   
      ```
      Response-:
            {
            "_id": "61bb2bfd0e98b693c08ea222",
            "data_tittle": "test image single",
            "data_usr_id": "100001",
            "data_group_type": "data-single",
            "data_description": "test image single",
            "data_value": "100001-10001-test image single-0000000-media.jpeg",
            "data_type": "data-image",
            "data_date": "2021-12-16T12:07:25.706Z",
            "__v": 0,
            "data_status": "published" 
            } 
       
      ```


## 8 Routes

### 8.1 views (data.js) 
```
router.get('/', (getData))
Route: /
type: Get
Controller: getData
```
```
router.get('/view/post', (viewInputData))
Route: /get
type:Get
Controller: viewInputData
``` 
```
router.get('/view/update', (viewUpdateData))
Route: /view/update
type: Get
Controller: viewUpdateData
``` 

### 8.2 Routes (data.js)
```
router.get('/get', (retrieveData))
Route: /get
type: get
Controller: retrieveData
```
```
router.get('/find/:id', (findData))
Route: /find/:id
type: get
Controller: findData
```
```
router.post('/post', (inputData))
Route: /post
type: Post
Controller: inputData
```
```
router.post('/update', (updateData))
Route: /update
type: Post
Controller: updateData
```
```
router.get('/trash/:id', (trashtData))
Route: /trash/:id
type: Get
Controller: trashtData
```
```
router.get('/restore/:id', (restoretData))
Route: /restore/:id
type: Get
Controller: restoretData
```
```
router.post('/delete/:id', (deletData))
Route: /delete/:id
type: Post
Controller: deletData
```
### 8.2 Media (data.js)
```
router.get('/get/media/:id', (getMedia)) 
Route: /get/media/:id
type: Get
Controller: getMedia
```
```
router.post('/update/media/:id', (uploadMedia))
Route: /update/media/:id
type: Post
Controller: uploadMedia
```






