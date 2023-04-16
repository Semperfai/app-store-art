<template>
	<form @submit.prevent>
		<label for="email">email</label>
		<input type="email" id="email" name="email" v-model="email" required />

		<label for="password">password</label>
		<input
			type="password"
			id="password"
			name="password"
			v-model="password"
			required
		/>

		<button type="submit">Register</button>
	</form>
</template>

<script>
export default {
	data() {
		return {
			email: '',
			password: '',
		}
	},
}
</script>
