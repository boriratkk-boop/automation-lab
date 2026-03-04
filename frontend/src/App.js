import {useState,useEffect} from 'react'
import axios from 'axios'

function App(){

 const [users,setUsers] = useState([])
 const [name,setName] = useState("")
 const [email,setEmail] = useState("")

 const fetchUsers = async ()=>{
  const res = await axios.get("http://localhost:5000/users")
  setUsers(res.data)
 }

 useEffect(()=>{
  fetchUsers()
 },[])

 const createUser = async ()=>{
  await axios.post("http://localhost:5000/users",{name,email})
  fetchUsers()
 }

 const deleteUser = async (id)=>{
  await axios.delete(`http://localhost:5000/users/${id}`)
  fetchUsers()
 }

 return(
  <div>

   <h1>User CRUD</h1>

   <input
    placeholder="name"
    onChange={(e)=>setName(e.target.value)}
   />

   <input
    placeholder="email"
    onChange={(e)=>setEmail(e.target.value)}
   />

   <button onClick={createUser}>
    create
   </button>

   <ul>
    {users.map(u=>(
     <li key={u.id}>
      {u.name} - {u.email}

      <button onClick={()=>deleteUser(u.id)}>
       delete
      </button>

     </li>
    ))}
   </ul>

  </div>
 )
}

export default App