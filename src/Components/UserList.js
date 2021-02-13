import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
// import User from './User';

const UserList = (props) => {

    const [list, setList] = useState([]);
    useEffect(() => {
        axios.get(`${props.baseUrl}/users`)
            .then(res => {
                const users = res.data;
                setList(users);
            })
            .catch((error) => {
                console.log(error)
            })
    }, [props.baseUrl]);

    console.log(list)

    return (
        <div>
            <ul>
                {list.map(user => <Link><li>{user.name}</li></Link>)}
            </ul>
        </div>
    )
}

export default UserList;
