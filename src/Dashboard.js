import React, { useState } from 'react'

function Dashboard() {
    const [parsedData, setParsedData] = useState(JSON.parse(localStorage.getItem('key')) || [])

    // console.log(parsedData, 'parse')

    function handleDelete(item, i) {
        // console.log(i, 'index')
        const updatedParsedData = [...parsedData]
        // const updatedParsedData = parsedData.filter((data, index) => i !== index)
        // const index = updatedParsedData.indexOf(item)   ////

        // console.log(index, 'iii')   ////
        updatedParsedData.splice(i, 1)
        setParsedData(updatedParsedData)
        // localStorage.removeItem()
        localStorage.setItem('key', JSON.stringify(updatedParsedData))

    }


    return (
        <div>
            <h1>Dashboard</h1>
            <table>
                <thead>
                    <tr>
                        <th>Serial No</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        parsedData.map((item, i) => {
                            return (
                                <tr key={i}>
                                    <td>{i + 1}</td>
                                    <td>{item.name}</td>
                                    <td>{item.email}</td>
                                    <td>
                                        <button
                                            onClick={() => handleDelete(item, i)}
                                        >DELETE</button>
                                    </td>
                                </tr>
                            )
                        })
                    }

                </tbody>
            </table>
            <div>
                {
                    (parsedData.length !== 0) ? <button onClick={() => {
                        localStorage.removeItem('key')
                        window.location.reload()
                    }}>Remove All</button> : null
                }

            </div>
        </div>
    )
}

export default Dashboard