import { createStore } from 'vuex'
import Widgets from './widgets'

export default createStore({
	state: {
		counter: 0
	},
	mutations: {
		increment: (state) => state.counter++,
		decrement: (state) => state.counter--
	},
	actions: {
	},
	modules: {
		Widgets
	}
})
