export default function Navbar() {
  return (
    <nav className="w-100vw fixed left-0 right-0 top-0 z-10 flex bg-[#ffffff40] px-2 py-3 backdrop-blur-xl">
      <div className="globalWidth flex items-center">
        <div className="flex h-8 w-10 items-center justify-center rounded bg-[#f1e7db] text-[18px] font-semibold">
          レイ
        </div>
        <ul className="ml-auto flex items-center gap-2 font-medium leading-[1.75]">
          <li className="cursor-pointer">Projects</li>
          <li className="cursor-pointer">Writes</li>
          <li className="cursor-pointer">Tags</li>
          <li className="flex h-8 w-8 cursor-pointer items-center justify-center rounded bg-[#f1e7db]">
            D
          </li>
        </ul>
      </div>
    </nav>
  )
}
