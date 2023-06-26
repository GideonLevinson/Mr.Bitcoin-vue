import { createStore } from 'vuex'
import contact from './modules/contact.js'
import user from './modules/user.js'

const storeOptions = {
    strict: true,
    // state () {
    //     return {
    //       count: 0,
    //     }
    //   },
    //   mutations: {
    //     increment (state) {
    //       state.count++
    //     },
    //     setCount(state, { val }) {
    //         state.count = val
    //     }
    //   },
    //   getters: {
    //     count (state) { return state.count }
    //   },
      modules: {
        contact,
        user,
      }

} 
const store = createStore(storeOptions)

export default store
