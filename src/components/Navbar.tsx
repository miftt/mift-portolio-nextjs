import NavbarItem from './NavbarItem';

const Navbar = () => {
  return (
  <>
    <div className='flex space-x-4 z-50 bg-slate-100 py-4 position-fixed' >
        <NavbarItem className="ml-4 font-bold text-3xl" href='/'>
            Mifuzi.
        </NavbarItem>
        <NavbarItem className='ml-4 pt-1' href='/'>
            Home
        </NavbarItem>
        <NavbarItem className='pt-1' href='/about'>
            About
        </NavbarItem>
        <NavbarItem className='pt-1' href='/skill'>
            Skill
        </NavbarItem>
        <NavbarItem className='pt-1' href='/profile'>
            Profile
        </NavbarItem>
    </div>

  </>
  );
};

export default Navbar;
