function Car(props){
    return(
        <div className={`car-${props.color}`}>
            {props.name} 

        </div>

    )
}
export default Car