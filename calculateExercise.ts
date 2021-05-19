interface Value{
    t:number,
    ex:Array<number>

}


  const parseArg=(arg:Array<string>):Value=>{
      if (arg.length < 4) throw new Error("Not enough arguments");

    return{
        t: Number(arg[2]),
        ex: arg.slice(3).map(n=> Number(n))

    };
};



interface ExObj {
  periodLength: number;
  trainingDays: number;
  success: boolean;
  rating: number;
  ratingDescription: string;
  target: number;
  average: number;
}

const calculateExercise = (t: number, e: number[]): ExObj => {

const  trainingDays= e.filter((ex) => ex>0);
const avg = (e.reduce((acc, curr)=> acc+curr,0))/e.length;

const success= avg>=t;

const ratingDescription = success?"Good":"not too bad but could be better";

  return  {
  periodLength: e.length,
  trainingDays:  trainingDays.length,
  success,
  rating: avg>=t? 3 :avg<t && avg >(t/2)?2:1 ,
  ratingDescription,
  target: t,
  average: avg
};
};

try {
    const {t, ex}=parseArg(process.argv);
    console.log(calculateExercise( t, ex));

} catch (error) {
      console.log("Error, something bad happened, message: ", error.message);

}

export= calculateExercise;