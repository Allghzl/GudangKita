import { Link } from '@inertiajs/react';
import logo from '@/Components/Inventaris/logob.png';
import bg from '@/Components/Inventaris/bg.svg';

export default function GuestLayout({ children }) {
    return (
        <div bg="w-full h-64 bg-cover bg-center" style={{ backgroundImage: `url(${bg})` }} className="flex min-h-screen flex-col items-center bg-white pt-6 sm:justify-center sm:pt-0">
            <div >
                <Link href="/">
                    <img src={logo}
                    alt="Logo GK" className="h-20 fill-current text-gray-500" />
                </Link>
            </div>

            <div className="mt-6 w-full overflow-hidden px-6 py-4 shadow-md sm:max-w-md sm:rounded-lg glass morphism">
                {children}
            </div>
        </div>
    );
}
