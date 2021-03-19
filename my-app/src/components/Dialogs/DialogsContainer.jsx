import React from 'react';
import {sendMessageCreator, updateNewMessageBodyCreator} from "../../redux/dialog-reducer";
import Dialogs from "./Dialogs";

const DialogsContainer = (props) => {

    let state = props.store.getState();

    let onSendMessageClick = () => {
        props.store.dispatch(sendMessageCreator())
    }

    let onNewMessageChange = (body) => {
        props.store.dispatch(updateNewMessageBodyCreator(body))
    }

    return (<Dialogs
        SendMessage={onSendMessageClick}
        NewMessageChange={onNewMessageChange}
        dialogs={state.dialogsPage.dialogs}
        messages={state.dialogsPage.messages}
        newMessageBody={state.dialogsPage.newMessageBody}/>)
}

export default DialogsContainer