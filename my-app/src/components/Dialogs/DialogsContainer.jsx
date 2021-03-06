import React from 'react';
import {sendMessageCreator, updateNewMessageBodyCreator} from "../../redux/dialog-reducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";

let mapStateToProps = (state) => {
    return {
        dialogsPage: state.dialogsPage
    }
}
let mapDispatchToProps = (dispatch) => {
    return {
        SendMessage: () => {
            dispatch(sendMessageCreator())
        },
        NewMessageChange: (body) => {
            dispatch(updateNewMessageBodyCreator(body))
        }
    }
}
const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs)

export default DialogsContainer