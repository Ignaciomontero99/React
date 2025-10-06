import React from 'react'
import type { User } from '../interfaces/reqres.response';

interface Props {
    user: User;
}

export const UserRow = ({user} : Props ) => {
  return (
    <tr>
        <td><img className="rounded-full w-14 p-2"src={user.avatar} alt="Avatar"></img></td>
        <td>{user.first_name} {user.last_name}</td>
        <td>{user.email}</td>
    </tr>
  )
}
