import React, { useState } from 'react';
import '../pages/style/Main.css';
import { useSelector } from 'react-redux'

import { useForm } from 'react-hook-form'

import { userService } from '../_service/UserService'

const Header = () => {
  const name = useSelector(state => state.Name)

  const [show, setShow] = useState(true);

  const {register, handleSubmit} = useForm()

  const onSubmit = data => userService.updateUser(data)
  
  return (
    <>
      <div className="header">
        {show && 
          <div>
            <h1>Welcome back<br />
              {name.firstname} {name.lastname}!
            </h1>
            <button className="edit-button" onClick={() => setShow(!show)}>
              Edit Name
            </button>
          </div>
        }
        {!show &&  
          <form onSubmit={handleSubmit(onSubmit)}>
            <h1>Welcome back<br />
              <input type='text' name="Firstname" {...register("firstName")} className='inputName' placeholder={name.firstname}></input>
              <input type='text' name="Lastname" {...register("lastName")} className='inputName' placeholder={name.lastname}></input>
            </h1>            
            <input type="submit" value="Save" className="edit-button" />
            <button className="edit-button" onClick={() => setShow(!show)}>
              Cancel
            </button>
          </form>
        }
      </div>
    </>
  )
}

export default Header;