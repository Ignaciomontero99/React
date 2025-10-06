import React, { useEffect, useState } from 'react'
import { loadUsersAction } from '../actions/load-users.action'
import type { ReqResUserListResponse, User } from '../interfaces/reqres.response';


export const useUsers = () => {

    const [users, setUsers] = useState<User[]>([]) 

    useEffect(() => {
        loadUsersAction(1)
        .then(setUsers)
    },[]);

    return {
        // Prpiedades
        users,
    }
}
