const INITAL_STATE = {
    activeLesson: {},
    activeModule: {},
    modules: [
        {
            id: 1, 
            title: 'Introdução ao módulo',
            lessons:[
                {id:1, title:'Introdução'},
                {id:2, title:'O que é'},
                {id:3, title:'Onde usar'},
                {id:4, title:'Como Usar'}
            ]
        },
        {
            id: 2, 
            title: 'Como Usar',
            lessons:[
                {id:5, title:'Características'},
                {id:6, title:'Montagem'},
                {id:7, title:'Configuração'},
                {id:8, title:'Uso'}
            ]
        }
    ]
}

export default function course(state = INITAL_STATE, action){
    console.log(action)
    if (action.type === 'TOGGLE_LESSON'){
        console.log({...state, activeLesson: action.lesson, activeModule: action.module})
        return {...state, activeLesson: action.lesson, activeModule: action.module}
    }
    
    return state
}