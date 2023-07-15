const SEND_MESSAGE = 'SEND-MESSAGE'


let initialState = {
      messages: [
        {id: 1, message: 'Hi'}, 
        {id: 2, message: 'How are you?'},
        {id: 3, message: 'What about is it?'},
        {id: 4, message: 'What about is it?'},
        {id: 5, message: 'What about is it?'},
      ],
      dialogs: [
        {id: 1, name: 'Oleg'}, 
        {id: 2, name: 'Dim'},
        {id: 3, name: 'Viktoria'},
        {id: 4, name: 'Volodia'},
        {id: 5, name: 'Dimka'},
        {id: 6, name: 'Viktor'}
      ]
    }

const dialogsReducer = (state = initialState, action) => {



    switch (action.type) {
      case SEND_MESSAGE:
        let body = action.newMessageBody 

        return {...state, 
                messages: [...state.messages, {id: 6, message: body}] }
      default: 
        return state
    }
}

export const sendMessageCreator = (newMessageBody) => ({ type: SEND_MESSAGE, newMessageBody })


export default dialogsReducer