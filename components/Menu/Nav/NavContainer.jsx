import DesktopNav from './NavElements/DesktopNav'
import MobileNav from './NavElements/MobileNav'

const NavContainer = () => {
  return (
    <nav className='z-50 w-full fixed'>
      <DesktopNav />
      <MobileNav />
    </nav>
  )
}

export default NavContainer
