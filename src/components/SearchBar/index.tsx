import { Input } from "../Input"
import {AiOutlineSearch} from 'react-icons/ai'

export const SearchBar: React.FC = () => {
  return (
    <>
      <Input type="text" id="search" placeholder="Pesquisar filme" />
      <AiOutlineSearch />
    </>
  )
}