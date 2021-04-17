import { createStore } from 'vuex'

export interface Widget {
	name: string
}

export default createStore({
	state: {
		loading: false,
		results: []
	},
	mutations: {

	},
	actions: {
	},
	modules: {
	}
})
