import MyBooks from "../../components/MyBookList/MyBooks"

const MyList =()=> {
    return(
         <div className='container'>
          <div className='section-title'>
          <h2 className="text-black fs-26 ls-1">My reading list</h2>
          <MyBooks />
        </div>
        </div>
    )
 }
 export default MyList;