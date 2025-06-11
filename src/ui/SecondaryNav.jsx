import Logout from '../features/authentication/Logout';
import Account from "../features/authentication/Account";

const SecondaryNav = () => {
  return (
    <nav className='flex flex-col justify-center mt-auto'>
      <Account />
      <Logout />
    </nav>
  )
}

export default SecondaryNav;