interface Value{
    r:number,
    ex:Array<number>

}
const parseArg=(arg:Array<string>):Value=>{
      if (arg.length < 4) throw new Error("Not enough arguments");

    return{
        r: Number(arg[2]),
        ex: arg.slice(3).map(n=> Number(n))

    }
}

interface ExObj {
  periodLength: number;
  trainingDays: number;
  success: boolean;
  rating: number;
  ratingDescription: string;
  target: number;
  average: number;
}

const calculateExercise = (r: number, e: number[]): ExObj => {

const  trainingDays= e.filter((ex) => ex>0)
const avg = (e.reduce((acc, curr)=> acc+curr,0))/e.length

const success= avg>=r

const ratingDescription = success?"Good":"not too bad but could be better"

  return  {
  periodLength: e.length,
  trainingDays:  trainingDays.length,
  success,
  rating: r,
  ratingDescription,
  target: r,
  average: avg
}
};

try {
    const {r, ex}=parseArg(process.argv)
    console.log(calculateExercise( r, ex))

} catch (error) {
      console.log("Error, something bad happened, message: ", error.message);

}

