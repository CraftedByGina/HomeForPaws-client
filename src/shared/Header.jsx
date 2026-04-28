import { Link } from 'react-router'

const Header = () => {
  return (
    <header className="min-h-[82px] flex items-center justify-between gap-5 px-12 bg-[#f6f6f7]">
      <Link to="/" className="flex items-center gap-2.5 font-serif text-[34px] leading-none font-bold text-[#0F2A44] no-underline">
        <img className="w-[34px]" src="/icons/paw.svg" alt="" />
        <span>The Perfect Paw</span>
      </Link>
      <nav className="flex items-center gap-10" aria-label="Primary">
        <Link to="/pets" className="nav-link text-[#0F2A44] text-lg font-medium">Adoptable Pets</Link>
        <a href="#" className="nav-link text-[#0F2A44] text-lg font-medium">Adoption Course</a>
        <a href="#" className="nav-link text-[#0F2A44] text-lg font-medium">Donate</a>
      </nav>
      <button className="rounded-lg border-2 border-[#45464a] px-[18px] py-[10px] text-base font-semibold cursor-pointer bg-[#f6f6f7] text-[#333439]">
        Rescue Portal
      </button>
    </header>
  )
}

export default Header

