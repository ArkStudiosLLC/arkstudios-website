import Link from 'next/link'

export default function Page() {
  return (
    <div className='flex h-screen flex-col items-center justify-center gap-5 bg-white p-6 dark:bg-black'>
      <div className='flex flex-row items-center gap-1'>
        <h2 className='rounded-md bg-cyan-900 px-1 py-0.5 text-xl font-semibold text-white'>
          Ark
        </h2>
        <h2 className='text-xl font-semibold'>Studios 合同会社</h2>
      </div>
      <h2 className='text-4xl font-bold md:text-6xl'>ただいま開発中</h2>
      <div className='flex flex-col items-center gap-0'>
        <h2 className='font-extralight md:text-xl'>
          このウェブサイトは近日公開予定です。
        </h2>
        <h2 className='font-extralight md:text-xl'>今しばらくお待ちくださいませ。</h2>
      </div>
      <Link href='https://bitremote.app'>
        <h3 className='rounded-xl bg-black px-4 py-2 font-medium text-white dark:bg-white dark:text-black'>
          弊社製品
        </h3>
      </Link>
    </div>
  )
}
