import { headerLogo } from '../assets/images'
import { hamburger } from '../assets/icons'
import {navLinks} from '../constant'

const Nav = () => {
  return (
    <header className='padding-x py-8 absolute z-10 w-full'>
        <nav className="flex justify-between items-center max-container">
            <a href="/">
                <img src={headerLogo} alt="HeaderLogo" width={130} height={29} />
            </a>
            <ul className='flex-1 flex justify-center items-centre gap-16 max-lg:hidden'>
                {navLinks.map((itmes)=>(
                    <li key = {itmes.label}>
                        <a href="{item.lable}" className='font-montserrat leading-normal text-lg text-slate-gray'>
                            {itmes.label}
                        </a>
                        
                    </li> ))}
                    {/* <p className='font-montserrat ml-30'>signin/login</p> */}
            </ul>
            <div className='hidden max-lg:block'>
                <img src="src/assets/icons/hamburger.svg" alt="Hamburger" width={25} height={25} />
            </div>
        </nav>
    </header>
  )
}

export default Nav