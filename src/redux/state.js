const ADD_POST = "ADD-POST";
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";
const UPDATE_NEW_MESSAGE_BODY = "UPDATE-NEW-MESSAGE-BODY";
const SEND_MESSAGE = "SEND-MESSAGE";

let store = {
  _state: {
    profilePage: {
      posts: [
        { message: "Hi,My name Farid///its props", id: 1 },
        { message: "my favorite hobbi is writing code//its props", id: 2 },
        { message: "Marketing, SEO, Veb-sayt", id: 3 },
        { message: "Flegri.az", id: 4 },
      ],

      newPostText: "Farid",
    },

    dialogsPage: {
      messages: [
        { message: "hi", id: 1 },
        { message: "How are you?", id: 2 },
        { message: "Fine", id: 3 },
      ],

      dialogs: [
        { name: "Ferid", id: 1 },
        { name: "Ayxan", id: 2 },
        { name: "Elnar", id: 3 },
        { name: "Rasim", id: 4 },
        { name: "Casur", id: 5 },
        { name: "Vagif", id: 6 },
        { name: "Nicat", id: 7 },
      ],

      newMessageBody: "",
    },
  },
  _callSubscriber() {
    console.log("state changed");
  },

  getState() {
    return this._state;
  },

  subscribe(observer) {
    this._callSubscriber = observer;
  },

  // _addPost() {
  //   debugger;
  //   let newPost = {
  //     id: 5,
  //     message: this._state.profilePage.newPostText,
  //   };
  //   this._state.profilePage.posts.push(newPost);
  //   this._state.profilePage.newPostText = "";
  //   this._callSubscriber(this._state);
  // },

  // _updateNewPostText(newText) {
  //   console.log("newText", newText);
  //   this._state.profilePage.newPostText = newText;
  //   this._callSubscriber(this._state);
  // },

  dispatch(action) {
    if (action.type === ADD_POST) {
      let newPost = {
        id: 5,
        message: this._state.profilePage.newPostText,
      };
      this._state.profilePage.posts.push(newPost);
      this._state.profilePage.newPostText = "";
      this._callSubscriber(this._state);
    } else if (action.type === UPDATE_NEW_POST_TEXT) {
      this._state.profilePage.newPostText = action.newText;
      this._callSubscriber(this._state);
    } else if (action.type === UPDATE_NEW_MESSAGE_BODY) {
      this._state.dialogsPage.newMessageBody = action.body;
      this._callSubscriber(this._state);
    } else if (action.type === SEND_MESSAGE) {
      let body = this._state.dialogsPage.newMessageBody;
      this._state.dialogsPage.newMessageBody = "";
      this._state.dialogsPage.messages.push({ id: 4, message: body });
      this._callSubscriber(this._state);
    }
  },
};

export const addSignActionCreator = () => ({ type: ADD_POST });

export const updateNewPostTextActionCreator = (text) => ({
  type: UPDATE_NEW_POST_TEXT,
  newText: text,
});

export const sendMessageCreator = () => ({ type: SEND_MESSAGE });

export const updateNewMessageBodyCreator = (body) => ({
  type: UPDATE_NEW_MESSAGE_BODY,
  body: body,
});

export default store;
window.store = store;
