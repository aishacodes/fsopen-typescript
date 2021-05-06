import express, {json} from 'express';
import {calculateBmii} from './Calculator';
import calculateExercise from "./calculateExercise"
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
    console.log(req.body)
    const r = req.body.target
    const ex = req.body.daily_exercises
    console.log(r)
   const result= calculateExercise(r,ex)

    res.json(result)

})

const PORT = 3030;

app.listen(PORT, ()=>{
    console.log(`server is running on port ${PORT}`);

});
