//物件沒有被出發是沒有作用的
//用dispatch關鍵字來出發
// {
//     type: ' CREATE_TODO', //讓reducer分辨該做什麼事使用的
//     payload: {  //reducer提供給action的參數,payload寫法沒有一定 
//         text: '上學',
//         id:3 
//     },  
// }

//給list key
//let nextStartId = 3;
export const createTodo = text => {
    return {
        type: 'CREATE_TODO', //讓reducer分辨該做什麼事使用的
        text: text,
        //id: nextStartId++,
    } 

}

export const removeTodo = id => {
    return {
        type: 'REMOVE_TODO', //讓reducer分辨該做什麼事使用的
        id,//如果變數名稱與屬性名稱是一樣的，可以這樣子寫
    }

}