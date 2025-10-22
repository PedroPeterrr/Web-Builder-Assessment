import { HeaderImage } from "../assets/assets";

export default function Header(){

  const ScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }

  return(
    <header className='sticky top-0 z-50 bg-white shadow-2xl flex justify-center'>
      <button
        onClick={ScrollToTop}
        className="cursor-pointer"
      >
        <img src={HeaderImage} className='h-15 md:h-20' alt="Header Title" />
      </button>
    </header>
  )
}