import Link from "next/link";

function Navbar(){
    return(
        <nav className='fixed top-0 w-full flex items-center py-2 px-8 justify-between z-50 bg-white text-black'>
        <Link 
          href = "/" 
          className = 'font-bold text-md h-12 flex items-center'>
            Furniro
        </Link>
      </nav>
    )
}
export default Navbar