import { ProjectsType } from '../../types/project'
import icons from './icon'
const projects: ProjectsType[] = [
  {
    title: 'Project 1',
    description: 'This is project 1',
    link: '',
    icons: [icons.typescript, icons.vue]
  },
  {
    title: 'Project Emma',
    description: 'This is project 2',
    link: '',
    icons: [icons.typescript, icons.vue, icons.react, icons.nextjs, icons.css, icons.vue]
  }
]

export default projects
