import express from "express";
const app = express();
app.get("/health", (_,res)=>res.json({ok:true}));
app.listen(3000, ()=>console.log("API on http://localhost:3000"));

app.get('/homepage', (req, res) => {
    res.send("welcome to the todoapp");
});

