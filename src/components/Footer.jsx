import React from "react";
import { Button } from "@material-tailwind/react";
import { FaTwitter } from "react-icons/fa";
import { FaMeta } from "react-icons/fa6";
import { ImPinterest2 } from "react-icons/im";
import { SiInstagram } from "react-icons/si";
import { FiYoutube } from "react-icons/fi";


function Footer() {
  return (
    <footer className="bg-blue-gray-900">
      {/* section-1 */}
      <div className="grid grid-cols-1 md:grid-cols-3 text-white text-center place-items-center py-10 gap-5">
        <div className="flex items-center gap-5 justify-center col-span-1 md:col-span-1">
          <img src="../src/assets/newsletter.png" alt="Newsletter" />
          <p className="capitalize lg:text-xl text-2xl">
            sign up for newsletter
          </p>
        </div>

        <div className="bg-white col-span-1 md:col-span-2 lg:w-3/4 md:w-1/4 w-11/12 flex justify-between rounded-sm overflow-hidden px-1 py-1">
          <input
            type="text"
            placeholder="Your Email"
            className="text-xl w-full outline-none border-none text-black px-6"
          />
          <Button size="" color="black" className="rounded lg:w-1/4 uppercase">
            subscribe
          </Button>
        </div>
      </div>
      <hr className="w-full bg-blue-gray-900" />

      {/* section-2 */}
      <main className="grid lg:grid-cols-5 md:grid-cols-2 grid-cols-1 text-white md:gap-20 gap-10 px-10 py-10 place-items-center">
        <div className="flex flex-col gap-4 text-sm">
            <h1 className="text-xl capitalize font-bold">contact us</h1>
            <address className="w-3/4">demo Store 144 block-C Freedom, newyork, 208056 India</address>
            <p>+91 8965623100</p>
            <p className="lg:text-sm text-xs">anuragsonkar053@gmail.com</p>

            <div className="flex gap-2">
            <div className="w-8 h-8 rounded-full bg-gray-800 shadow-xl flex justify-center items-center">
            <FaTwitter size={16}/>
            </div>

            <div className="w-8 h-8 rounded-full bg-gray-800 shadow-xl flex justify-center items-center">
            <FaMeta size={16}/>
            </div>

            <div className="w-8 h-8 rounded-full bg-gray-800 shadow-xl flex justify-center items-center">
            <ImPinterest2 size={16}/>
            </div>
            
            <div className="w-8 h-8 rounded-full bg-gray-800 shadow-xl flex justify-center items-center">
            <SiInstagram size={16}/>
            </div>

            <div className="w-8 h-8 rounded-full bg-gray-800 shadow-xl flex justify-center items-center">
            <FiYoutube size={16}/>
            </div>

           

            </div>
        </div>
        <div className="flex flex-col gap-4 text-sm">
            <h1 className="text-xl capitalize font-bold">information</h1>
            <address className="w-3/4">demo Store 144 block-C Freedom, newyork, 208056 India</address>
            <p>+91 8965623100</p>
            <p className="lg:text-sm text-xs">anuragsonkar053@gmail.com</p>

            <div className="flex gap-2">
            <div className="w-8 h-8 rounded-full bg-gray-800 shadow-xl flex justify-center items-center">
            <FaTwitter size={16}/>
            </div>

            <div className="w-8 h-8 rounded-full bg-gray-800 shadow-xl flex justify-center items-center">
            <FaMeta size={16}/>
            </div>

            <div className="w-8 h-8 rounded-full bg-gray-800 shadow-xl flex justify-center items-center">
            <ImPinterest2 size={16}/>
            </div>
            
            <div className="w-8 h-8 rounded-full bg-gray-800 shadow-xl flex justify-center items-center">
            <SiInstagram size={16}/>
            </div>

            <div className="w-8 h-8 rounded-full bg-gray-800 shadow-xl flex justify-center items-center">
            <FiYoutube size={16}/>
            </div>

           

            </div>
        </div>
        <div className="flex flex-col gap-4 text-sm">
            <h1 className="text-xl capitalize font-bold">contact us</h1>
            <address className="w-3/4">demo Store 144 block-C Freedom, newyork, 208056 India</address>
            <p>+91 8965623100</p>
            <p className="lg:text-sm text-xs">anuragsonkar053@gmail.com</p>

            <div className="flex gap-2">
            <div className="w-8 h-8 rounded-full bg-gray-800 shadow-xl flex justify-center items-center">
            <FaTwitter size={16}/>
            </div>

            <div className="w-8 h-8 rounded-full bg-gray-800 shadow-xl flex justify-center items-center">
            <FaMeta size={16}/>
            </div>

            <div className="w-8 h-8 rounded-full bg-gray-800 shadow-xl flex justify-center items-center">
            <ImPinterest2 size={16}/>
            </div>
            
            <div className="w-8 h-8 rounded-full bg-gray-800 shadow-xl flex justify-center items-center">
            <SiInstagram size={16}/>
            </div>

            <div className="w-8 h-8 rounded-full bg-gray-800 shadow-xl flex justify-center items-center">
            <FiYoutube size={16}/>
            </div>

           

            </div>
        </div>
        <div className="flex flex-col gap-4 text-sm">
            <h1 className="text-xl capitalize font-bold">contact us</h1>
            <address className="w-3/4">demo Store 144 block-C Freedom, newyork, 208056 India</address>
            <p>+91 8965623100</p>
            <p className="lg:text-sm text-xs">anuragsonkar053@gmail.com</p>

            <div className="flex gap-2">
            <div className="w-8 h-8 rounded-full bg-gray-800 shadow-xl flex justify-center items-center">
            <FaTwitter size={16}/>
            </div>

            <div className="w-8 h-8 rounded-full bg-gray-800 shadow-xl flex justify-center items-center">
            <FaMeta size={16}/>
            </div>

            <div className="w-8 h-8 rounded-full bg-gray-800 shadow-xl flex justify-center items-center">
            <ImPinterest2 size={16}/>
            </div>
            
            <div className="w-8 h-8 rounded-full bg-gray-800 shadow-xl flex justify-center items-center">
            <SiInstagram size={16}/>
            </div>

            <div className="w-8 h-8 rounded-full bg-gray-800 shadow-xl flex justify-center items-center">
            <FiYoutube size={16}/>
            </div>

           

            </div>
        </div>
        <div className="flex flex-col gap-4 text-sm">
            <h1 className="text-xl capitalize font-bold">contact us</h1>
            <address className="w-3/4">demo Store 144 block-C Freedom, newyork, 208056 India</address>
            <p>+91 8965623100</p>
            <p className="lg:text-sm text-xs">anuragsonkar053@gmail.com</p>

            <div className="flex gap-2">
            <div className="w-8 h-8 rounded-full bg-gray-800 shadow-xl flex justify-center items-center">
            <FaTwitter size={16}/>
            </div>

            <div className="w-8 h-8 rounded-full bg-gray-800 shadow-xl flex justify-center items-center">
            <FaMeta size={16}/>
            </div>

            <div className="w-8 h-8 rounded-full bg-gray-800 shadow-xl flex justify-center items-center">
            <ImPinterest2 size={16}/>
            </div>
            
            <div className="w-8 h-8 rounded-full bg-gray-800 shadow-xl flex justify-center items-center">
            <SiInstagram size={16}/>
            </div>

            <div className="w-8 h-8 rounded-full bg-gray-800 shadow-xl flex justify-center items-center">
            <FiYoutube size={16}/>
            </div>

           

            </div>
        </div>
        

      </main>
    </footer>
  );
}

export default Footer;
