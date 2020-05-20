
import React, { useState } from 'react'
import { v4 as uuid } from 'uuid'
import Teammate from './teammate'
import TeammateForm from './teammateForm'


const initialTeam = [
  {
    id: uuid(),
    username: 'Karina',
    email: 'karina@karina.com',
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

    const { name } = evt.target

    const { value } = evt.target

    setFormValues({ ...formValues, [name]: value })
  }



  const onSubmit = evt => {
    evt.preventDefault()

    if (
      !formValues.username.trim() ||
      !formValues.email.trim() ||
      !formValues.role.trim()
    ) {
      return
    }
    const newTeam = { ...formValues, id: uuid() }
    
    setTeam([ newTeam, ...team ])

    setFormValues(initialFormValues)
  
  };

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