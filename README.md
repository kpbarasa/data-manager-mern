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
#### 1.1 documents 
##### 1.1.2 docs 
##### 1.1.3 pdf 
   
#### 1.1 images
#### 1.2 videos
    
## 2. Handlers/
#### 2.1 errorHandlers.js
    
Handler: (catchErrors) Catch Errors Handler <br>
Desc:  catch url string errors
    
Handler: (mongoseErrors) MongoDB Validation Error Handler <br>
Desc:  Detect if there are mongodb validation errors that we send them nicely back.
    
Handler:  (developmentErrors) Development Error Handler <br>
Desc:  In development we show good error messages so if we hit a syntax error or any other previously un-handled error, we can show good info on what happened

Handler:  (productionErrors) No stacktraces and error details are leaked to user <br>
Desc:  No stacktraces and error details are leaked to user

Handler:  notFound <br>
Desc:   404 Page Error
    
    
## 3. Middleware.js:
    
Handler:  notFound <br>
Desc:   404 Page Error
    
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
#### 8.1 database.js:
#### 8.1 delete-file.js:
#### 8.1 get-data-type.js:
#### 8.1 response-format.js:
#### 8.1 upload-file.js:
    
## 9. Views.js:
## 10. .env.js:

      ```
      ATLAS_URI=mongodb+srv://<UserName>:<password>.4p1ws.mongodb.net/myFirstDatabase?retryWrites=true&w=majority
      DEV_PORT=5000
      productionPort = 8000
      ```
      
      
## 11. gitignore.js:
## 12. Server.js:







