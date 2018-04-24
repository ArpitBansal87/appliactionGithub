# appliactionGithub

The following steps need to be followed for starting the project:

  1. Start cmd (let's call it CMD-MongoDB)
  2. In CMD-MongoDB enter the following text "mongod --dbpath D:\MongoDB\data\"

  Now the MongoDB has started with the path mentioned above

  3. Start another cmd(we will call it CMD-node)
  4. navigate to the location the code is kept in
  5. (Conditional) If this is the first time the project is being initialized or there have been any changes to the package.json then enter the following command: "npm install".

  The dependencies will be installed/fetched by npm and saved in node_modules

  6. enter the following command after the above command has finished executing: node index.js

  This will lead to execution of the node program inside index.js 

  Optional (for initializing mongo shell)
  7. Start 2nd cmd (we will call it CMD-MongoShell)
  8. In CMD-MongoShell enter the following text "mongo"

  The mongo shell will be initialized after this.
