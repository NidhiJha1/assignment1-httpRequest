const User = ({users,loading}) =>{

    if(loading){
        return <p>loading...</p>
    }
   
   return(
    <div className="wrapper">
    <div className="row-heading">
        <div>Id</div>
        <div>Name</div>
        <div>Email id</div>

    </div>
       {
          users.map((data) =>(
            <div className="row-data" key={data.id}>
                <div>{data.id}</div>
                <div><img src={data.avatar} className="profile-pic" alt={data.first_name} title={data.first_name}/>{data.first_name} {data.last_name}</div>
           
                <div>{data.email}</div>
            </div>
          ))
        }
        </div>
   );
};

export default User;