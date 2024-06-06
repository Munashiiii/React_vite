import Project1Img from '../assets/light.jpg';
import Project2Img from '../assets/man.jpg';
import Project3Img from '../assets/lightbird.jpg';
import Project4Img from '../assets/moonbird.jpg';


export default function Project() {
  return (
   <>
        <div className='bg-indigo-800 m-20 max-w-full'>
            <div className='grid justify-items-center m-10'>
                <h1 className='text-3xl text-white mt-10'>Project</h1>
            </div>

            <div>
              <div className='grid grid-cols-2 gap-4 p-5'>
                <div className='max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl hover:animate-pulse'>
                    <div className='md:flex'>
                      <div className='p-8'>
                        <div className='uppercase tracking-wide text-sm to-indigo-500 font-semibold'>
                          Light Sky
                        </div>
                        <a href="#">Subheading</a>
                        <p className='mt-2 text-slate-500'>
                          A mysterious night scene with a person standing atop a cloud-covered mountain,
                        </p>
                      </div>
                      <div className='md:shrink-0 p-5'>
                        <img src={Project1Img} alt="Img1" width={150} height={150} />
                      </div>
                    </div>
                </div>
                <div className='max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl hover:animate-pulse'>
                  <div className='md:flex'>
                  <div className='md:shrink-0 p-5'>
                    <img src={Project2Img} alt="Img2" width={150} height={150} />
                  </div>
                    <div className='p-8'>
                      <div className='uppercase tracking-wide text-sm to-indigo-500 font-semibold'>
                        Pumpkin Man
                      </div>
                      <a href="#">Subheading</a>
                      <p className='mt-2 text-slate-500'>
                     Above and around the figure, multiple pumpkins float in the air against a stormy sky backdrop, with distant lightning bolts.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <hr />
          <div className='grid grid-cols-2 gap-4 p-5'>
            <div className='max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl hover:animate-pulse'>
              <div className='md:flex'>
                <div className='p-8'>
                  <div className='uppercase tracking-wide text-sm to-indigo-500 font-semibold'>
                    Light Bird
                  </div>
                  <a href="#">Subheading</a>
                  <p className='mt-2 text-slate-500'>
                    A mysterious night scene with a person standing atop a cloud-covered mountain, two moon-like celestial bodies in the sky, and star-filled heavens.
                  </p>
                </div>
                <div className='md:shrink-0 p-5'>
                  <img src={Project3Img} alt="Img3" width={150} height={150} />
                </div>
              </div>
            </div>
            <div className='max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl hover:animate-pulse'>
              <div className='md:flex'>
                <div className='md:shrink-0 p-5'>
                  <img src={Project4Img} alt="Img4" width={150} height={150} />
                </div>
                <div className='p-8'>
                  <div className='uppercase tracking-wide text-sm to-indigo-500 font-semibold'>
                    Moon Bird
                  </div>
                  <a href="#">Subheading</a>
                  <p className='mt-2 text-slate-500'>
                    Above and around the figure, multiple pumpkins float in the air against a stormy sky backdrop, with distant lightning bolts.
                  </p>
                </div>
              </div>
            </div>
          </div>
            </div>
       
        </div>
   </>
  )
}
