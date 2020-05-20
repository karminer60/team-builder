
import React, { useState } from 'react'
import { v4 as uuid } from 'uuid'
import Teammate from './teammate'
import TeammateForm from './teammateForm'


const initialTeam = [
    {
      id: uuid(),
      username: 'Michael',
      email: 'michael@michael.com',
      role: 'Student',
    },
  ]

  const initialFormValues = {
   
    username: '',
    email: '',
   
    role: '',
  }
  
  export default function Team() {
    const [team, setTeam] = useState(initialTeam)

    const [formValues, setFormValues] = useState(initialFormValues)
  
    const onInputChange = evt => {

      debugger
     
    }
  
    const onSubmit = evt => {
    }
  
    return (
      <div className='container'>
        <header><h1>Teammate App</h1></header>
  
        <TeammateForm
          values={formValues}
          onInputChange={onInputChange}
          onSubmit={onSubmit}
        />
  
        {
          team.map(person => {
            return (
              <Teammate key={person.id} details={person} />
            )
          })
        }
      </div>
    )
  }