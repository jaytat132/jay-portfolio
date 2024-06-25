import Link from 'next/link'
import { Button } from "./ui/button"

//  components 
import Nav from './Nav';
import MobileNav from './MobileNav';

const Header = () => {
  return (
  <header className = "py-8 xl:py-12 text-white">
    <div className="container mx-auto flex justify-between items-center">
        {/* logo */}
        <Link href="/">
            <h1 className='text-4xl font-semibold'>
               <span className='text-accent'>Jay Tat</span>
            </h1>
        </Link>


        {/* desktop */}
        <div className="hidden xl:flex items-center gap-8">
            <Nav />
            <Link href ="mailto:jaytat132@gmail.com">
             <Button>Contact me</Button>
            </Link>
        </div>
        <div className="xl:hidden"><MobileNav/></div>
            
        
    </div>
  </header>
    );
};

export default Header