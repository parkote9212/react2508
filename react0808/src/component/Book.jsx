function Book(props) {
    return (
        <div>
            <h3 className={`p-bg-${props.color}`}> {`이 책의 이름은 ${props.name}`}</h3>
            <h3>{`이 책은 총 ${props.numOfPage}페이지 입니다. `}</h3>
        </div>
    )
}

export default Book;