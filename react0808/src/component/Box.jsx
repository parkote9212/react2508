function Box(props){
    return(
        <>
        <div className={`box-${props.type}`}>
            박스 {props.name}
        </div>
        </>
    )

}

export default Box;