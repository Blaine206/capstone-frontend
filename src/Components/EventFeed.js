// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import User from './Event';

// const UserList = (props) => {

//     const [list, setList] = useState([]);
//     useEffect(() => {
//         axios.get(`${props.baseUrl}/events`)
//             .then(res => {
//                 const events = res.data;
//                 setList(events);
//             })
//             .catch((error) => {
//                 console.log(error)
//             })
//     }, [props.baseUrl]);


//     return (
//         <div>
//             <ul>
//                 {list.map(user => <li>{user.name}</li>)}
//             </ul>
//         </div>
//     )
// }

// export default UserList;