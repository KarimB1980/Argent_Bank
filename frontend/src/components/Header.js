import React, { useEffect, useState } from 'react';
import '../pages/style/Main.css';
import { useSelector, useDispatch } from 'react-redux'
import { useForm } from 'react-hook-form'
import { userService } from '../_service/UserService'
import { profileFirstName, profileLastName} from '../redux/nameSlice'
import { useNavigate } from 'react-router-dom';

const Header = () => {
  const dispatch = useDispatch()
  const [show, setShow] = useState(true);
  const {register, handleSubmit} = useForm()
  const { firstName, lastName } = useSelector((state) => state.profile)
  let localStorageFirstName = localStorage.getItem('firstName')
  let localStorageLastName = localStorage.getItem('lastName')

  useNavigate()

  const onSubmit = data => {
    userService.updateUser(data)
  }

  useEffect(() => {
    if (localStorageFirstName && localStorageLastName) {
      dispatch(profileFirstName(localStorageFirstName))
      dispatch(profileLastName(localStorageLastName))
    }
  }, [dispatch, localStorageFirstName, localStorageLastName])
  
  return (
    <>
      <div className="header">
        {show &&
          <div>
            <h1>Welcome back<br />
              {firstName} {lastName} !
            </h1>
            <button className="edit-button" onClick={() => setShow(!show)}>
              Edit Name
            </button>
          </div>
        }
        {!show &&
          <form onSubmit={handleSubmit(onSubmit)}>
            <h1>Welcome back<br />
              <input type='text' name="Firstname" {...register("firstName")} className='inputName' placeholder={firstName}></input>
              <input type='text' name="Lastname" {...register("lastName")} className='inputName' placeholder={lastName}></input>
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