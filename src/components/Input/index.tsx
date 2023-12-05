import { ChangeEvent, InputHTMLAttributes } from "react"

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string,
  id: string,
  type?: string,
  required?: boolean,
  disabled?: boolean,
  placeholder?: string,
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void,
  value?: string | undefined
}
export const Input: React.FC<InputProps> = ({label, id, type, placeholder, required, disabled, onChange, value}) => {
  return (
    <div>
      <label className='block text-sm font-medium text-white leading-6 mb-2'>{label}</label>
      <input id={id} type={type} required={required} disabled={disabled} placeholder={placeholder} value={value || undefined} onChange={onChange} className='form-input bg-black block w-full rounded-md border-1 py-1.5 px-2 text-white shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset border-greenDefault focus:ring-green-600 sm:tyext-sm sm:leading-6' />
    </div>
  )
}