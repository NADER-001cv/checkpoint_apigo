import React , {useState,useEffect} from 'react'
// import Axios from 'axios'
import Axios   from 'axios'
function UserLisi() {
    const [user, setUser] = useState([])
    useEffect(() => {
       Axios.get('https://jsonplaceholder.typicode.com/users')
       .then((response) =>{
           console.log(response.data)
       })
    }, [])
    return (
        <div>
              <h1 className="display-1">
              all users
              </h1>
            
        </div>
    )
}

export default UserLisi
