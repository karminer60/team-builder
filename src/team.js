
import React, { useState } from 'react'
import { v4 as uuid } from 'uuid'
import Teammate from './teammate'
import TeammateForm from './teammateForm'

// 👉 the shape of the actual friend object from API
const initialTeam = [
    {
      id: uuid(),
      username: 'Michael',
      email: 'michael@michael.com',
      role: 'Student',
    },
  ]
  
  // 👉 the shape of the state that drives the form
  const initialFormValues = {
    ///// TEXT INPUTS /////
    username: '',
    email: '',
    ///// DROPDOWN /////
    role: '',
  }
  
  export default function Team() {
    const [team, setTeam] = useState(initialTeam)
  
    // 🔥 STEP 1 - WE NEED STATE TO HOLD ALL VALUES OF THE FORM!
    const [formValues, setFormValues] = useState(initialFormValues)
  
    const onInputChange = evt => {
      // 🔥 STEP 8 - IMPLEMENT A CHANGE HANDLER (works for inputs and dropdowns)
      // which can change the state of inputs of type text
  
      // a) pull the name of the input from the event object
      debugger
      // b) pull the value of the input from the event object
      // c) set a new state for the whole form
    }
  
    const onSubmit = evt => {
      // 🔥 STEP 9 - IMPLEMENT A SUBMIT HANDLER
  
      // a) don't allow the browser to reload!
      // b) don't allow the submission, if any of the formValues is empty!
      // c) make a new friend object
      //    set up the new friend with the correct attributes
      //    using the information inside the state of the form
      // d) update the list of friends in state with the new friend
      // e) optionally clear the form
    }
  
    return (
      <div className='container'>
        <header><h1>Friends App</h1></header>
  
        <TeammateForm
          // 🔥 STEP 2 - The form component needs its props.
          //    Check implementation of FriendForm
          //    to see what props it expects.
          values={formValues}
          onInputChange={onInputChange}
          onSubmit={onSubmit}
        />
  
        {
          team.map(friend => {
            return (
              <Teammate key={friend.id} details={friend} />
            )
          })
        }
      </div>
    )
  }