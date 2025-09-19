import Link from 'next/link'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Sahifa topilmadi - 404 | CLAMO',
  description: 'Siz qidirgan sahifa topilmadi. CLAMO litsenziyalash va akkreditatsiyalash markazining bosh sahifasiga qayting.',
  robots: {
    index: false,
    follow: true,
  },
}

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="max-w-md w-full text-center">
        <div className="mb-8">
          <h1 className="text-9xl font-bold text-[#23B3FC]">404</h1>
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            Sahifa topilmadi
          </h2>
          <p className="text-gray-600 mb-8">
            Kechirasiz, siz qidirgan sahifa mavjud emas yoki o&apos;chirilgan bo&apos;lishi mumkin.
          </p>
        </div>
        
        <div className="space-y-4">
          <Link
            href="/"
            className="inline-block bg-[#23B3FC] text-white px-6 py-3 rounded-lg hover:bg-[#1a9ce8] transition-colors"
          >
            Bosh sahifaga qaytish
          </Link>
          
          <div className="text-sm text-gray-500">
            <p>Yoki quyidagi sahifalardan birini tanlang:</p>
            <div className="mt-4 space-x-4">
              <Link href="/licensing" className="text-[#23B3FC] hover:underline">
                Litsenziyalash
              </Link>
              <Link href="/accreditation" className="text-[#23B3FC] hover:underline">
                Akkreditatsiyalash
              </Link>
              <Link href="/contacts" className="text-[#23B3FC] hover:underline">
                Aloqa
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
