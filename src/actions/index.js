export const websites = (name) => {
    switch(name){
        case "STATTRACKER":
        return {
            type: 'CHANGE',
            payload: {
                title: "Bball-Stat-Tracker",
                about: {
                    background: `A lot of players and coaches in basketball have used statistics to understand their strengths and weaknesses. Many young players in Iceland, for example, don't have any ways to access their stats. Here is Iceland coaches or players mostly inspect and remember, or use a notebook to write down what's going on during the game. \n

                    This calls for a need for a simpler, faster way to track player statistics and overall game statistics. This application gives anyone, including coaches and players, a way to visualize all information during the game easily, fast, simply and in real-time.`,
                    usage : `You can create a account or login. From there you can create a new basketball team and add players to the team, there you can give the players name, position and jersey number. When starting a game you need to have at least five players. Once the game is started you can add statistics in real-time while watching the game. At the end of the game you cann see statistics of team and players in team.`
                },
                tools: "Java Spring, PostgreSQL, Javascript",
                websites: {
                    isapi: false,
                    github: "https://github.com/alli959/Hugbunadarverkefni1",
                    demo: "https://bball-stat.herokuapp.com/"
                }
            }
        }



        case "GULLNESTI":
            return {
                type: "CHANGE",
                payload: {
                    title: "Gullnesti",
                    about: {
                        background: "I got this idea of doing an ordering service for a burger joint that I work at. I got this idea one day when there were exceptionally many customers ordering food and we were few people working that day. This day many people called and ordered food through the phone, which was bad because of how understaffed we were. Then I got the idea of creating an ordering service online for the burger joint. It proved more difficult than thought because of how much people change their orders.",
                        usage: "NOT FINISHED YET! \n click on food items you want, then you can change or finish order"
                    },
                    tools: "React, react-dom, react-redux, react-router-dom, redux, redux-thunk",
                    websites: {
                        isapi: true,
                        github: "https://github.com/alli959/lokaverkefni/tree/master/client",
                        api: "",
                        demo: "https://gullnesti.herokuapp.com/menu"

                    }
                }
            }

            default: 
                return {
                    type: "",
                payload: {
                    title: "",
                    about: {
                        background: "",
                        usage: ""
                    },
                    tools: "",
                    websites: {
                        isapi: false,
                        github: "",
                        api: "",
                        demo: ""

                    }
                }
            
            }
                

    }
}

export const Tab = (id,name) => {
    if(name === "TAB"){
        return {
            type: "TAB",
            payload: {
                id: id
            }
        }
    }
}

export const Location = (id) => {
    switch(id){
        case 0:
            return {
                type: "LOCATION",
                payload: {
                    pageLocation: [true,false,false,false]
                }
            }
        case 1:
            return {
                type: "LOCATION",
                payload: {
                    pageLocation: [false, true,false, false]
                }
            }
        case 2:
            return {
                type: "LOCATION",
                payload: {
                    pageLocation: [false, false, true, false]
                }
            }
        case 3:
            return {
                type: "LOCATION",
                payload: {
                    pageLocation: [false, false,false, true]
                }
            }
        default:
            return {
                type: "LOCATION",
                payload: {
                    pageLocation: [false, false,false, false]
                } 
            }
    }
}


export const webGl = (name) => {
    switch(name){
        case "FISHTANK":
            return {
                type: "WEBGL",
                payload: {
                    settings: {
                        url: "https://notendur.hi.is/alg35/T%c3%b6lvugraf%c3%adk/Verkefni%202/fish.html",
                        height: "530px",
                        width: "530px"
                    },
                    controls: "Scroll Down => Zoom In,Scroll Up => Zoom Out,(Hold) Mouse One => Move View"
                }
            }

        
        case "CHAIR":
            return {
                type: "WEBGL",
                payload: {
                    settings: {
                        url: "https://notendur.hi.is/~alg35/T%c3%b6lvugraf%c3%adk/heimaverkefni%204/chair.html",
                        height: "552px",
                        width: "552px"
                    },
                    controls: "(Hold) Mouse One => Move View"
                }
            }

        
        case "HELESPADE":
            return {
                type: "WEBGL",
                payload: {
                    settings: {
                        url: "https://notendur.hi.is/~alg35/T%c3%b6lvugraf%c3%adk/heimaverkefni%204/helespade.html",
                        height: "552px",
                        width: "552px"
                    },
                    controls: "(Hold) Mouse One => Move View"
                }
            }

        
        case "SOLKERFI":
            return {
                type: "WEBGL",
                payload: {
                    settings: {
                        url: "https://notendur.hi.is/~alg35/T%c3%b6lvugraf%c3%adk/heimaverkefni%204/solkerfi.html",
                        height: "552px",
                        width: "552px"
                    },
                    controls: "(Hold) Mouse One => Move View"
                }
            }


        case "ROBOTARM":
            return {
                type: "WEBGL",
                payload: {
                    settings: {
                        url: "https://notendur.hi.is/~alg35/T%c3%b6lvugraf%c3%adk/heimaverkefni%205/robotArmHH.html",
                        height: "552px",
                        width: "552px"
                    },
                    controls: "z/x => rotate stump,a/s => turn bottom arm,q/w => turn middle arm,rArrow and lArrow => turn top arm"
                }
            }

        
        case "PONG":
            return {
                type: "WEBGL",
                payload: {
                    settings: {
                        url: "https://notendur.hi.is/~alg35/T%c3%b6lvugraf%c3%adk/verkefni%201/spadi-orvar.html",
                        height: "690px",
                        width: "1030px"
                    },
                    controls: "rArrow and lArrow => move"
                }
            }

        
        default:
            return {
                type: 'NONE',
                payload: {
                    settings: {
                        url: "noUrl",
                        height: "0px",
                        width: "0px"
                    },
                    controls: "left Arrow = bla,rightarrow = blabla"
                    
                }
            }
    }

}   