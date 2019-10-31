

const initState = {
    todos: [
        { id: 0, text: '吃早餐' },
        { id: 1, text: '上學' },
        { id: 2, text: ' 吃午餐' },
    ],
    currentId: 2
}

const todoReducer = (state = initState, action) => {  //initState防止一開始取得的state是undefine
    //使用switch，讓不同的action透過reducer對store裡的state做不同的事情
    //javascript的物件是mutable
    switch (action.type) {
        case 'CREATE_TODO':
            const id = state.currentId + 1

            //store裡面的資料是不可變的immutable
            //但是javascript的物件是mutable，
            //所以先把object裡面的陣列/物件先assign到一個空間在對他進行操作！！
            return Object.assign({}, state, {
                todos: [
                    ...state.todos,
                    {
                        text: action.text,
                        //id: action.id   
                        id
                    }
                ],
                currentId: id 
            })
        case 'REMOVE_TODO':
            return Object.assign({}, state, {
                todos: state.todos.filter(todo => {   //filter:產生新的整列，而不是修改原本的
                    return todo.id !== action.id
                })
            })

        default:
            return state;
    }
}

export default todoReducer;