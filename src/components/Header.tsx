import wallet from '../assets/icon.png'

const Header = () => {
  return (
    <div className='sticky top-0 bg-white flex py-2 justify-center items-center gap-4 border-b border-b-gray-300'>
      <img src={wallet} className='h-10' />
      <h1 className='text-gray-600'>Task Manager</h1>
    </div>
  )
}

export default Header