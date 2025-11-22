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
        value: 'Software Engineer | <b>Full Stack Developer</b>',
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
      '<b>Software Engineer</b> with <i>2+ years</i> of experience building scalable web applications using <b>Java</b>, <b>JavaScript</b>, <b>TypeScript</b>, and <b>React</b>. Proficient in <b>Spring Boot</b>, <b>Node.js</b>, <b>Docker</b>, and <b>AWS</b>, delivering secure, high-performance solutions.',
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
          value: '<i>08-2023</i>',
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
                'Spearheaded development of <b>Acquirer Cards UI</b> for millions of users, significantly improving accessibility and cross-device responsiveness.',
              display: true,
            },
            {
              value:
                'Migrated legacy Redux architecture to <b>Redux Toolkit + Redux Saga</b>, reducing boilerplate code by <i>35%</i> and accelerating feature delivery.',
              display: true,
            },
            {
              value:
                'Engineered dynamic dashboards and data visualization components using <b>React</b> & <b>D3.js</b> to derive actionable transaction insights.',
              display: true,
            },
            {
              value:
                'Optimized frontend performance, reducing initial load time by <b>28%</b> through implementation of lazy loading, code splitting, and bundle optimization.',
              display: true,
            },
          ],
        },
        location: {
          display: true,
          value: 'Bengaluru, India',
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
          value: '<i>02-2023</i>',
          display: true,
        },
        endDate: {
          value: '<i>08-2023</i>',
          display: true,
        },
        highlights: {
          display: true,
          value: [
            {
              value:
                'Developed an omnichannel transaction portal UI, integrating <b>REST APIs</b> and <b>WebSockets</b> to facilitate real-time data updates.',
              display: true,
            },
            {
              value:
                'Implemented complex form handling and validation architectures using <b>React Hook Form</b> and <b>Yup</b>.',
              display: true,
            },
            {
              value:
                'Optimized UI rendering for large datasets using virtualized lists, reducing memory usage and boosting scrolling performance by <b>40%</b>.',
              display: true,
            },
            {
              value:
                'Executed comprehensive unit and integration testing (Jest, React Testing Library), increasing frontend test coverage to <b>85%</b>.',
              display: true,
            },
          ],
        },
        location: {
          display: true,
          value: 'Bengaluru, India',
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
          value: '<i>2022-12</i>',
          display: true,
        },
        endDate: {
          value: '<i>2023-01</i>',
          display: true,
        },
        highlights: {
          display: true,
          value: [
            {
              value:
                'Architected student and mentor dashboards in <b>React.js</b> featuring responsive layouts and modular, reusable components.',
              display: true,
            },
            {
              value:
                'Designed interactive UI flows for course enrollment and progress tracking, resulting in a <b>25%</b> increase in user engagement.',
              display: true,
            },
          ],
        },
        location: {
          display: true,
          value: 'Remote',
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
          value: 'Birla Institute of Technology, Mesra',
          display: true,
        },
        display: true,
        url: {
          value: '',
          display: false,
        },
        stream: {
          value: '<b>Bachelor of Technology</b> <i>in</i> Computer Science',
          display: true,
        },
        degree: {
          value: 'B.Tech',
          display: true,
        },
        startDate: {
          value: '<i>2019</i>',
          display: true,
        },
        endDate: {
          value: '<i>2023</i>',
          display: true,
        },
        score: {
          value: 'GPA: <b>8.51</b> / 10.0',
          display: true,
        },
        relevantCoursework: {
          value:
            '<b>Relevant Coursework</b>: Data Structures & Algorithms (C++), Operating Systems, OOP, DBMS, System Design',
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
          value: '<b>Languages</b>',
          display: true,
        },
        keywords: {
          display: true,
          value: '<b>JavaScript (ES6+)</b>, <b>TypeScript</b>, <b>Java</b>, <b>C++</b>',
        },
        display: true,
      },
      {
        name: {
          value: '<b>Frameworks & Technologies</b>',
          display: true,
        },
        keywords: {
          display: true,
          value: 'React, Node.js, Spring Boot, Redux Toolkit, MongoDB, MySQL, Redis, WebSockets',
        },
        display: true,
      },
      {
        name: {
          value: '<b>Tools & DevOps</b>',
          display: true,
        },
        keywords: {
          display: true,
          value: 'Git, AWS, Docker, Linux, REST APIs, Jest',
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
          value:
            'Real-time collaborative code editor supporting multiple languages with instant execution.',
          display: true,
        },
        highlights: {
          display: true,
          value: [
            {
              value:
                'Built a <b>real-time</b> collaborative editor UI supporting syntax highlighting and instant code execution feedback.',
              display: true,
            },
            {
              value:
                'Integrated <b>WebSocket-based</b> synchronization to handle concurrent user edits with low latency.',
              display: true,
            },
            {
              value:
                'Designed a responsive, IDE-like experience featuring custom themes, keyboard shortcuts, and error highlighting.',
              display: true,
            },
          ],
        },
        skills: {
          display: true,
          value: '<b>Stack</b>: <i>React.js, Node.js, Docker, Redis, WebSockets</i>',
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
          value: 'View Source Code',
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
          value:
            'High-performance Java CLI tool utilizing <b>multithreading</b> for accelerated transfers.',
          display: true,
        },
        highlights: {
          display: true,
          value: [
            {
              value:
                'Developed a multithreaded downloader that accelerates file transfers by <b>55%</b> for large datasets compared to single-threaded solutions.',
              display: true,
            },
            {
              value:
                'Leveraged <b>HTTP range requests</b> to split files into chunks for parallel downloading, minimizing bandwidth bottlenecks.',
              display: true,
            },
            {
              value:
                'Integrated efficient thread pool management to lower CPU utilization by <b>20%</b> during peak loads.',
              display: true,
            },
          ],
        },
        skills: {
          display: true,
          value: '<b>Stack</b>: <i>Java, Multithreading, HTTP Protocol</i>',
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
      'Received the <b>Wells Fargo Spotlight Award (2024)</b> for outstanding performance and code contributions.',
      'Secured <b>14th place</b> among 200+ teams in the national level Re-Imagining Markets Datathon.',
      'Ranked in the <b>Top 1%</b> nationwide in JEE Advanced (2019) among 200,000+ candidates.',
    ],
  },
}

export const INITIAL_STRING = JSON.stringify(INITIAL_CONFIG, null, 2)
