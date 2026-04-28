import { useState } from 'react'
import { DotLottieReact } from '@lottiefiles/dotlottie-react'
import { ALL_PETS, AGE_GROUPS, SIZES, AGE_GROUP_MAP } from '../data/pets.js'


const Pets = () => {
  const [search, setSearch] = useState('')
  const [ages, setAges] = useState([])
  const [sizes, setSizes] = useState([])

  const toggleFilter = (list, setList, value) => {
    setList(prev => prev.includes(value) ? prev.filter(v => v !== value) : [...prev, value])
  }

  const filtered = ALL_PETS.filter(pet => {
    const matchesSearch = pet.name.toLowerCase().includes(search.toLowerCase())
    const matchesAge = ages.length === 0 || ages.some(a => AGE_GROUP_MAP[a] === pet.ageGroup)
    const matchesSize = sizes.length === 0 || sizes.includes(pet.size)
    return matchesSearch && matchesAge && matchesSize
  })

  return (
    <>
      <div className="fixed right-4 bottom-4 z-20 w-[min(300px,32vw)] min-w-[300px] origin-bottom-right scale-[2] max-sm:right-2 max-sm:bottom-2 max-sm:w-[300px] pointer-events-none" aria-hidden="true">
        <DotLottieReact
          src="https://lottie.host/22ad055c-6095-4895-b8c0-62282cf7b04a/NOyZGDRUA7.lottie"
          loop
          autoplay
        />
      </div>

      {/* Top Section */}
      <section className="bg-[#f2f2f2] pt-10 pb-7">
        <div className="w-[min(1500px,calc(100%-96px))] mx-auto">
          <h1 className="animate-fade-up m-0 font-serif text-[clamp(46px,5vw,86px)] tracking-[-0.02em] text-[#0F2A44]">
            Adoptable Pets
          </h1>
          <p className="animate-fade-up-delay-1 mt-[18px] max-w-[900px] text-[#67686d] text-[20px] leading-[1.55]">
            Meet our wonderful dogs and cats waiting for their forever homes. Use the filters to match your pet.
          </p>
        </div>
      </section>

      {/* Body */}
      <section className="pb-20 pt-7">
        <div className="w-[min(1500px,calc(100%-96px))] mx-auto flex items-start gap-[38px] max-lg:flex-col">

          {/* Sidebar */}
          <aside className="animate-slide-left flex-[0_0_360px] pt-1.5 max-lg:w-full max-lg:max-w-[520px] max-sm:max-w-none" aria-label="Filters">
            {/* Search */}
            <label className="relative block">
              <svg className="absolute top-1/2 left-3.5 -translate-y-1/2 w-[18px] h-[18px] opacity-60 pointer-events-none" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/>
              </svg>
              <input
                type="search"
                placeholder="Search by name..."
                aria-label="Search by name"
                value={search}
                onChange={e => setSearch(e.target.value)}
                className="w-full border border-[#d7d7d9] rounded-lg py-[14px] pr-[14px] pl-11 text-lg bg-white shadow-[0_2px_8px_rgba(0,0,0,0.06)] outline-none"
              />
            </label>

            {/* Filters header */}
            <div className="mt-[26px] flex items-baseline justify-between gap-2.5">
              <h2 className="m-0 font-serif text-[26px] text-[#0F2A44]">Filters</h2>
              <button
                onClick={() => { setAges([]); setSizes([]) }}
                className="border-0 bg-transparent text-[#6c6d72] text-base cursor-pointer"
              >
                Reset
              </button>
            </div>
            <div className="h-px bg-[#d7d7d9] my-3.5" aria-hidden="true" />

            {/* Age filter */}
            <div>
              <h3 className="m-0 mb-3 text-lg text-[#0F2A44] font-bold">Age</h3>
              {AGE_GROUPS.map(group => (
                <label key={group} className="flex items-center gap-3 my-2.5 text-lg text-[#2f3034] cursor-pointer">
                  <input
                    type="checkbox"
                    checked={ages.includes(group)}
                    onChange={() => toggleFilter(ages, setAges, group)}
                    className="w-5 h-5 accent-[#2f3034]"
                  />
                  <span>{group}</span>
                </label>
              ))}
            </div>

            <div className="h-px bg-[#d7d7d9] my-3.5" aria-hidden="true" />

            {/* Size filter */}
            <div>
              <h3 className="m-0 mb-3 text-lg text-[#0F2A44] font-bold">Size</h3>
              {SIZES.map(size => (
                <label key={size} className="flex items-center gap-3 my-2.5 text-lg text-[#2f3034] cursor-pointer">
                  <input
                    type="checkbox"
                    checked={sizes.includes(size)}
                    onChange={() => toggleFilter(sizes, setSizes, size)}
                    className="w-5 h-5 accent-[#2f3034]"
                  />
                  <span>{size}</span>
                </label>
              ))}
            </div>
          </aside>

          {/* Pet cards */}
          <section className="flex-1 flex flex-wrap gap-7 pt-1" aria-label="Pets list">
            {filtered.length === 0 && (
              <p className="text-[#67686d] text-lg">No pets match your filters.</p>
            )}
            {filtered.map((pet, i) => (
              <article
                key={pet.name}
                className="pet-card flex-[1_1_320px] max-w-[420px] bg-[#f6f6f7] border border-[#d7d7d9] rounded-[14px] overflow-hidden shadow-[0_8px_16px_rgba(0,0,0,0.06)]"
                style={{ animation: `fadeUp 0.5s ${i * 0.1}s ease both` }}
              >
                <div className="h-[260px] overflow-hidden">
                  <img className="pet-card-img w-full h-full object-cover block" src={pet.img} alt={`Photo of ${pet.name}`} />
                </div>
                <div className="p-[18px_18px_20px] bg-[#f6f6f7]">
                  <div className="flex items-baseline justify-between gap-3.5">
                    <h3 className="m-0 font-serif text-[34px] tracking-[-0.01em] text-[#0F2A44]">{pet.name}</h3>
                    <p className="m-0 text-[#6c6d72] text-lg">{pet.sex}, {pet.age} yr{pet.age !== 1 ? 's' : ''}</p>
                    {pet.blurb && <p className="mt-2 mb-0 text-[#888] text-sm italic leading-snug">{pet.blurb}</p>}
                  </div>
                  <div className="flex gap-2.5 flex-wrap mt-3.5 mb-[18px]" aria-label="Traits">
                    {pet.traits.map((t, ti) => (
                      <span key={t} className="animate-tag-pop px-2.5 py-[7px] rounded-lg bg-[#ededee] text-[#6c6d72] text-sm" style={{ animationDelay: `${0.1 + ti * 0.07}s` }}>{t}</span>
                    ))}
                  </div>
                  <a
                    href="#"
                    className="block w-full text-center rounded-lg border-2 border-[#45464a] bg-[#f6f6f7] text-[#2f3034] py-[10px] text-base font-semibold no-underline"
                  >
                    I want to meet {pet.name}!
                  </a>
                </div>
              </article>
            ))}
          </section>

        </div>
      </section>
    </>
  )
}

export default Pets
