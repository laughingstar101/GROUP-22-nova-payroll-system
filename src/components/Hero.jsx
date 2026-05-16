import { useNavigate } from 'react-router-dom'
import logoImg from '../assets/logo.png'

export default function Hero() {
    const navigate = useNavigate();

    const handleRegisterClick = () => {
        navigate('./company-register');
    }

    return (
        <div className="min-h-screen flex flex-col items-center bg-linear-to-br from-secondary-colour to-secondary-colour2">
            <div className='bg-primary-colour w-full flex justify-between items-center py-4 px-20'>
                <img src={logoImg} className="h-15" height='30'></img>
                <button onClick={handleRegisterClick} className='hover:cursor-pointer text-complementary-colour text-xl uppercase bg-secondary-colour2 h-12 px-2'>Register</button>
            </div>
            <div className="container bg-primary-colour flex flex-col items-center mt-8 py-8 rounded-xl">
                <p className='text-white text-xl'>Welcome to Nova Payroll System</p>
                <p className='text-white text-lg'>Use our system to launch your company's payroll management to new heights!</p>
            </div>
        </div>
    )
}