import React from 'react'

export default function TeammateForm(props) {
  // THESE ARE THE **EXACT PROPS** FriendForm EXPECTS!!!
  // 🔥 STEP 3 - MAKE SURE THE PARENT IS INJECTING ALL NECESSARY PROPS
  const {
    values,
    onInputChange,
    onSubmit,
  } = props

  return (
    // 🔥 STEP 4 - Give the form an `onSubmit` event handler
    <form className='form container' onSubmit={onSubmit}>
      <div className='form-group submit'>
        <h2>Add a Friend</h2>
        <button>submit</button>
      </div>

      <div className='form-group inputs'>
        <h4>General information</h4>

        {/* ////////// TEXT INPUTS ////////// */}
        {/* ////////// TEXT INPUTS ////////// */}
        {/* ////////// TEXT INPUTS ////////// */}
        <label>Username:&nbsp;
          {/* 🔥 STEP 5 - Make an input of type `text` for username.
              Controlled inputs also need `value` and `onChange` props.
              Inputs render what they're told - their current value comes from app state.
              At each keystroke, a change handler should fire to change app state. */}
          <input
            type='text'
            placeholder='Type a username'
            maxLength='20'
            name='username'
            // very important props for controlled, state-driven inputs
            value={values.username}
            onChange={onInputChange}
          />
        </label>

        <label>Email:&nbsp;
          {/* 🔥 STEP 6 - Make an input of type `text` for email. */}
          <input
            type='text'
            placeholder='Type email'
            maxLength='20'
            name='email'
            value={values.email}
            onChange={onInputChange}
          />
        </label>

        {/* ////////// DROPDOWN ////////// */}
        {/* ////////// DROPDOWN ////////// */}
        {/* ////////// DROPDOWN ////////// */}
        <label>Role:&nbsp;
          {/* 🔥 STEP 7 - Make dropdown for role. */}
          <select name='role' value={values.role} onChange={onInputChange}>
              <option value='' >Select a Role</option>
              <option value='Student'>Student</option>
              <option value='Instructor'>Instructor</option>
              <option value='Alumni'>Alumni</option>
              <option value='TL'>TL</option>
          </select>
        </label>
      </div>
    </form>
  )
}
