import Book from "./Book";

function Library(){
  return (
    <div>
<h2>아무거나</h2>
<Book color='green' name="html" numOfPage={300} />
<Book name="css" numOfPage={200} />
<Book name="js" numOfPage={50} />

    </div>
  )
}

export default Library;