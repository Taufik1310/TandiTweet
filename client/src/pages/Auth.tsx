import { Link } from 'react-router-dom'
import logo from '../../public/img/tanditweet_logo2_white.png'

const Auth = () => {
    return (
        <div className="w-screen min-h-screen bg-black p-10 flex flex-col">
            <img src={logo} alt="TandiTweet Logo White" width={48} className='mb-16' />
            <div className='w-full sm:w-6/12 md:w-5/12 mx-auto'>
                <h1 className='font-extrabold text-5xl mb-14 sm:text-6xl'>Mulai Berkicau!</h1>
                <h2 className='font-bold text-lg mb-8 sm:text-2xl'>Gabung Sekarang.</h2>
                <div>
                    <button type="button" className="bg-transparent text-blue-500 border border-blue-50 rounded-full w-full font-bold py-2 text-sm hover:bg-blue-500 hover:bg-opacity-10">
                        <Link to="/login">Masuk</Link>
                    </button>
                    <div className='flex items-center justify-between my-2'>
                        <span className='h-[1px] bg-zinc-700 w-5/12'/>
                        <span className='text-sm'>atau</span>
                        <span className='h-[1px] bg-zinc-700 w-5/12'/>
                    </div>
                    <button type="button" className="bg-blue-500 hover:bg-blue-600 text-blue-50 border border-blue-500 rounded-full w-full font-bold py-2 text-sm">
                        <Link to="/login">Buat Akun</Link>
                    </button>
                </div>
            </div>
            <p className='text-xs text-zinc-400 flex justify-center gap-1 mt-auto'> 
                <span>&copy;</span>
                <span>{new Date().getFullYear()}</span> 
                <Link to='https://www.instagram.com/taufiksmail_/' className='hover:underline'>taufikismail</Link>&
                <Link to='https://www.instagram.com/andiputraw__/' className='hover:underline'>andiputraw</Link>
            </p>
        </div>
    )
}

export default Auth