import React from 'react'
import { AiOutlineHome } from 'react-icons/ai';
import { FaFacebookSquare } from 'react-icons/fa';
import { BsTwitter } from 'react-icons/bs';
import { FaReact } from 'react-icons/fa';
import { FaInstagram } from 'react-icons/fa';

export default function App() {
  return (
    <>
      <div className="text-red-600">hello</div>
      <button class="text-white px-4 sm:px-8 py-2 sm:py-3 bg-sky-700 hover:bg-sky-800">button click</button>
      <div className='flex justify-around'>
        <div>logo</div>
        <div>navigation</div>
        <div>sign in</div>
        <div>sign up</div>
      </div>

      <div className='bg-emerald-300'>
        <div className='flex justify-evenly '>
          <h1>Bostami</h1>
          <div className='flex justify-around w-[40%]'>
            <div>Home <AiOutlineHome /></div>
            <div><button>Home</button></div>
            <div><button>Home</button></div>
            <div><button>Home</button></div>
            <div><button>Home</button></div>
            <div><button>Home</button></div>

          </div>
        </div >
        <div className='text-center'>
          <img className='w-72 h-72 rounded-full m-auto' src="data:image/jpeg;base64,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" alt="" />
          <div className='font-bold'>Monalisa Ashley </div>
          <div>UI/UX Designer</div>

          <div className='flex justify-center gap-2'>
            <div ><FaFacebookSquare className='w-[30px] h-[30px]' /></div>
            <div><BsTwitter className='w-[30px] h-[30px]' /></div>
            <div><FaReact className='w-[30px] h-[30px]' /></div>
            <div><FaInstagram className='w-[30px] h-[30px]' /></div>
          </div>

        </div>
      </div>


    </>
  )
}
