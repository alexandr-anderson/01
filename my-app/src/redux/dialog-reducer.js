const SEND_MESSAGE = 'SEND-MESSAGE';
const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY';

let initialState = {
        dialogs: [
            {id: 1, name: 'Dimych'},
            {id: 2, name: 'Andrey'},
            {id: 3, name: 'Sveta'},
            {id: 4, name: 'Sasha'},
            {id: 5, name: 'Valera'},
            {id: 6, name: 'Victor'}
        ],
        messages: [
            {id: 1, message: 'Hi'},
            {id: 2, message: 'How is your it-kamasutra'},
            {id: 3, message: 'Yo'}
        ],
        newMessageBody: ''

}

const dialogsReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'SEND-MESSAGE': {
            let body = state.newMessageBody
            let stateCopy = {...state};
            stateCopy.messages = [...stateCopy.messages]
            stateCopy.messages.push({id: 4, message: body})
            stateCopy.newMessageBody = '';
            return stateCopy;
        }
        case 'UPDATE-NEW-MESSAGE-BODY': {
            let stateCopy = {...state};
            stateCopy.newMessageBody = action.body;
            return stateCopy;
        }
        default :
            return state
    }
}
export const sendMessageCreator = () => ({type: SEND_MESSAGE})
export const updateNewMessageBodyCreator = (body) => ({
    type: UPDATE_NEW_MESSAGE_BODY, body: body
})
export default dialogsReducer;