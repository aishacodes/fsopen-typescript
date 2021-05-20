import express, {json} from 'express';
import {calculateBmii} from './Calculator';
import calculateExercise from "./calculateExercise";
const app = express();


app.use(json());
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
app.post("/webExercise", (req, res)=>{
    const {daily_exercises:ex, target:t }= req.body;

    if(!t || !ex)  res.json({error: "malformatted parameters"});
 
   const result= calculateExercise(t,ex);

    res.json(result);

});

const PORT = 3030;

app.listen(PORT, ()=>{
    console.log(`server is running on port ${PORT}`);

});
