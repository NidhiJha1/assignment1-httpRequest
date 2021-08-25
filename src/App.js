import { useEffect, useState } from 'react';
import './App.css';
import Pagination from './component/Pagination';
import User from './component/Users';


function App() {
  const [users,setUsers] = useState([]);
  const [loading,setLoading] = useState(true);
  const [currentPage,setCurrentPage] = useState(1);
  const [usersPerPage] = useState(6);


  useEffect(()=>{
    const fetchApi = async() =>{
      const url = `https://reqres.in/api/users?page=2 `;
      const response = await fetch(url);
      const resJson = await response.json();
    //   console.log(resJson);
    setUsers(resJson.data);
    setLoading(false);
    };
    fetchApi();
 },[]);
  

const indexofLastPost = currentPage * usersPerPage;
const indexofFirstPost = indexofLastPost - usersPerPage;
const currentUsers = users.slice(indexofFirstPost,indexofLastPost);

const paginate = (pageNumber) => setCurrentPage(pageNumber);
  return (
    <div className="App">
        <User users={currentUsers} loading={loading} />
        <Pagination usersPerPage={usersPerPage} totalUsers={users.length} paginate={paginate}/>
    
    </div>
  );
}

export default App;
