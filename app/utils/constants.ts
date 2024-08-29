import { IAboutMe, IContactInfo, IEducation, IExperience, ILinks, IProjects, IResumeTabs, IServices, ISkills, ISocials, IStairAnimation } from "./interfaces";
import {
    SiJavascript,
    SiTypescript,
    SiNextdotjs,
    SiExpress,
    SiMongodb,
    SiJest,
    SiTestinglibrary,
    SiDatadog,
    SiNewrelic,
    SiNginx
  } from "react-icons/si";
  import {
    FaGithub,
    FaLinkedinIn,
    FaReact,
    FaNodeJs,
    FaSass,
    FaEnvelope
  } from "react-icons/fa";

export const links: ILinks[] = [
    {
        name: "home",
        path: "/",
    },
    {
        name: "servicios",
        path: "/services",
    },
    {
        name: "experiencia",
        path: "/resume",
    },
    {
        name: "trabajos",
        path: "/work",
    },
    {
        name: "contacto",
        path: "/contact",
    }
]

export const stairAnimation: IStairAnimation = {
    initial: {
        top: "0%",
    },
    animate: {
        top: "100%"
    },
    exit: {
        top: ["100%", "0%"],
    }
}

export const GHURL: string = 'https://github.com/CapitanLooK'
export const LIURL: string = 'https://www.linkedin.com/in/alejandrodanielmaure'

export const socials: ISocials[] = [
    {
      icon: FaGithub,
      path: GHURL
    },
    {
      icon: FaLinkedinIn,
      path: LIURL
    }
  ]

export const services: IServices[] = [
    {
        num: "01",
        title: "Webs",
        description: "Desarrollo de Paginas web para empresas y particulares",
        href: ""
    },
    {
        num: "02",
        title: "Documentación",
        description: "Armado de documentacion para proyectos de software",
        href: ""
    },
    {
        num: "03",
        title: "Consultoría Técnica",
        description: "Asesoramiento y consultoría técnica para optimizar y mejorar proyectos de software",
        href: ""
    },
    {
        num: "04",
        title: "Mantenimiento y soporte",
        description: "Servicios de mantenimiento y soporte técnico para asegurar el correcto funcionamiento de aplicaciones y sitios web",
        href: ""
    }
]

export const ResumeTabs: IResumeTabs[] = [
    {
        value: 'experience',
        text: 'experiencia'
    },
    {
        value: 'education',
        text: 'educación'
    },
    {
        value: 'skills',
        text: 'tecnologias'
    },
    {
        value: 'about',
        text: 'sobre mi'
    }
]

export const aboutMe: IAboutMe = {
    title: "About Me",
    description: "Soy desarrollador de software con 2 años de experiencia. Me especializo en el desarrollo de aplicaciones web y móviles con diferentes tecnologías.",
}


export const experience: IExperience = {
    icon: 'public/assets/badge.svg',
    title: 'Experience',
    description: 'lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut purus eget nunc. Donec',
    items: [
        {
            company: "MercadoLibre SA",
            position: "Software Engineer",
            duration: "2022 - 2024",
        },
        {
            company: "Freelance",
            position: "Desarrollador Web",
            duration: "2020 - Presente",
        },
        {
            company: "CoderHouse",
            position: "Tutor FE & BE",
            duration: "2021 - Presente",
        }
    ]
}

export const education: IEducation = {
    icon: 'public/assets/cap.svg',
    title: 'Education',
    description: 'lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut purus eget nunc. Donec',
    items: [
        {
            institution: "Universidad",
            careerName: "IRSO",
            duration: "2023-2026",
        },
        {
            institution: "CoderHouse",
            careerName: "Full Stack",
            duration: "2020 - 2021",
        },
    ]
}

export const skills: ISkills = {
    title: 'My Skills',
    description: 'lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut purus eget nunc. Donec',
    techAll: [
        {
            icon: SiJavascript,
            name: 'JavaScript'
        },
        {
            icon: SiTypescript,
            name: 'TypeScript'
        }

    ],
    techFE: [
        {
            icon: FaReact,
            name: 'React'
        },
        {
            icon: SiNextdotjs,
            name: 'Next.js'
        },
        {
            icon: FaSass,
            name: 'Sass'
        },
        {
            icon: SiJest,
            name: 'Jest'
        },
        {
            icon: SiTestinglibrary,
            name: 'Testing Library'
        }
    ],
    techBE: [
        {
            icon: FaNodeJs,
            name: 'Node.js'
        },
        {
            icon: SiMongodb,
            name: 'MongoDB'
        },
        {
            icon: SiExpress,
            name: 'Express'
        },

        {
            icon: SiNginx,
            name: 'Nginx'
        },
        {
            icon: SiDatadog,
            name: 'Datadog'
        },
        {
            icon: SiNewrelic,
            name: 'New Relic'
        },


    ],
}

export const projects: IProjects[] = [
    {
        num: "01",
        category: 'frontend',
        title: 'Oca Tracker',
        description: 'Servicio alternativo para busqueda de paquetes de correo OCA Argentina',
        stack: [
            {
                name: 'React.js'
            },
            {
                name: 'Next.js'
            },
            {
                name: 'TailwindCSS'
            },
        ],
        image: '/assets/oca-tracker.png',
        url: 'https://oca-tracker.vercel.app/',
        github: 'https://github.com/CapitanLooK/oca-tracker'
    },
    {
        num: "02",
        category: 'frontend',
        title: 'Portfolio Personal',
        description: 'Portfolio personal para revisar el codigo del proyecto.',
        stack: [
            {
                name: 'React.js'
            },
            {
                name: 'Next.js'
            },
            {
                name: 'TailwindCSS'
            },
            {
                name: 'Framer Motion'
            }
        ],
        image: '/assets/portfolio.png',
        url: 'https://secta.netlify.app/',
        github: ''
    },
    {
        num: "03",
        category: 'backend',
        title: 'CRUD API REST',
        description: 'CRUD para demostrar el uso de una API REST con Node.js',
        stack: [
            {
                name: 'Node.js'
            },
            {
                name: 'Next.js'
            },
            {
                name: 'MongoDB'
            },
        ],
        image: '/assets/api-rest.jpeg',
        url: 'https://github.com/CapitanLooK/mongo-next-crud',
        github: 'https://github.com/CapitanLooK/apiNode'
    },
    {
        num: "04",
        category: 'frontend',
        title: 'Secta Cerveceria',
        description: 'Landing page para fabrica de cerveza artesanal',
        stack: [
            {
                name: 'HTML'
            },
            {
                name: 'SASS'
            }
        ],
        image: '/assets/secta.png',
        url: 'https://secta.netlify.app/',
        github: 'https://github.com/CapitanLooK/Secta'
    },
    {
        num: "05",
        category: 'frontend',
        title: '7 Days to Die APP',
        description: 'APP simple para ver si el dia corresponde a la noche de horda',
        stack: [
            {
                name: 'React.js'
            },
            {
                name: 'Next.js'
            },
            {
                name: 'TailwindCSS'
            }
        ],
        image: '/assets/7dtd.png',
        url: 'https://sevendaysapp-btn3hpmot-capitanlook.vercel.app/',
        github: 'https://github.com/CapitanLooK/sevenDaysToDieApp'
    },
]

export const contactInfo: IContactInfo = {
    icon: FaEnvelope,
    title: 'Email',
    content: 'alejandrodanielmaure@gmail.com'

}