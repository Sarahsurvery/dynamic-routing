import { NavbarTypes } from './types/types';
import Link from 'next/link';

const Navbar: React.FC<NavbarTypes> = ({name, href}) => {
  return (
    <li className='text-white bg-transparent hover:bg-teal-400 rounded hover:text-black p-2'>
      <Link href={href}> {name} </Link>
    </li>
  )
}

export default Navbar;