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
        title: "",
        subHeading: "I am quick learner of different technologies and have good technical skills in field of Web and programming",
    },
    skills: {
        "Frontend": "ReactJS , Bootstrap , HTML , CSS , JavaScript",
        "Backend": "NodeJs & Express",
        "Competitive Programming": "C++",
        "Tools": "Visual Studio Code , Git",
        "Favourite Subject": "DBMS ,Automata"
    },
    contact: {
        "message": "Looking for my first engergetic career opportunity",
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
                callToActionText: "Mail Me  ",
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
                    details: "I have used reactjs,react hooks basics error bounary,suspense, minimal basics,i learn to have Darkmode in webapps This is my portfolio",
                    livePreviewLink: "http://gotofolio.herokuapp.com/"
                },
                {
                    name: "Notekia",
                    subHeading: "Personalised To-do ,Pomodoro and much more",
                    details: "Notekia keeps all the important notes without any login ,It contains POMODORO as well and lot more features yet to come ",
                    livePreviewLink: "https://notekia.herokuapp.com/"
                },
                  {
                    name: "ShortLi",
                    subHeading: "URL shortening web-app",
                    details: "I have used ReactJs for frontend , NodeJs and mongodb for backend , Learn basics of redirecting ",
                    livePreviewLink: "https://shortliiibackend.herokuapp.com/"
                },
                {
                    name: "Localitee",
                    subHeading: "City Weather Web App ",
                    details: "I learn fetch API call to get the weather data,to use setState()It provides weather information of the city you want.",
                    livePreviewLink: "http://localitee.herokuapp.com/"
                },
                {
                    name: "Litecode",
                    subHeading: "A small template for Blogging site",
                    details: " Responsive design in ReactJS , a small template for a simple Blogging site.It is only a statis design  ",
                    livePreviewLink: "https://litecodee.herokuapp.com/"
                },
                {
                    name: "YouD Web App",
                    subHeading: "Youtube video downloader",
                    details: "  I have used npm librarie to create this app.It makes easy to download highest possible quality videos using there youtube links.  ",
                    livePreviewLink: "http://youd.herokuapp.com/"
                }
              
            ]
    }
};

export default details;