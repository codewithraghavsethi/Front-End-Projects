import {assets} from "../assets/assets"

const Sidebar = () => {
  return (
    <>
    <div className='w-[25%] h-full p-2 flex-col gap-2 text-white hidden lg-flex'>
      <div className='bg-[#eef616] h-[15%] rounded flex flex-col justify-around'>
        <div className='flex item-center gap-3 pl-8 cursor-pointer'>
          <img className="w-6" src={assets.home_icon} alt="" />
          <p className='font-bold text-blue-700'>Home</p>
        </div>
      </div>
    </div>
    </>
  )
}

export default Sidebar
