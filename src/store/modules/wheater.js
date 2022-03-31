import axios from 'axios'

export default { 
    state: {
        wheaters: []
    },
    getters: {
        findAll : state => {
            return state.wheaters
        }
    },
    mutations: {
        setWheaters(state, wheaters) {
            return state.wheaters = wheaters
        }
    },
    actions: {
        fetchWheaters({commit,getters}) { 
            if (!getters.findAll.length) {
                return new Promise((resolve, reject) => {
                    return axios.get('https://cuaca.umkt.ac.id/api/cuaca/DigitalForecast-Bali.xml')
                    .then(response => {
                        resolve(response)
                        commit('setWheaters',response)
                    })
                    .catch(error => {
                        reject(error)
                    })
                })
            }
        }
    }
}