import react, { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";
import User from "./User";
import Pagination from "./Pagination";
import {USER_PER_PAGE} from "./Constants";





function App() {
  const [user, setUser] = useState([]);
  // console.log(user);
  const [loading, setloading] = useState(false);

  const [page, setpage] = useState(1)
  const [totalPages, settotalPages] = useState(0);

  console.log(totalPages)
  useEffect(() => {
    const fetchdata = async () => {
      setloading(true);
      const res = await axios.get("https://jsonplaceholder.typicode.com/posts");

      setloading(false);
      setUser(res.data);
      // console.log(res.data)

      //for pagination
      settotalPages(Math.ceil(res.data.length / USER_PER_PAGE))


    };
    fetchdata();
  }, []);


//for pagination --button click event
const handleClick=(num)=>{
  setpage(num)
}


  return (
    <>
      <h1>😄 React datatabel with Pagination 🔥</h1>
      {loading ? (
        <h1>Loading....</h1>
      ) : (
        <>
          <User user={user} page={page} />
          <Pagination totalPages={totalPages} handleClick={handleClick}/>
        </>
      )}
    </>
  );
}

export default App;
