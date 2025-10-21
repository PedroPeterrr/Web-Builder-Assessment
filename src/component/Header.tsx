import HeaderImage from '../assets/Header.webp';

export default function Header(){

  const ScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }

  return(
    <>
      <header className='sticky top-0 z-50 bg-white shadow-2xl flex justify-center'>
        <button
          onClick={ScrollToTop}
          className="cursor-pointer"
        >
          <img src={HeaderImage} className='h-15 md:h-20' alt="Header Title" />
        </button>

        <div
          className="absolute bottom-[-15px] left-1/2 -translate-x-1/2 z-10000
          w-0 h-0
          border-l-25 border-l-transparent 
          border-r-25 border-r-transparent 
          border-t-15 border-t-white"
        />
      </header>
    </>
  )
}