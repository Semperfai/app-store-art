import { userEvent, within } from '@storybook/testing-library'
// userEvent - метод для эмуляции взаимодействия пользователя с компонентом.
// within - метод для поиска элементов внутри компонента в рамках теста.

import RegistrationForm from './RegistrationForm.vue'

export default {
	title: 'RegistrationForm',
	component: RegistrationForm,
}

export const FilledForm = {
	//FilledForm, который описывает тест-кейс.
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement)

		const emailInput = canvas.getByLabelText('email', {
			selector: 'input',
		})

		await userEvent.type(emailInput, 'example-email@email.com', {
			delay: 100,
		}) //userEvent.type, который эмулирует набор данных пользователем с заданным delay.

		const passwordInput = canvas.getByLabelText('password', {
			selector: 'input',
		})

		await userEvent.type(passwordInput, 'ExamplePassword', {
			delay: 100,
		})

		const submitButton = canvas.getByRole('button')

		await userEvent.click(submitButton)
	},
}
