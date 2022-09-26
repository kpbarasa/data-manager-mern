# M-Pesa
Data manager

<p>
    Simple mpesa back end API that exposses endpoints that allow for Mpesa transactions Customer to business(C2B).
</p>


# 1. NODE DEPENDENCIES 
<p>

<b>Dependencies:<b>

+ "cors":
+ "crypto-md5"
+ "dotenv"
+ "ejs":
+ "express"
+ "express-fileupload"
+ "moment"
+ "mongoose"
+ "morgan"
+ "sharp"
+ "uuid"
+ "web-push"

<b>Dev dependencies:<b> 

+ nodemon

</p>

# 2. Git ignore files 
+ /assets
+ /models
+ /package-lock.json
+ /package.json
+ .env





# 3 APP COMPONENETS 

## 1. Assets/:
#### documents 
##### docs 
##### pdf 
   
#### images
#### videos
    
## 2. Handlers.js:
    
## 3. Middleware.js:
    
## 4. Server.js:
    
## 5. Modules/: 
#### 5.1 data-index.model.js
#### 5.1 data-index-videos.model.js
#### 5.1 data-index-images.model.js
#### 5.1 data-index-documents.model.js
   
## 7. Routes/:
#### 7.1 routes.js:
    
     ```
     type: /post
     Route: /post
     Controller: inputData
     ```
    
     ```
     type: /post
     Route: /update/:index_id/:file_id
     Controller: updateData
     ```
    
    
     ```
     type: /post
     Route: /append/:index_id
     Controller: appendGroupData
     ```
    
    
     ```
     type: /post
     Route: /post
     Controller: inputData
     ```
    
    
     ```
     type: /post
     Route: /delete/:index_id
     Controller: deleteAllData
     ```
    
    
     ```
     type: /post
     Route: /delete/:index_id/:file_id
     Controller: deleteData
     ```
    
## 8. Utils.js:
## 9. Views.js:
## 10. .env.js:

      ```
      ATLAS_URI=mongodb+srv://<UserName>:<password>.4p1ws.mongodb.net/myFirstDatabase?retryWrites=true&w=majority
      DEV_PORT=5000
      productionPort = 8000
      ```
      
      
## 11. gitignore.js:
## 12. Server.js:

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






