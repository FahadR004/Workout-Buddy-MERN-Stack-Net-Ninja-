import { useEffect, useState } from "react";
import WorkoutDetails from "../components/WorkoutDetails";
import WorkoutForm from "../components/WorkoutForm";
import useWorkoutContext from "../hooks/useWorkoutContext";  // Custom Hooks

const Home = () => {

    const { workouts, dispatch } = useWorkoutContext();

    useEffect(()=> {

        const fetchWorkouts = async () => {
            const response = await fetch("http://localhost:3500/api/workout/");
            const json = await response.json()

            if (response.ok) {
                dispatch({type: "SET_WORKOUTS", payload: json})  // Because the whole json object also has the message attached to it as well
            }
        }

        fetchWorkouts()

    }, [])  // An empty dependency array specifies that useEffect only fires on

    return (    
        <>
        <div className="home">
            <div className="workouts">
                {workouts && workouts.map((workout) => (  // Round brackets have implicit return and curly braces have explicit return
                    <WorkoutDetails key={workout._id} workout={workout}/>  // Otherwise, it will return undefined. Use return with curly braces
                ))}
            </div>
            <WorkoutForm/>
        </div>
        </>
     );
}
 
export default Home;