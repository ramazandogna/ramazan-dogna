import Image from 'next/image'
import icons from '../assets/icons'
import { Icon } from '@/types/icons'
import Link from 'next/link'
import { RoughNotationGroup, RoughNotation } from 'react-rough-notation'
export default function Home() {
  return (
    <main className="globalWidth globalContainer h-100vh">
      <h1 className="relative">
        Hey, Its Ramazan DOĞAN{' '}
        <span className="absolute top-2 text-[12px] opacity-50">レイ</span>
      </h1>
      <span>Lorem Ipsum is</span>
      <RoughNotation animationDelay={400} type="highlight" color="#00000050" show>
        <span> simply dummy </span>
      </RoughNotation>
      <span>
        text of the printing and typesetting industry. Lorem Ipsum has been the industry
        standard dummy text ever since the 1500s, when an unknown printer took a galley of
        type and scrambled it to make a type specimen book.
      </span>

      <RoughNotation
        animationDelay={1500}
        type="bracket"
        strokeWidth={3}
        brackets={['left', 'right']}
        color="#00000050"
        show
      >
        <div className="mt-4">
          It has survived not only five centuries, but also the leap into electronic
          typesetting, remaining essentially unchanged.
        </div>

        <span> It was popularised in the </span>
        <RoughNotation
          type="circle"
          animationDelay={1200}
          color="#00000050"
          strokeWidth={2}
          show
        >
          <span> 1960s </span>
        </RoughNotation>
        <span>
          with the release of Letraset sheets containing Lorem Ipsum passages, and more
          recently with desktop publishing software like Aldus PageMaker including
          versions of Lorem Ipsum.
        </span>
      </RoughNotation>
      <ul className="mt-4 flex gap-2">
        {icons.map((icon: Icon, i: number) => (
          <Link
            key={i}
            href={icon.link}
            target="_blank"
            className="flex h-7 w-7 items-center justify-center rounded bg-[#ffffff0] transition-all hover:scale-[105%] active:scale-[98%]"
          >
            <li>
              <Image className="" src={icon.src} alt="icon.name" width={18} height={18} />
            </li>
          </Link>
        ))}
      </ul>
    </main>
  )
}
