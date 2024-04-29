import { CheckCircleIcon, ShieldCheckIcon, TruckIcon, PhoneArrowDownLeftIcon} from '@heroicons/react/24/outline';

function Footer() {
  return (
    <div className="py-12 font-custom relative text-xm">
      <div className="container mx-auto">
       {/* Parte superior do footer */}
       <div className="mx-auto grid grid-cols-1 md:grid-cols-4 mb-8 bg-[#FAF3EA] w-full" style={{ height: '270px', top: '2594px', padding: '100px 0' }}>
          {/* Ícone 1 */}
          <div className="flex items-center">
            <CheckCircleIcon className="h-14 w-14 mr-2 ml-20" />
            <div>
              <p className="font-semibold">High Quality</p>
              <p className="text-sm">Crafted from top materials</p>
            </div>
          </div>
          {/* Ícone 2 */}
          <div className="flex items-center">
            <ShieldCheckIcon className="h-14 w-14 mr-2 ml-7" />
            <div>
              <p className="font-semibold">Warranty Protection</p>
              <p className="text-sm">Crafted from top materials</p>
            </div>
          </div>
          {/* Ícone 3 */}
          <div className="flex items-center">
            <TruckIcon className="h-14 w-14 mr-2 ml-7 " />
            <div>
              <p className="font-semibold">Free Shipping</p>
              <p className="text-sm">Crafted from top materials</p>
            </div>
          </div>
          {/* Ícone 4 */}
          <div className="flex items-center">
            <PhoneArrowDownLeftIcon className="h-14 w-14 mr-2 ml-7" />
            <div>
              <p className="font-semibold">24/7 Support</p>
              <p className="text-sm">Crafted from top materials</p>
            </div>
          </div>
        </div>
        {/* Parte inferior do footer */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Seção de links */}
          <div>
            <ul className="list-none pl-16">
              <li><a href="#" className="font-bold text-xl ">Funiro.</a></li>
              <h1 className='text-gray-400 pt-20'>400 University Drive Suite 200 Coral Gables, FL 33134 USA</h1>
              <h1 className="pt-16">2023 furino. All rights reverved</h1>
            </ul>
          </div>
          <div>
            <ul className="list-none">
              <h1 className='text-gray-400 pb-7'>Links</h1>
              <li className='pb-5'><a href="#" className="pb-7">Home</a></li>
              <li className='pb-5'><a href="#" className="pb-7">Shop</a></li>
              <li className='pb-5'><a href="#" className="pb-7">About</a></li>
              <li><a href="#" className="pb-7">Contact</a></li>
            </ul>
          </div>
          <div>
            <ul className="list-none  pb-7">
            <h1 className='text-gray-400 pb-7'>Help</h1>
              <li className='pb-5'><a href="#" className="">Payment Options</a></li>
              <li className='pb-5'><a href="#" className="">Returns</a></li>
              <li><a href="#" className="">Privacy Policies</a></li>
             
            </ul>
          </div>
          {/* Seção de formulário de inscrição */}
          <div className="list-none">
          <h1 className='text-gray-400 pb-7'>NewsLetter</h1>
          <input type="email" placeholder="Your email address" className="bg-white border-b border-black py-2 px-2 focus:outline-none" />
           
            <button type="submit" className=" hover:bg-blue-300  font-bold py-2 px-4  bg-white border-b border-black focus:outline-none">SUBSCRIBE</button>
          
            </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;