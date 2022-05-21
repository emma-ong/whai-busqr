import { SIGNED_IN } from "../actions";

export default function userState (state = '', action) {
    switch (action.type) {
        case SIGNED_IN:
            return action.userName
        default:
            return state
        }
}