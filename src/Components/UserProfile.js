// import React, { useEffect, useState } from 'react';
// import axios from 'axios';

// const User = (props) => {
// console.log(props)
//     const [user, setUser] = useState();
//     useEffect(() => {
//         axios.get(`${props.baseUrl}/users/${props.id}`)
//             .then(res => {
//                 const user = res.data;
//                 setUser(user);
//             })
//             .catch((error) => {
//                 console.log(error)
//             })
//     }, []);

//     return (
//         <p>{user.name}</p>
//     )}

// export default User;