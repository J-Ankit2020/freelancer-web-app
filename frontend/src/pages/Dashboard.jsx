
import logo from '../assets/logo.jpeg'
import DashboardLeft from './DashboardLeft'
const Dashboard = ( ) => {
    return (
        <div className='w-full flex flex-row'>
     <DashboardLeft/>
            <div className='rightt bg-[#B2BCFE] w-4/5 flex flex-col'>
                <div className='1st flex justify-between  h-[10%] mx-4 my-4'>
                    <div className="logo ">
                        <img src={logo} className='h-[70%] rounded-md w-10' alt="logo"  />
                    </div>
                    <div className='button-div '>
                    <button className='  bottom-5 mx-4 bg-white left-[2%] w-fit text-black px-3 rounded-md py-1'>Profile</button>
            <button className=' bottom-5 left-[2%] w-fit bg-white text-black px-3 rounded-md py-1'>Profile</button>
                    </div>
                </div>
                
                <div className='second mx-4  bg-white h-[50%] rounded-md'>
                    
                </div>
                <div className='third mx-4 flex   h-[30%] my-5 rounded-md'>
                    <div className='w-[40%] rounded-md mr-2 bg-white'></div>
                    <div className='w-[60%] rounded-md bg-white'></div>
                    
                </div>

            </div>
        </div>
    )
}
export default Dashboard