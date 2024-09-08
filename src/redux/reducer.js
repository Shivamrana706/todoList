


export const todoData = (data = [], action) => {

    switch (action.type) {
        case 'ADD_TODO_DATA':
            return [action.data, ...data]

        case 'REMOVE_TODO_DATA':

            let removedData = data.filter((item) => item !== action.data)
            console.log("removedData", removedData)
            return removedData


        default:
            return []
    }
}