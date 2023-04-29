import SideBar from '../components/Sidebar';

function NewJob() {
  return (
    <div className='w-full flex h-full flex-row'>
      <SideBar />
      <div className='w-[75%] mx-auto  h-10/12 my-4 rounded-xl bg-[#B2BCFE]  ml-4  px-8 py-4'>
        <h1 className='text-[#00083B] font-bold text-2xl'>
          Help us get your job done, by listing your job here.
        </h1>
        <p className='text-sm mt-2'>
          Include details that make it clear for the freelancer to get things
          done the right way.
        </p>
        <form className='flex flex-col'>
          <label htmlFor='title' className='text-[#00083B] font-bold m-2'>
            Job Title
          </label>
          <input type='text' className='outline-none py-2 px-2 rounded-lg ' />
          <label htmlFor='tags' className='text-[#00083B] font-bold m-2'>
            Job Tags
          </label>
          <input type='text' className='outline-none py-2 px-2 rounded-lg' />

          <label htmlFor='tags' className='text-[#00083B] font-bold m-2'>
            Budget
          </label>
          <input type='text' className='outline-none py-2 px-2 rounded-lg' />
          <label htmlFor='tags' className='text-[#00083B] font-bold m-2'>
            Contact
          </label>
          <input type='email' className='outline-none py-2 px-2 rounded-lg' />
          <label htmlFor='tags' className='text-[#00083B] font-bold m-2'>
            Description
          </label>
          <textarea className='outline-none py-2 px-2 rounded-lg ' />
          <div className='mt-2'>
            <input
              type='checkbox'
              className='outline-none py-2 px-2 rounded-lg'
            />
            <label htmlFor='tags' className='text-[#00083B] font-bold m-2'>
              You agree to our friendly privacy policy.
            </label>
          </div>
          <button className='bg-[#7F56D9] text-white py-2 px-2 w-1/7  mx-auto rounded-lg mt-2'>
            Submit Job
          </button>
        </form>
      </div>
    </div>
  );
}

export default NewJob;
