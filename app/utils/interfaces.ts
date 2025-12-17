export interface ILinks {
    name: string;
    path: string;
}

export interface IStairAnimation {
    initial: {
        top: string;
    };
    animate: {
        top: string;
    };
    exit: {
        top: string[];
    };
}

export interface ISocials {
    icon: React.ComponentType;
    path: string;
}

export interface ISocialStyles {
    containerStyles: string;
    iconStyles: string;
}

export interface IServices {
    num: string;
    title: string;
    description: string;
    href: string;
}

export interface IResumeTabs {
    value: string;
    text: string;
}

export interface IAboutMe {
    title: string;
    description: string;
}

export interface IExperience {
    icon: string,
    title: string,
    description: string,
    items: {
        company: string,
        position: string,
        duration: string
    }[]
}

export interface IEducation {
    icon: string,
    title: string,
    description: string,
    items: {
        institution: string,
        careerName: string,
        duration: string
    }[]
}

export interface ISkills {
    title: string;
    description: string;
    techAll: {
        icon: React.ComponentType,
        name: string
    }[],
    techFE: {
        icon: React.ComponentType,
        name: string
    }[],
    techBE: {
        icon: React.ComponentType,
        name: string
    }[],
    techMn: {
        icon: React.ComponentType,
        name: string
    }[],
    techDo: {
        icon: React.ComponentType,
        name: string
    }[]
}

export interface IProjects {
    num: string;
    category: string;
    title: string;
    description: string;
    stack: {
        name: string;
    }[];
    image: string;
    url?: string;
    github?: string;
}

export interface ICarrouselProps {
    projects: Array<{ url: string; github: string }>;
    handleSlideChange: (index: number) => void;
}

export interface IContactInfo {
    icon: React.ComponentType;
    title: string;
    content: string;
}

export interface IEmailData {
    name: string;
    email: string;
    message: string;
}

export interface testEmail {
    email: string
}
