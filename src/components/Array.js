import React from 'react'

export default function Array() {
    const students = [
                        {id:1,name:"Prathamesh",email:"pk@test.com",contact:7558515245},
                        {id:2,name:"Pratik",email:"ps@test.com",contact:7558515246},
                        {id:3,name:"Shubham",email:"sp@test.com",contact:7558515247},
                        {id:4,name:"Gaurav",email:"gp@test.com",contact:7558515248}
                     ];
  return (
    <div>
      <h1>Handle arrays in React JS</h1>
      {
        students.map((data) =>
            <h4 key={data.id
            }>Name: {data.name}, email: {data.email}, contact: {data.contact} </h4>
        )
      }
    </div>
  )
}
