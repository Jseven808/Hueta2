import axios from 'axios'

const USER_API_URL = 'http://localhost:5084/api'

class UserDataService {
	retrieveAllRoles() {
		return axios.get(`${USER_API_URL}/Role`)
	}

	retrieveRole(id) {
		return axios.get(`${USER_API_URL}/Role/${id}`)
	}

	deleteRole(id) {
		return axios.delete(`${USER_API_URL}/Role/${id}`)
	}

	updateRole(id, user) {
		return axios.put(`${USER_API_URL}/Role/${id}`, user)
	}
	createRole(user) {
		return axios.post(`${USER_API_URL}/Role`, user)
	}
}
export default new UserDataService()
