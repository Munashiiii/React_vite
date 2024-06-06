import {BsFacebook, BsTwitter, BsInstagram, BsPinterest} from 'react-icons/bs';
import Tomsad from '../assets/tom.jpg';

const hero = () => {
  return (
    <section className='flex justify-around items-center p-10 space-x-10 lg:flex-row ssm:flex-col ssm:space-y-10 text-white'>
        <div className='lg:w-1/3 ssm:w-fit'>
            <p className='text-4xl mb-5 text-slate-300'>I'm</p>
            <h1 className='text-6xl'>Tom Cat</h1>
            <hr/>
            <p className='mt-10  text-slate-300 font-sans'>
                  Thomas "Tom" Jasper Cat, commonly referred to as Tom Cat, or more simply referred to as Tom, and originally known as Jasper is one of the two anti-heroic protagonists in Tom and Jerry, alongside Jerry Mouse, created by William Hanna and Joseph Barbera. Despite being referred as an anti-heroic, Tom is more often placed in the role of the antagonist, with Jerry often being the protagonist just as much.
            </p>
        </div>
        <div className='lg:w-1/3 ssm:w-fit'>
            <img src={Tomsad} alt="" width={250} height={250} className='rounded-full w-full border-8 border-while' />
        </div>
        <div className='lg:w-1/3 ssm:w-fit'>
            <p className='text-4xl mb-4'>About Me</p>
              <p className='text-slate-300'>
                Let's speak abut your sad story and I'm still here to listen your deep soul.
            </p>
            <button className='bg-white text-indigo-600 px-10 py-2 my-3 rounded-full hover:bg-indigo-800 hover:text-white'>
                Show more....
            </button>
            <div className='flex mt-5 space-x-4 cursor-pointer'>
                <BsFacebook size={40} className='border-4 hover:border-indigo-800 rounded-full'/>
                  <BsInstagram size={40} className='border-4 hover:border-indigo-800 rounded-full' />
                  <BsPinterest size={40} className='border-4 hover:border-indigo-800 rounded-full' />
                  <BsTwitter size={40} className='border-4 hover:border-indigo-800 rounded-full' />
            </div>
        </div>
    </section>
  )
}

export default hero