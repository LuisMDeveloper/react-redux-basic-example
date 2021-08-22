import classes from './Auth.module.css'
import { useRef } from 'react'
import { useDispatch } from 'react-redux'
import { login } from '../store/authSlice'

const isEmpty = (value) => value.trim() === ''

const Auth = () => {
  const emailRef = useRef()
  const passRef = useRef()
  const dispatch = useDispatch()

  const submitHandler = (event) => {
    event.preventDefault()

    const email = emailRef.current.value.trim()
    const password = passRef.current.value.trim()

    if (isEmpty(email) || isEmpty(password)) {
      return
    }
    console.log(email, password)
    dispatch(login({ email, password }))
  }

  return (
    <main className={classes.auth} onSubmit={submitHandler}>
      <section>
        <form>
          <div className={classes.control}>
            <label htmlFor="email">Email</label>
            <input type="email" id="email" ref={emailRef} />
          </div>
          <div className={classes.control}>
            <label htmlFor="password">Password</label>
            <input type="password" id="password" ref={passRef} />
          </div>
          <button>Login</button>
        </form>
      </section>
    </main>
  )
}

export default Auth
