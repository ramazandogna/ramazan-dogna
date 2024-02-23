import Link from 'next/link'
import Projects, { ProjectsType } from '../../types/project'
import Image from 'next/image'
import projects from './projects'
import { RoughNotation } from 'react-rough-notation'

export default function Projects() {
  return (
    <div className="globalWidth globalContainer">
      <h1>
        <RoughNotation animationDelay={400} type="highlight" color="yellow" show>
          <span> Projects </span>
        </RoughNotation>
      </h1>
      <div>This is projects section</div>
      <div className="mt-6 flex flex-col  gap-[32px]">
        {projects.map((project: ProjectsType, i) => (
          <div key={i} className="flex flex-col gap-1">
            <Link href={project.link}>
              <h2 className="m-0 p-0">{project.title}</h2>
            </Link>
            <p>{project.description}</p>
            <div className="flex gap-3">
              {project.icons.map((icon, j) => (
                <Image key={j} src={icon} alt="icon" width={16} height={16} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
