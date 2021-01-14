import classes from "../Components/Dialogs/Dialogs.module.css";
import ava1 from '../img/ava1.png'
import ava2 from '../img/freckle.png'
import ava3 from '../img/blue.jpg'
import ava4 from '../img/enot.jpg'
import ava5 from '../img/chika.jpg'
import messageReducer from "./messageReducer";
import profileReducer from "./profileReducer";

const store = {
    _state: {
        profilePage: {
            postData: [
                {id: 1, post: 'Hello! This is my first post!', likesCount: '12'},
                {id: 2, post: 'Hello! This is my second post!', likesCount: '13'},
                {id: 3, post: 'Hello! This is my third post!', likesCount: '14'},
                {id: 4, post: 'Hello! This is my four post!', likesCount: '15'},
                {id: 5, post: 'Hello! This is my fifth post!', likesCount: '18'},
            ],
            newPostText: ''

        },
        messagePage: {
            messages: [
                {id: 1, message: 'Hello guys! How its going?'},
                {id: 2, message: 'Hi! I am Ok.'},
                {id: 3, message: 'I want more money!'},
                {id: 4, message: 'I would rather to stay home\''},
                {id: 5, message: 'I am fine..'},
            ],
            newMessageBody: '',
            dialogsData: [
                {id: 1, name: 'Ilay', img: <img src={ava1} alt="avatar" className={classes.ava}/>},
                {id: 2, name: 'Curly', img: <img src={ava2} alt="avatar" className={classes.ava}/>},
                {id: 3, name: 'Vitalich', img: <img src={ava3} alt="avatar" className={classes.ava}/>},
                {id: 4, name: 'Ivych', img: <img src={ava4} alt="avatar" className={classes.ava}/>},
                {id: 5, name: 'Toryn', img: <img src={ava5} alt="avatar" className={classes.ava}/>},
            ]
        },
        friendz: [
            {id: 1, name: 'Curly', ava: <img src={ava5} alt="avatar" className={classes.ava}/>},
            {id: 1, name: 'Kolyan', ava: <img src={ava3} alt="avatar" className={classes.ava}/>},
            {id: 1, name: 'Alex', ava: <img src={ava4} alt="avatar" className={classes.ava}/>},
        ]
    },
    getState() {
        return this._state
    },
    subscribe(observer) {
        this._callSubscriber = observer
    },
    _callSubscriber() {
    },
    dispatch(action) {
        this._state.profilePage = profileReducer(this._state.profilePage, action)
        this._state.messagePage = messageReducer(this._state.messagePage, action)
        this._callSubscriber(this._state)
    },
}


window.store = store
export default store