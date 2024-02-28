import clsx from 'clsx'

interface ButtonProps {
  type?: 'button' | 'submit' | 'reset' | undefined
  fullWidth?: boolean
  children?: React.ReactNode
  onClick?: () => void
  secondary?: boolean
  danger?: boolean
  disabled?: boolean
}
export const Button:React.FC<ButtonProps> = ({type, fullWidth, children, onClick, secondary, danger, disabled}) => {
  return (
    <button onClick={onClick} type={type} className={clsx(`flex justify-center rounded-md px-3 py-2 text-sm font-semibold focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2`,
    fullWidth && 'w-full',
    disabled && 'opacity-50 cursor-default',
    !danger && !secondary && 'bg-greenDefault hover:bg-greenDefaultHover focus-visible:outline-#1a7741')}>
      {children}
    </button>
  )
}