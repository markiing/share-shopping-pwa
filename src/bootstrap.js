import * as firebase from "firebase/app";

const initializeFirebase = () => {
    try{
        const FB_CONFIG = {
            apiKey: __app.env.FB_APIKEY,
            authDomain: __app.env.FB_AUTHDOMAIN,
            databaseURL: __app.env.FB_DATABASEURL,
            projectId: __app.env.FB_PJID,
            appId: __app.env.FB_APPID,
        }
        firebase.default.initializeApp(FB_CONFIG)
    }catch(e){
        throw new Error("Could not initialize firebase", e)
    }
    
}

const StartConfiguration = () => {
    try{
        initializeFirebase()
    }catch(e){
        console.log('[Bootstrap Error] ', e)
    }
    
}



export default StartConfiguration