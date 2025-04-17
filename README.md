 npm -v             // 10.9.0
 node -v         // check the node version my node version v18.17.1
 npm install   // for install node_modules
 npm start    // for run this project

 Rest API Get List of product Stock 
 
1) GET : http://localhost:8000/api/v1/inventory/stock
2) POST: http://localhost:8000/api/v1/inventory/transaction
    Body:
    {
    "product":"Apple Phone",
    "quantity":2,
    "type":"return"    //pass type sale, purchase, return 
    }

