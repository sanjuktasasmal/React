import React from 'react'

export default function Singledata({singleData}) {
   const{name, phone, website, company} = singleData;
  

   
  return (
    <div>
      <h2>Name : {name}</h2>
      <p> Websie : {website}</p>
      <h3>phone : {phone}</h3>
      <h3> company: {company.name}</h3>
    </div>
  )
}
