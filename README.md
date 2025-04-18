 npm -v             // 10.9.0
 node -v         // check the node version my node version v18.17.1
 npm install   // for install node_modules
 npm start    // for run this project

 Rest API Get List of product Stock 
 
1)Create Stock in database. Change the product,quantity, price and run this api for create stock 
POST : http://localhost:8000/api/v1/inventory/stock{
  {
    "product":"Iphone",
    "quantity":"20",
    "price":29000
  }
2) Get List of product and stock
 GET : http://localhost:8000/api/v1/inventory/stock
3) POST: http://localhost:8000/api/v1/inventory/transaction
    Body:
    {
    "product":"Apple Phone",
    "quantity":2,
    "type":"return"    //pass type sale, purchase, return 
    }

