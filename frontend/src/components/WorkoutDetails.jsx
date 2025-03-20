import useWorkoutContext from "../hooks/useWorkoutContext";

import formatDistanceToNow from 'date-fns/formatDistanceToNow'

const WorkoutDetails = ({workout}) => {
    const { dispatch } = useWorkoutContext();

    const handleClick = async () => {
        const response = await fetch("http://localhost:3500/api/workout/" + workout._id, {
            method: "DELETE",
        });

        const json = await response.json();

        if (response.ok) {
            dispatch({type: "DELETE_WORKOUTS", payload: json.workoutDeleted})
        }
    }

    return ( 
        <>
            <div className="workout-details">
                <h4>{workout.title}</h4>
                <p><strong>Load (kg): </strong>{workout.load}</p>
                <p><strong>Reps: </strong>{workout.reps}</p>
                <p>{formatDistanceToNow(new Date(workout.createdAt), { addSuffix: true })}</p> 
                <span className="material-symbols-outlined" onClick={handleClick}>delete</span>
            </div>
        </>
     );
}
 
export default WorkoutDetails;

// If addSuffix was not added, it would say 2 days but with it, it will read two days ago.