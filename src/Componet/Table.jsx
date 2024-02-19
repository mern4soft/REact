import React from 'react'

function Table(props) {
  return (
    <div>
      <table>
        <tr>
            <th>name</th>
            <th>Email</th>
        </tr>
        <tr>
            <td>{props.name}</td>
            <td>{props.email}</td>
        </tr>
      </table>
    </div>
  )
}

export default Table
