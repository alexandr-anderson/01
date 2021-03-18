const SEND_MESSAGE = 'SEND-MESSAGE';
const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY';


const dialogsReducer = (state, action) => {
    switch (action.type) {
        case 'SEND-MESSAGE':
            let body = state.newMessageBody
            state.messages.push({id: 4, message: body})
            state.newMessageBody = '';
            return state;
        case 'UPDATE-NEW-MESSAGE-BODY':
            state.newMessageBody = action.body;
            return state;
        default :
            return state
    }
}
export const sendMessageCreator = () => ({type: SEND_MESSAGE})
export const updateNewMessageBodyCreator = (body) => ({
    type: UPDATE_NEW_MESSAGE_BODY, body: body
})
export default dialogsReducer;