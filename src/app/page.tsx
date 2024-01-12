import Link from 'next/link'

export default function Home() {
  return (
    <div className='flex h-screen flex-col gap-5 items-center justify-center p-6'>
      <div className='flex flex-row gap-1 items-center'>
        <h2 className='text-xl font-semibold bg-cyan-900 px-1 py-0.5 rounded-md'>Ark</h2>
        <h2 className='text-xl font-semibold'>Studios 合同会社</h2>
      </div>
      <h2 className='text-4xl md:text-6xl font-bold'>ただいま開発中</h2>
      <div className='flex flex-col gap-0 items-center'>
        <h2 className='md:text-xl font-extralight'>
          このウェブサイトは近日公開予定です。
        </h2>
        <h2 className='md:text-xl font-extralight'>今しばらくお待ちくださいませ。</h2>
      </div>
      <Link href='https://bitremote.app'>
        <h3 className='bg-white text-black font-medium py-2 px-4 rounded-xl'>弊社製品</h3>
      </Link>
    </div>
  )
}
