import { THREAD_ACTION } from "./threadActionTypes";

export default (state = {}, action) => {
    switch (action.type) {
        case THREAD_ACTION:
            return {
                posts: action.posts
            }
        default:
            return state
    }
}
