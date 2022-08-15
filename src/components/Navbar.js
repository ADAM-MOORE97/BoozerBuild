import React, {useState} from 'react'
import { Transition } from "@headlessui/react"
import logo from '../images/logo.png'

export const Navbar = () => {
 
    const [isOpen, setIsOpen] = useState(false);
    return (
      <div className=''>
        <nav className="bg-stone-600 ">
          <div className="w-full mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <div className="flex-shrink-0">
                  <img
                    className="m-0 mt-1 mb-1 h-12 md:mx-auto md:h-20 bg-white rounded-3xl p-0"
                    src={logo}
                    alt="Workflow"
                  />
                </div>
                <div className="hidden md:block">
                  <div className="ml-10 flex items-baseline space-x-12">
                    <a
                      href="/"
                      className=" hover:bg-stone-700 text-boozerblue px-3 py-2 rounded-md text-lg font-medium font-elite"
                    >
                      Home
                    </a>
  
  
                    <a
                      href="/Menu"
                      className=" hover:bg-stone-700 text-boozerblue px-3 py-2 rounded-md text-lg font-medium font-elite"
                    >
                      Menu
                    </a>
  
                    <a
                      href="/Contact"
                      className=" hover:bg-stone-700 text-boozerblue px-3 py-2 rounded-md text-lg font-medium font-elite"
                    >
                      Contact
                    </a>
  
                    <a
                      href="/Career"
                      className=" hover:bg-stone-700 text-boozerblue px-3 py-2 rounded-md text-lg font-medium font-elite"
                    >
                      Career
                    </a>
                    <a
                      href="https://squareup.com/gift/0697NY3YK07YA/order?fbclid=IwAR1wYN_iqNpZTz7_HsL0O7qzvQJbsi9QFr_Dcxn6YDoKax2sbvoTOiVWxtI"
                      target="_blank"
                      className=" hover:bg-stone-700 text-boozerblue px-3 py-2 rounded-md text-lg font-medium font-elite"
                    >
                      <i className="fa-solid fa-gift-card mr-2"></i>
                       Gift Cards
                    </a>
                   

                  </div>
                  
                  
                </div>
              
              </div>
              <div className="-mr-2 flex md:hidden">
                <button
                  onClick={() => setIsOpen(!isOpen)}
                  type="button"
                  className="bg-stone-500 inline-flex items-center justify-center p-2 rounded-md text-boozerblue hover:boozerblue hover:bg-stone-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-stone-800 focus:ring-boozerblue"
                  aria-controls="mobile-menu"
                  aria-expanded="false"
                >
                  <span className="sr-only">Open main menu</span>
                  {!isOpen ? (
                    <svg
                      className="block h-6 w-6"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M4 6h16M4 12h16M4 18h16"
                      />
                    </svg>
                  ) : (
                    <svg
                      className="block h-6 w-6"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  )}
                </button>
              </div>
            </div>
          </div>
  
          <Transition
          
            show={isOpen}
            enter="transition ease-out duration-100 transform"
            enterFrom="opacity-0 scale-95"
            enterTo="opacity-100 scale-100"
            leave="transition ease-in duration-75 transform"
            leaveFrom="opacity-100 scale-100"
            leaveTo="opacity-0 scale-95"
          >
            {(ref) => (
              <div className="md:hidden" id="mobile-menu">
                <div ref={ref} className="pt-2 pb-3 space-y-1 sm:px-3">
                  <a
                    href="/"
                    className="hover:bg-stone-700 text-boozerblue block px-3 py-2 rounded-md text-base font-medium font-elite"
                  >
                    Home
                  </a>
  
                  <a
                    href="/Menu"
                    className="text-boozerblue hover:bg-stone-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium font-elite"
                  >
                    Menu
                  </a>
  
  
                  <a
                    href="/Contact"
                    className="text-boozerblue hover:bg-stone-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium font-elite"
                  >
                    Contact
                  </a>
  
                  <a
                    href="/Career"
                    className="text-boozerblue hover:bg-stone-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium font-elite"
                  >
                    Career
                  </a>
                  <a
                    href="https://squareup.com/gift/0697NY3YK07YA/order?fbclid=IwAR1wYN_iqNpZTz7_HsL0O7qzvQJbsi9QFr_Dcxn6YDoKax2sbvoTOiVWxtI"
                    target="_blank"
                    className="text-boozerblue hover:bg-stone-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium font-elite"
                  >
                    <i className="fa-solid fa-gift-card mr-1"></i>
                    Gift Cards
                  </a>
                </div>
              </div>
            )}
          </Transition>
        </nav>
  
      </div>
    
  
        // <nav className='flex flex-wrap items-center justify-between w-full py-4 md:py-0 px-4 text-lg text-boozerblue bg-slate-600'>

        //       <div>
        //       <ul className='hidden md:flex mr-0'>
        //             <li>Home</li>
        //             <li>Menu</li>
        //             <li>Contact</li>
        //             <li>Career</li>
        //         </ul>
        //       </div>
 
        //     <img
        //     className='
        //     m-0 mt-1 mb-1 h-20 md:mx-auto md:h-28 bg-white rounded-3xl p-0'
        //       src={logo}
             
            
        //     >
        //     </img>
            
        //     <a><i className="fa-solid fa-gift-card display:none text-lg md:text-3xl "></i></a>
            
    

        // </nav>
      
  )
}
