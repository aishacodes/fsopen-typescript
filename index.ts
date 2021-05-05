import express from 'express';
import {calculateBmii} from './Calculator';
const app = express();




app.get("/hello", (_req, res)=>{
    res.send("Hello Full Stack! ");
});

app.get("/bmi", (req, res)=>{
    const h = Number(req.query.height);
    const w = Number(req.query.weight);

    if(!h || !w)  res.json({error: "malformatted parameters"});
 
    calculateBmii(h,w);
    
    res.json({weight:w, height:h, bmi:calculateBmii(h,w)});
});

const PORT = 3030;

app.listen(PORT, ()=>{
    console.log(`server is running on port ${PORT}`);

});
