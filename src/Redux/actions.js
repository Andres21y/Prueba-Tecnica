import axios from 'axios'

export const SAVE_EMAIL = 'SAVE_EMAIL';


const saveEmail = (payload) => {
        return{
            type:SAVE_EMAIL,
            payload
        }
}

export default saveEmail;
