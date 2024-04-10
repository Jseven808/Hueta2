<template>
	<div class="container">
		<h3>All Roles</h3>
		<div v-if="message" class="alert alert-success">{{ message }}</div>
		<div class="container">
			<table class="table">
				<thead>
					<tr>
						<th>RoleName</th>
						<th>Action</th>
					</tr>
				</thead>
				<tbody>
					<tr v-for="role in roles" :key="role.RoleID">
						<td>{{ role.RoleName }}</td>
						<td>
							<button class="btn btn-warning" @click="updateRole(role.RoleID)">
								Update
							</button>
							<button class="btn btn-danger" @click="deleteRole(role.RoleID)">
								Delete
							</button>
						</td>
					</tr>
				</tbody>
			</table>
			<div class="row">
				<button class="btn btn-success" @click="addRole()">Add</button>
			</div>
		</div>
	</div>
</template>

<script>
import RoleDataService from '../service/RoleDataService'

export default {
	name: 'Roles',
	data() {
		return {
			roles: [],
			message: '',
		}
	},
	methods: {
		refreshRoles() {
			RoleDataService.retrieveAllRoles().then(res => {
				this.roles = res.data
			})
		},
		addRole() {
			this.$router.push(`/Role/-1`)
		},
		updateRole(id) {
			this.$router.push(`/Role/${id}`)
		},
		deleteRole(id) {
			RoleDataService.deleteRole(id).then(() => {
				this.refreshRoles()
			})
		},
	},
	created() {
		this.refreshRoles()
	},
}
</script>
