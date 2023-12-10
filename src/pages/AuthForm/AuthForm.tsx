import {useState, useContext, ChangeEvent, FormEvent} from 'react'
import { Input } from "../../components/Input"
import { Header } from "../../components/Header"
import { Button } from '../../components/Button'
import { useNavigate } from "react-router-dom";
import {AuthContext} from '../../contexts/Auth/AuthContext'
import { ShowError } from '../../components/ShowError';

type variant = 'LOGIN' | 'REGISTER'

export const AuthForm: React.FC = () => {
  const auth = useContext(AuthContext);
  const navigate = useNavigate();

  const [variant, setvariant] = useState<variant>('REGISTER')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [name, setName] = useState('')
  const [error, setError] = useState<string>('')

  const handleNameInput = (e: ChangeEvent<HTMLInputElement>) => {
    e.preventDefault()
    setName(e.target.value)
  }

  const handleEmailInput = (e: ChangeEvent<HTMLInputElement>) => {
    e.preventDefault()
    setEmail(e.target.value)
  }

  const handlePasswordInput = (e: ChangeEvent<HTMLInputElement>) => {
    e.preventDefault()
    setPassword(e.target.value)
  }

  const handleAuth = async (e: FormEvent) => {
    e.preventDefault()
    try {
      if (variant === 'LOGIN' && email && password) {
        const isLogged = await auth.signin(email, password)
        
        if (isLogged) {
          navigate('/home');
        } 
        // else {
        //   setError('Dados de Login inválidos')
        //   console.log(error)
        // }
      }
  
      if (variant === 'REGISTER') {
        const userRegister = {
          name,
          email,
          password
        }
         if (userRegister) {
          const isRegistered = await auth.register(userRegister) 
          console.log(isRegistered)
          if (isRegistered) {
            const isLogged = await auth.signin(email, password)
        
            if (isLogged) {
              navigate('/home');
            } else {
              setError('Dados de Login inválidos')
            }
          }
         }
      }
    } catch (error: any) {
      setError(error)
    }
  }
  
  return (
    <>
    <Header />
    {variant == 'REGISTER' ? (
      <h1 className='text-center bold'>Registre-se ;p</h1>
    ) : <h1 className='text-center bold'>Faça Login :)</h1>}
    <div className='mt-4 sm:mx-auto sm:w-full sm:max-w-md border rounded-md'>
      <div className='px-4 py-8 shadow sm:rounded-lg sm:px-10'>
        <form onSubmit={handleAuth} className='space-y-6'>
          {variant == 'REGISTER' && (
            <Input label='Name' id="name" type='text' required={true} placeholder='Digite seu nome' value={name} onChange={handleNameInput} />
          )}

          <Input label='E-mail' id='email' type='text' required={true} placeholder='Digite seu e-mail' value={email} onChange={handleEmailInput}/>
          <Input label='Password' id='password' type='password' required={true} placeholder='Digite seu senha' value={password} onChange={handlePasswordInput} />

          <ShowError error={error} />
          <div>
            <Button fullWidth type='submit'> {variant === 'LOGIN' ? 'Entrar' : 'Criar conta'} </Button>
          </div>
        </form>

        <div className="flex gap-2 justify-center mt-6 text-sm px-2 text-gray-500">
          <div>
            {variant === 'LOGIN' ? 'Primeira vez aqui?' : 'Já tem uma conta?'}
          </div>

          <div onClick={() => variant === 'LOGIN' ? setvariant('REGISTER') : setvariant('LOGIN')} className='text-gray-500 underline cursor-pointer'>
            {variant === 'LOGIN' ? 'Crie uma conta!' : 'Fazer Login'}
          </div>
        </div>
      </div>
    </div>
    </>
  )
}