import Link from 'next/link';
import { ArrowRight } from 'lucide-react'; // lucide-react ikonalar kutubxonasi

export default function Custom404() {
    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-700 via-blue-500 to-indigo-600 text-white px-4">
            <div className="text-center space-y-6">
                <h1 className="text-8xl font-extrabold animate-bounce">404</h1>
                <p className="text-2xl sm:text-3xl font-medium">Kechirasiz, sahifa topilmadi!</p>
                <Link
                    href="/"
                    className="inline-flex items-center gap-2 bg-white text-gray-900 px-6 py-3 rounded-xl text-lg font-semibold shadow-md hover:bg-blue-100 transition-all duration-300"
                >
                    Bosh sahifaga qaytish <ArrowRight size={20} />
                </Link>
            </div>
        </div>
    );
}

