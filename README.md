https://coursetro.com/posts/code/84/Setting-up-an-Angular-4-MEAN--Stack-%28Tutorial%29%29

1. Install sublime:   https://www.sublimetext.com/3
2. Install node:      https://nodejs.org/en/ 
   Check version:     node -v 

3. Install angular:   npm install @angular/cli -g
4. Create new project: 
        ng new <project name>
        cd <project name>
        ng build 

4. Install expres.js: npm install express body-parser --save
5. Install mongo:     https://www.mongodb.org/dl/win32/i386
6. Start mongo:       
   path to mongo: C:\Program Files\MongoDB\Server\3.4\bin\mongod.exe

   mongod --dbpath C:\projects\Mean\data --storageEngine=mmapv1

7. Create database:

   use mean
   db.users.insert({"name":"John Doe"})

8. install mongo package: 

   npm install mongodb --save

9. Debug node.js:
   
   run node in inspect mode:  node --inspect server/server
   in chrome:                 chrome://inspect/#devices

10. Start node server:  node server/server

11. Start node server in watch mode:

    npm install -g nodemon
    nodemon ./server/server.js --watch ../
    nodemon ./server/server.js --watch ../ --inspect    in inspect mode

12. Build project: 
    
    ng build
    npm run build
    ng build -op dist -wg     build with watch

    


                

   