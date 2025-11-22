import Header from '../views/two-col/header/header'
import Summary from '../views/two-col/summary/summary'
import Experience from '../views/two-col/experience/experience'
import Project from '../views/two-col/project/project'
import Education from '../views/two-col/education/education'
import Skills from '../views/two-col/skills/skills'
import Achievements from '../views/two-col/achievements/achievement'

export const SECTION_KEYS = {
  HEADER: 'header',
  SUMMARY: 'summary',
  WORK: 'work',
  EDUCATION: 'education',
  PROJECTS: 'projects',
  SKILLS: 'skills',
  ACHIEVEMENTS: 'achievements',
}

export const resumeRegistry = {
  [SECTION_KEYS.HEADER]: {
    component: Header,

    getProps: (data) => ({ headerData: data.header }),

    isVisible: (data) => data.header?.display,
  },
  [SECTION_KEYS.SUMMARY]: {
    component: Summary,
    getProps: (data) => ({ summaryData: data.summary }),
    isVisible: (data) => data.summary?.display && data.summary?.value,
  },
  [SECTION_KEYS.WORK]: {
    component: Experience,
    getProps: (data) => ({ experiencesData: data.work }),
    isVisible: (data) => data.work?.display && data.work?.value?.length > 0,
  },
  [SECTION_KEYS.PROJECTS]: {
    component: Project,
    getProps: (data) => ({ projectsData: data.projects }),
    isVisible: (data) => data.projects?.display && data.projects?.value?.length > 0,
  },
  [SECTION_KEYS.EDUCATION]: {
    component: Education,
    getProps: (data) => ({ educationData: data.education }),
    isVisible: (data) => data.education?.display && data.education?.value?.length > 0,
  },
  [SECTION_KEYS.SKILLS]: {
    component: Skills,
    getProps: (data) => ({ skillsData: data.skills }),
    isVisible: (data) => data.skills?.display && data.skills?.value?.length > 0,
  },
  [SECTION_KEYS.ACHIEVEMENTS]: {
    component: Achievements,
    getProps: (data) => ({ achievementsData: data.achievements }),
    isVisible: (data) => data.achievements?.display && data.achievements?.value?.length > 0,
  },
}
