import NavigationBar from '../components/navigation-bar'

export default function Page() {
  return (
    <div>
      <NavigationBar />
      <section className='flex h-[200vh] items-start justify-center'>
        <div className='flex h-screen items-center'>
          <p className='select-none text-8xl font-black opacity-75'>WIP</p>
        </div>
      </section>
    </div>
  )
}
