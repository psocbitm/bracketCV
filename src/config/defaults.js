export const INITIAL_CONFIG = {
  header: {
    display: true,
    value: {
      firstName: {
        value: 'Palash',
        display: true,
      },
      lastName: {
        value: 'Asati',
        display: true,
      },
      designation: {
        value: '<b>Software Engineer</b> | Full Stack Developer',
        display: true,
      },
      contactInfos: {
        value: [
          {
            url: 'tel:7061704857',
            text: '7061704857',
            display: true,
            type: 'phone',
          },
          {
            url: 'mailto:palashasati1@gmail.com',
            text: 'palashasati1@gmail.com',
            display: true,
            type: 'email',
          },
          {
            url: 'https://github.com/psocbitm',
            text: 'github.com/psocbitm',
            display: true,
            type: 'github',
          },
          {
            url: 'https://www.linkedin.com/in/palashasati/',
            text: 'linkedin.com/in/palashasati',
            display: true,
            type: 'linkedin',
          },
        ],
        display: true,
      },
    },
  },
  summary: {
    value:
      '<b>Software Engineer</b> with <b>2+ years</b> of experience building backend and full stack applications using <b>Java</b>, <b>Spring Boot</b>, and <b>REST APIs</b>. Experienced in production systems, high-volume transaction flows, and delivering reliable features in enterprise environments.',
    display: true,
  },
  work: {
    display: true,
    value: [
      {
        name: {
          value: 'Wells Fargo',
          display: true,
        },
        position: {
          value: '<b>Software Engineer</b>',
          display: true,
        },
        url: {
          value: '',
          display: false,
        },
        startDate: {
          value: '<i>Aug-2023</i>',
          display: true,
        },
        endDate: {
          value: '<i>Present</i>',
          display: true,
        },
        highlights: {
          display: true,
          value: [
            {
              value:
                'Developed Acquirer Cards support enabling non-Wells Fargo cards to operate on Wells Fargo ATMs across multiple regions.',
              display: true,
            },
            {
              value:
                'Improved frontend state management by migrating to Redux Toolkit, reducing code duplication and improving maintainability.',
              display: true,
            },
            {
              value:
                'Resolved <b>90+ defects</b> across DEV and UAT environments through root cause analysis and coordinated fixes.',
              display: true,
            },
            {
              value:
                'Automated manual finance workflows using UiPath RPA, reducing operational effort and turnaround time.',
              display: true,
            },
          ],
        },
        location: {
          display: true,
          value: '<i>Bengaluru, India</i>',
        },
        display: true,
      },
      {
        name: {
          value: 'Wells Fargo',
          display: true,
        },
        position: {
          value: '<b>Program Associate</b>',
          display: true,
        },
        url: {
          value: '',
          display: false,
        },
        startDate: {
          value: '<i>Feb-2023</i>',
          display: true,
        },
        endDate: {
          value: '<i>Aug-2023</i>',
          display: true,
        },
        highlights: {
          display: true,
          value: [
            {
              value:
                'Contributed to Spring Boot middleware handling <b>5M+ daily transactions</b> across multiple banking channels.',
              display: true,
            },
            {
              value:
                'Implemented backend features using Java, MongoDB, Oracle, and REST APIs for an omnichannel platform.',
              display: true,
            },
            {
              value:
                'Supported production issues and improved stability of Java-based microservices.',
              display: true,
            },
          ],
        },
        location: {
          display: true,
          value: '<i>Bengaluru, India</i>',
        },
        display: true,
      },
      {
        name: {
          value: 'Camp Yellow',
          display: true,
        },
        position: {
          value: '<b>Full Stack Developer Intern</b>',
          display: true,
        },
        url: {
          value: '',
          display: false,
        },
        startDate: {
          value: '<i>Dec-2022</i>',
          display: true,
        },
        endDate: {
          value: '<i>Jan-2023</i>',
          display: true,
        },
        highlights: {
          display: true,
          value: [
            {
              value:
                'Built REST and GraphQL APIs using Node.js to enable frontend-backend communication.',
              display: true,
            },
            {
              value: 'Designed MongoDB schemas and indexes to support efficient data access.',
              display: true,
            },
          ],
        },
        location: {
          display: true,
          value: '<i>Remote</i>',
        },
        display: true,
      },
    ],
  },
  education: {
    display: true,
    value: [
      {
        institution: {
          value: 'Birla Institute of Technology',
          display: true,
        },
        display: true,
        url: {
          value: '',
          display: false,
        },
        stream: {
          value: '<b>B.Tech</b> in Computer Science',
          display: true,
        },
        degree: {
          value: 'B.Tech',
          display: true,
        },
        startDate: {
          value: '<i>Jul-2019</i>',
          display: true,
        },
        endDate: {
          value: '<i>May-2023</i>',
          display: true,
        },
        score: {
          value: 'GPA: <b>8.51</b> / 10',
          display: true,
        },
        relevantCoursework: {
          value:
            'Data Structures & Algorithms, Operating Systems, Object Oriented Programming, Database Management Systems, System Design',
          display: true,
        },
      },
    ],
  },
  skills: {
    display: true,
    value: [
      {
        name: {
          value: 'Languages',
          display: true,
        },
        keywords: {
          display: true,
          value: 'Java, JavaScript, TypeScript, C++',
        },
        display: true,
      },
      {
        name: {
          value: 'Frameworks & Technologies',
          display: true,
        },
        keywords: {
          display: true,
          value:
            'Spring Boot, React, Node.js, Redux Toolkit, MySQL, MongoDB, Redis, WebSocket, Express.js',
        },
        display: true,
      },
      {
        name: {
          value: 'Tools & Others',
          display: true,
        },
        keywords: {
          display: true,
          value: 'Git, Linux, REST APIs, Docker, AWS',
        },
        display: true,
      },
    ],
  },
  projects: {
    display: true,
    value: [
      {
        name: {
          value: 'SnappyDuck',
          display: true,
        },
        description: {
          value: 'Real-time online code compiler.',
          display: false,
        },
        highlights: {
          display: true,
          value: [
            {
              value:
                'Built a real-time online code compiler supporting C++, Java, Python, and JavaScript.',
              display: true,
            },
            {
              value: 'Used Redis to manage concurrent code execution requests.',
              display: true,
            },
            {
              value:
                'Executed user code inside Docker containers to ensure isolation and security.',
              display: true,
            },
            {
              value: 'Delivered execution output using WebSockets for real-time updates.',
              display: true,
            },
          ],
        },
        skills: {
          display: true,
          value: 'Docker, Redis, React, Node.js, WebSockets',
        },
        startDate: {
          value: '',
          display: false,
        },
        endDate: {
          value: '',
          display: false,
        },
        url: {
          value: 'https://github.com/psocbitm',
          display: true,
        },
        display: true,
      },
      {
        name: {
          value: 'Parallel File Downloader',
          display: true,
        },
        description: {
          value: 'Java-based multithreaded downloader.',
          display: false,
        },
        highlights: {
          display: true,
          value: [
            {
              value:
                'Implemented a Java-based downloader using multithreading to improve download speed.',
              display: true,
            },
            {
              value: 'Used HTTP range requests to download file segments in parallel.',
              display: true,
            },
            {
              value: 'Optimized thread usage to reduce unnecessary CPU overhead.',
              display: true,
            },
          ],
        },
        skills: {
          display: true,
          value: 'Java, Multithreading',
        },
        startDate: {
          value: '',
          display: false,
        },
        endDate: {
          value: '',
          display: false,
        },
        url: {
          value: '',
          display: false,
        },
        display: true,
      },
    ],
  },
  achievements: {
    display: true,
    value: [
      'Secured <b>14th place</b> among 200+ teams in the Re-Imagining Markets Datathon.',
      'Received the <b>Wells Fargo Spotlight Award</b> in <i>2024</i>.',
      'Ranked in the <b>top 1%</b> nationwide in JEE Advanced (<i>2019</i>).',
    ],
  },
}

export const INITIAL_STRING = JSON.stringify(INITIAL_CONFIG, null, 2)
