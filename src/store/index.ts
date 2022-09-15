import { createStore } from 'vuex'

export default createStore({
	state: {
		counter: 0,
		loading: false,
		objects: []
	},
	getters: {
		count: (state) => state.counter,
		objects: (state) => state.objects,
		loading: (state) => state.loading
	},
	mutations: {
		increment: (state) => state.counter++,
		decrement: (state) => state.counter--,
		setObjects: (state, payload) => state.objects = payload,
		setLoading: (state, payload) => state.loading = payload
	},
	actions: {
		async getObjects({ commit }) {
			try {
				commit("setLoading", true);

				const response = await new Promise<any>(resolve => setTimeout(() => {
					resolve({
						data: [
							{
								name: 'apple'
							},
							{
								name: 'banana'
							},
							{
								name: "carrot"
							}
						]
					})
				}, 1000));

				commit("setObjects", response.data);

				return response;
			} finally {
				commit("setLoading", false);
			}
		}
	},
	modules: {
	}
})
