import React,{useState, useEffect} from 'react'

const User = () => {
    const[users, setUsers] = useState([])
    useEffect(()=>{
        dataFetch()

    }, []) 

    const dataFetch =async () => {
        const dataUrl = await fetch ('https://randomuser.me/api/?results=2')
        const data =await dataUrl.json()
        setUsers(data.results)
    }
    const render = users.map((user, idx) => {
        return(
           <div key={idx}>
              
             <img src= {user.picture.large} alt="user-image" />
             <p>Gender:{user.name.title} {user.name.first} {user.name.last}</p>
             <p>Gender:{user.dob.age}</p>
             <p>Gender:{user.gender}</p>
             <p>Address:{user.location.street.number} {user.location.street.name} {user.location.street.city} {user.location.street.country}</p>
             <p>Phone:{user.phone}</p>
             <p>Password:{user.login.password}</p>
            </div>
        )
    }) 
  return (
    <div style={{textAlign:'center'}} >
        <h1 >Api fectch</h1>
      {render}
    </div>
  )
}

export default User
