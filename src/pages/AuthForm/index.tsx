import {useState} from 'react'
import { Input } from "../../components/Input"
import { Button } from '../../components/Button'
type variant = 'LOGIN' | 'REGISTER'

export const AuthForm = () => {
  const [variant, setvariant] = useState<variant>('REGISTER')
  
  return (
    <>
    {variant == 'REGISTER' && (
      <h1 className='text-center bold'>Crie uma conta!</h1>
    )}
    <div className='mt-4 sm:mx-auto sm:w-full sm:max-w-md border rounded-md'>
      <div className='px-4 py-8 shadow sm:rounded-lg sm:px-10'>
        <form className='space-y-6'>
          {variant == 'REGISTER' && (
            <Input label='Name' id="name" />
          )}

          <Input label='E-mail' id='email' />
          <Input label='Password' id='password' />

          <div>
            <Button />
          </div>
        </form>
      </div>
    </div>
    </>
  )
}