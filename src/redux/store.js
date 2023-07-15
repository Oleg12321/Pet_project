import dialogsReducer from "./dialogs-reducer"
import profileReducer from "./profile-reducer"
import sidebarReducer from "./sidebar-reducer"




let store = {
  _state: {
    profilePage: {
       posts: [
        {id: 1, message: 'Hi', likesCount: 0}, 
        {id: 2, message: 'How are you?', likesCount: 23},
        {id: 3, message: 'What about is it?', likesCount: 4},
        {id: 4, message: 'What about is it?', likesCount: 55},
        {id: 5, message: 'What about is it?', likesCount: 6},
        {id: 6, message: 'What about is it?', likesCount: 7}
      ],
      newPostText: "IT"
    },
    dialogsPage: {
      messages: [
        {id: 1, message: 'Hi'}, 
        {id: 2, message: 'How are you?'},
        {id: 3, message: 'What about is it?'},
        {id: 4, message: 'What about is it?'},
        {id: 5, message: 'What about is it?'},
        {id: 6, message: 'What about is it?'}
      ],
      newMessageBody: '',
      dialogs: [
        {id: 1, name: 'Oleg'}, 
        {id: 2, name: 'Dim'},
        {id: 3, name: 'Viktoria'},
        {id: 4, name: 'Volodia'},
        {id: 5, name: 'Dimka'},
        {id: 6, name: 'Viktor'}
      ]
    },
    sidebar: {}    
  },

  _callSubcriber() {
    console.log('fdf');
  },

  getState() {
    return this._state
  },

  subscribe(observer) {
    this._callSubcriber = observer
  },

  addPost() {
      let newPost = {
      id: 5,
      message: this._state.profilePage.newPostText,
      likesCount: 0
      }

      this._state.profilePage.posts.push(newPost)
      this._state.profilePage.newPostText = ''
      this._callSubcriber(this._state)
  },

  updateNewPostText(newText) {
    this._state.profilePage.newPostText = newText
    this._callSubcriber(this._state)
  },

   // test
  addMessages() {
    let newMessage = {
      id: 5, 
      message: this._state.dialogsPage.newMessagesText
    }

    this._state.dialogsPage.messages.push(newMessage)
    this._state.dialogsPage.newMessageBody = ''
    this._callSubcriber(this._state)
  },
  updateNewMessagesText(newMessage) {
    this._state.dialogsPage.newMessageBody = newMessage
    this._callSubcriber(this._state)
  },
  // test end
  dispatch(action) {

    store._state.profilePage = profileReducer(store._state.profilePage, action)
    store._state.dialogsPage = dialogsReducer(store._state.dialogsPage, action)
    store._state.sidebar = sidebarReducer(store._state.sidebar, action)

    this._callSubcriber(this._state)
    
  }
}





export default store
window.store = store