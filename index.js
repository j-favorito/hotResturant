// $( document ).ready(function() {

    const express=require("express");
    const app=express();
    const PORT= process.env.PORT || 8080
    const tableData = require("./api/tables") // api format of whats in our tables section
    const waitListData = require("./api/waitlist") // api format of whats in our waitlist sections
    let tables = []; //this will be forms pushing to tables if available
    let waitlist = []; //this will be forms pushing to waitlist if no tables available
    app.use(express.json());
    app.use(express.urlencoded({ extended: true }));
    app.use(express.static("public"));
    
    app.get("/", (req,res)=>{
        res.sendFile(__dirname + "/public/home.html");
    });
    
    app.get("/tables", (req,res)=>{
        res.sendFile(__dirname + "/public/table.html");
    });
    
    app.get("/reservation", (req, res)=>{
        res.sendFile(__dirname + "/public/reserve.html");
    });
    
    
    app.get("/api/tables", (req,res)=>{
        res.json(tableData);
    });
    
    app.get("/api/waitlist", (req,res)=>{
        res.json(waitListData)
    });

    
    
    
    app.listen(PORT,()=>{
        console.log(`Server running on port http://localhost:${PORT}`);
        console.log(`Server also running on port http://localhost:${PORT}/tables`);
        console.log(`Server also running on port http://localhost:${PORT}/reservation`);
        console.log(`Server also running on port http://localhost:${PORT}/tablesAPI`);
        console.log(`Server also running on port http://localhost:${PORT}/waitlistAPI`);
    })
    
    app.post("/api/tables",(req,res)=>{
        const newReserve=req.body;
        console.log(newReserve);
        tableData.push(newReserve);
        res.json(newReserve);
    })

// });
