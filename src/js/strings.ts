import LocalizedStrings from "react-localization"

const home = new LocalizedStrings({
    en: {
        message: "Get in touch",
        work: "Work",
        services: "Services",
        about: "About",
        privacy: "Privacy statement and legal notice",
        location: "HCM, VietNam"
    },
})

const work = new LocalizedStrings({
    en: {
        headline: "Work",
        intro: "Here's a selection projects I've recently worked on.",
        collaboration: "Collaboration with"
    },
})

const services = new LocalizedStrings({
    en: {
        headline: "Services",
        intro: "Got ideas for the web of tomorrow? Let me help you turn them into reality!",
        section1: {
            headline: "3D on the web",
            intro: "I can help you implement innovative 3D concepts - from prototype to finished product.",
            ul: {
                li1: "Consulting, conception and implementation",
                li2: "Visualization of 3D models and scenes",
                li3: "Interaction and animation",
                li4: "3D data visualization",
                li5: "Game development",
                li6: "Virtual- und augmented reality",
                li7: "360° content",
                li8: "Visual effects and shader programming",
            }
        },
        section2: {
            headline: "Front-end development",
            intro: "I can help you develop web apps and websites that represent you, your business or your product perfectly.",
            ul: {
                li1: "Consulting, conception and implementation",
                li2: "Interactive web apps with a special focus on intuitivity und user experience",
                li3: "One page applications",
                li4: "Implementation of design templates",
                li5: "Animations",
                li6: "Responsive web design",
                li7: "Digital experiences that push the boundaries of conventional websites"
            }
        },
        section3: {
            headline: "Artificial Intelligence",
            intro: "I can help you develop AI product that applied the SOTA model in AI field",
            ul: {
                li1: "Consulting, conception and implementation",
                li2: "Build Model with high performance",
                li3: "Can integrate with other product esally",
                li4: "Implementation of design templates"
            }
        },
        technologies: "Here are some of my favorite technologies:"
    },
    
})

const message = new LocalizedStrings({
    en: {
        headline: "Get in touch",
        intro: "Want to work with me? Or just say hello? Drop me a line, I'll get back to you soon.",
        subject: "Subject",
        messageText: "Message",
        messageThankYou: "Thank you for your message.",
        messageReply: "I'll get back to you as soon as possible!",
        messageSorry: "Sorry for the inconvenience.",
        messageErrorUnknown: "Uh. Oh. Something went wrong.",
        messageError400: "The server has rejected the data you entered.",
        messageErrorTryAgain: "Please try again later.",
    },
})

const about = new LocalizedStrings({
    en: {
        headline: "About",
        aboutText1: "Hi, I'm Le Van Pon, Software Engineer specializing on AI, Web",
        aboutText2: "The internet has the power to democratize brand-new, innovative concepts and make them available to anyone. Over time I've developed a deep passion for ideas and technologies that push the boundaries of modern web development.",
        aboutText3: "Freelancing allows me to work on projects in which I can convert this passion into reality. Through academic degrees (B.Sc Computer Science) and years of experience in web projects and AI projects, I've developed a deep understanding of web development and AI development, as well as wide-spread hands-on expertise.",
        aboutText4: "When I'm not working I get inspired by things that allow me to leave my comfort zone and grow. I love visiting events, and to travel, diving head-first into foreign cultures."
    },
})

const privacy = new LocalizedStrings({
    en: {
        headline: "Privacy statement and legal information",
        privacyStatement: "Privacy statement",
        privacyStatementText: "This website uses Google Analytics, a service which transmits website traffic data to Google servers. This instance of Google Analytics does not identify individual users or associate your IP address with any other data held by Google. Reports provided by Google Analytics are used to help understand website traffic and webpage usage. You may opt out of this tracking at any time by activating the \"Do Not Track\" setting in your browser.",
        legalInfo: "Legal information"
    },
})

export { home, about, message, privacy, services, work }