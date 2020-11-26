import firebase from 'firebase/app';
import 'firebase/database'; 

const get = (eventType, path, callback, singleData = false) => {
    const ref = firebase.database().ref(path)
    if(ref[eventType]) {
        ref[eventType]("value", data => {
            const fbData = !singleData ? Object.entries(data.val()).map(([key, value]) => ({key, value})) : [data.val()]
            callback(fbData)
        })
    }else{
        console.error(`[Firebase] Event ${eventType} doesn't exists. Options avaliables: ${Object.values(EVENT_TYPES).join("|")}`)
    }
}

const remove = (path) => {
    const ref = firebase.database().ref(path)
    ref.remove()
}

const add = (path, value) => {
    const ref = database().ref(path)
    ref.push(value)
}

const update = (path, value) => {    
    const ref = database().ref(path)
    ref.update(value)
}


const EVENT_TYPES = {
    ON: "on",
    ONCE: "once"
}

export {
    EVENT_TYPES,
    get,
    remove,
    add,
    update
}