import { SignInButton, SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import { MagnifyingGlassIcon, HeartIcon, ShoppingCartIcon, UserIcon, UserPlusIcon } from "@heroicons/react/24/outline"; 

function Navbar() {
  return (
    <nav className='fixed top-0 w-full bg-white text-black z-50'>
      <div className="container mx-auto py-2 px-4 md:px-8">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-8">
            <a href="/" className="flex items-center gap-2">
              <img src="/logo_e_commerce.png" alt="Logo" className="h-8" /> 
              <span className="font-bold text-2xl">Furniro</span>
            </a>
          </div>
          <div className="hidden md:flex mx-auto items-center gap-8 text-sm"> 
              <a href="/home" className="flex items-center gap-1 font-semibold  hover:bg-blue-200 py-2 px-2 rounded-md">
                  <span>Home</span>
                </a>
                <a href="/shop" className="flex items-center gap-1 font-semibold  hover:bg-blue-200 py-2 px-2 rounded-md">
                  <span>Shop</span>
                </a>
                <a href="/about" className="flex items-center gap-1 font-semibold  hover:bg-blue-200 py-2 px-2 rounded-md">
                  <span>About</span>
                </a>
                <a href="/contact" className="flex items-center gap-1 font-semibold  hover:bg-blue-200 py-2 px-2 rounded-md">
                  <span>Contact</span>
                </a>
            </div>
            <div className="hidden md:flex items-center gap-2">
              <SignedIn>
                <UserButton/>
              </SignedIn>
              <SignedOut >
                <SignInButton mode="modal">
                  <button className="flex items-center hover:bg-blue-200 py-2 px-4 rounded-md">
                    <UserPlusIcon className="h-6 w-6" />
                  </button>
                </SignInButton>
              </SignedOut>
              <button className="flex items-center hover:bg-blue-200 py-2 px-4 rounded-md">
                  <MagnifyingGlassIcon className="h-6 w-6" />
              </button>
              <button className="flex items-center hover:bg-blue-200 py-2 px-4 rounded-md">
                  <HeartIcon className="h-6 w-6" />
              </button>
              <button className="flex items-center hover:bg-blue-200 py-2 px-4 rounded-md">
                  <ShoppingCartIcon className="h-6 w-6" />
              </button>
          </div>
          </div>
        </div>
    </nav>
  )
}

export default Navbar;