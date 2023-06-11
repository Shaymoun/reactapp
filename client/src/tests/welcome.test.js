import { render,screen } from "@testing-library/react"
import '@testing-library/jest-dom';
import LoginPage from "scenes/loginPage"
import App from "App"
import { Provider } from "react-redux"
import store from "store/store"
import { BrowserRouter, Navigate, Routes, Route } from "react-router-dom"

test("renders welcome message", () => {
	// Render the LoginPage component
	render(
		<BrowserRouter>
			<Provider store={store}>
				<LoginPage />
			</Provider>
		</BrowserRouter>
	)

	// Find the welcome message element by its text content
	const welcomeMessage = screen.getByText(
		"Welcome to Socipedia, the Social Media for Sociopaths!"
	)

	// Assert that the welcome message is rendered
	expect(welcomeMessage).toBeInTheDocument()
})
