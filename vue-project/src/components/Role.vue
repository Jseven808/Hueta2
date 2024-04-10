<template>
	<div>
		<h3>Role</h3>
		<div class="container">
			<form @submit="validateAndSubmit">
				<div v-if="errors.length">
					<div
						class="alert alert-danger"
						v-bind:key="index"
						v-for="(error, index) in errors"
					>
						{{ error }}
					</div>
				</div>
				<fieldset class="form-group">
					<label>RoleName</label>
					<input type="text" class="form-control" v-model="roleName" />
				</fieldset>
				<button class="btn btn-success" type="submit">Save</button>
			</form>
		</div>
	</div>
</template>

<script>
import RoleDataService from '../service/RoleDataService'

export default {
	name: 'Role',
	data() {
		return {
			roleName: '',
			errors: [],
		}
	},
	computed: {
		id() {
			return this.$route.params.id
		},
	},
	methods: {
		refreshRoleDetails() {
			RoleDataService.retrieveRole(this.id).then(res => {
				this.roleName = res.data.roleName
			})
		},
		validateAndSubmit(e) {
			e.preventDefault()
			this.errors = []
			if (!this.roleName) {
				this.errors.push('Enter valid values')
			} else if (this.roleName.length < 5) {
				this.errors.push('Enter at least 5 characters in Role Name')
			}
			if (this.errors.length === 0) {
				if (this.id == -1) {
					RoleDataService.createRole({
						roleName: this.roleName,
					}).then(
						() => {
							this.$router.push('/')
						},
						err => this.errors.push(err.response.data.errors)
					)
				} else {
					RoleDataService.updateRole(this.id, {
						id: this.id,
						roleName: this.roleName,
					}).then(
						() => {
							this.$router.push('/')
						},
						err => this.errors.push(err.response.data.errors)
					)
				}
			}
		},
	},
	created() {
		this.refreshRoleDetails()
	},
}
</script>
