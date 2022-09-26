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
#### documents/ 
+ /docs 
+ /pdf 
   
#### images/
#### videos/
    
## 2. Handlers/
#### (errorHandlers.js)
    
Handler 1: (catchErrors) Catch Errors Handler <br>
Desc:  catch url string errors
    
Handler 2: (mongoseErrors) MongoDB Validation Error Handler <br>
Desc:  Detect if there are mongodb validation errors that we send them nicely back.
    
Handler 3:  (developmentErrors) Development Error Handler <br>
Desc:  In development we show good error messages so if we hit a syntax error or any other previously un-handled error, we can show good info on what happened

Handler 4:  (productionErrors) No stacktraces and error details are leaked to user <br>
Desc:  No stacktraces and error details are leaked to user

Handler 5:  notFound <br>
Desc:   404 Page Error
    
    
## 3. Middleware.js:
####  (auth-post.middleware.js)
    
## 4. Server.js:
    
## 5. Modules/: 
+ data-index.model.js
+ data-index-videos.model.js
+ data-index-images.model.js
+ data-index-documents.model.js
   
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
+ database.js:
+ delete-file.js:
+ get-data-type.js:
+ response-format.js:
+ upload-file.js:
    
## 9. Views.js:
## 10. .env.js:

      ```
      ATLAS_URI=mongodb+srv://<UserName>:<password>.4p1ws.mongodb.net/myFirstDatabase?retryWrites=true&w=majority
      DEV_PORT=5000
      productionPort = 8000
      ```
      
      
## 11. gitignore.js:

      ```
      ./assets
      ./models
      ./package-lock.json
      ./package.json
      .env
      ```
## 12. Server.js:







