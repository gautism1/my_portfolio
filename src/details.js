// Hey , that's nice you are here to update your details 
// Change text as you want or update the new fields 
// Add Social Profiles like facebook, tumblr etc as you need 
// Go to new project live , Update that too in projects section
// Change your page : message as quirky as you want
// Add as many navbar links 

const details = {
    navBar: {
        name: "VIPIN GAUTAM",
        navBarLinks: [
            {
                name: "Home",
                to: "/"
            },
            {
                name: "Skills",
                to: "/Skills"
            },
            {
                name: "Projects",
                to: "/Projects"
            },
            {
                name: "Contact",
                to: "/Contact"
            }
        ]
    },
    home: {
        name: "VIPIN GAUTAM",
        title: "NOOB Youtuber,",
        subHeading: "I am quick learner of different technologies and good technical skills in field of Web and competitve programming",
    },
    skills: {
        "Frontend": "ReactJS , Bootstrap , HTML , CSS , JavaScript",
        "Backend": "NodeJs & Express",
        "Competitive Programming": "C++",
        "Tools": "Visual Studio Code , Git",
        "Favourite Subject": "Operating Systems"
    },
    contact: {
        "message": "Looking for Summer Internship",
        socialProfiles: [
            {
                name: "New Youtube channel",
                subHeading: "Recently created youtube channel to educate Bootstrap to begineers in Hindi",
                callToActionText: "Subscribe Here",
                callToActionLink: "https://www.youtube.com/channel/UCXsAeW2EOm-1RN3WeyxCVFA"
            },
            {
                name: "Linked",
                subHeading: "I post my project updates on linkedin , ",
                callToActionText: "Follow Me for next project  updates",
                callToActionLink: "https://www.linkedin.com/in/vipin-gautam-b95531186/"
            },
            {
                name: "Github",
                subHeading: "Shoot your pull request to fix bugs / for new updates ",
                callToActionText: "Repo Link",
                callToActionLink: "https://github.com/gautism1/my_portfolio"
            },
            {
                name: "Mail",
                subHeading: "Always on experiment mood , Feel free to contact",
                callToActionText: "Mail Me ",
                callToActionLink: "mailto:vipingautam.m@gmail.com",
            },
        ]

    },
    projects: {
        "message": "Projects & Experiments",
        projectDetails:
            [
                {
                    name: "My Gotofolio",
                    subHeading: "Open Source Project",
                    details: "I have used reactjs,react hooks basics error bounary,suspense, minimal basics,i learn to have Darkmode in webapps This is my portfolioc",
                    livePreviewLink: "http://gotofolio.herokuapp.com/"
                },
                {
                    name: "Localitee",
                    subHeading: "City Weather Web App ",
                    details: "I learn fetch API call to get the weather data,to use setState()It provides weather information of the city you want.",
                    livePreviewLink: "http://localitee.herokuapp.com/"
                },
                {
                    name: "YouD Web App",
                    subHeading: "Youtube video downloader",
                    details: "  I have used npm librarie to create this app.It makes easy to download highest possible quality videos using there youtube links.  ",
                 
                    livePreviewLink: "http://youd.herokuapp.com/"
                },
                {
                    name: "Calci",
                    subHeading: "Hub of Indian Financial Calculators",
                    details: "Learn to make react routes in this.Different types of calculators that are used in daily life(THIS IS UNDER DEVELOPMENT",
                    livePreviewLink: "http://calculatorzone.herokuapp.com/"
                }


            ]
    }
};

export default details;