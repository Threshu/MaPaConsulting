// Component Loader - Dynamically loads HTML components
document.addEventListener("DOMContentLoaded", function () {
	const componentPlaceholders = document.querySelectorAll("[data-component]");
	const loadPromises = [];

	componentPlaceholders.forEach((placeholder) => {
		const componentName = placeholder.getAttribute("data-component");
		const componentPath = `components/${componentName}.html`;

		const promise = fetch(componentPath)
			.then((response) => {
				if (!response.ok) {
					throw new Error(`Failed to load component: ${componentName}`);
				}
				return response.text();
			})
			.then((html) => {
				placeholder.outerHTML = html;
			})
			.catch((error) => {
				console.error("Component loading error:", error);
				placeholder.innerHTML = `<div style="color: red;">Error loading ${componentName}</div>`;
			});

		loadPromises.push(promise);
	});

	// Wait for all components to load, then trigger a custom event
	Promise.all(loadPromises).then(() => {
		console.log("All components loaded");
		// Dispatch custom event that other scripts can listen to
		window.dispatchEvent(new Event("componentsLoaded"));
	});
});
