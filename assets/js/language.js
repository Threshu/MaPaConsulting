// Language handling
let currentLang = localStorage.getItem("mapa-lang") || "de"; // Default language
let langData = {};

// Language names for the UI
const languageNames = {
	de: "Deutsch",
	en: "English",
	pl: "Polski",
};

// Load language data
async function loadLanguageData(lang) {
	try {
		const response = await fetch(`assets/js/lang/${lang}.json`);
		if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
		langData = await response.json();
		applyLanguage();
		updateLanguageSelector();
	} catch (error) {
		console.error("Error loading language data:", error);
	}
}

// Apply language to page elements
function applyLanguage() {
	document.querySelectorAll("[data-lang]").forEach((element) => {
		const key = element.getAttribute("data-lang");
		const parts = key.split(".");
		let value = langData;

		for (const part of parts) {
			if (value && value[part]) {
				value = value[part];
			} else {
				value = null;
				break;
			}
		}

		if (value !== null) {
			if (element.tagName === "INPUT" || element.tagName === "TEXTAREA") {
				element.placeholder = value;
			} else {
				element.textContent = value;
			}
		}
	});

	// Update meta tags
	document.title = langData.meta.title;
	document.querySelector('meta[name="description"]').content =
		langData.meta.description;
}

// Change language
function changeLanguage(lang) {
	currentLang = lang;
	localStorage.setItem("mapa-lang", lang);
	loadLanguageData(lang);
}

// Update language selector display
function updateLanguageSelector() {
	// Update selected language display for both selectors
	const selectedFlag = document.getElementById("selected-flag");
	const mobileSelectedFlag = document.getElementById("mobile-selected-flag");

	if (selectedFlag) {
		selectedFlag.src = `assets/img/flags/${currentLang}.svg`;
		selectedFlag.alt = languageNames[currentLang];
	}

	if (mobileSelectedFlag) {
		mobileSelectedFlag.src = `assets/img/flags/${currentLang}.svg`;
		mobileSelectedFlag.alt = languageNames[currentLang];
	}

	// Mark the active language in dropdown for both selectors
	document.querySelectorAll(".language-option").forEach((option) => {
		if (option.getAttribute("data-lang") === currentLang) {
			option.setAttribute("data-active", "true");

			// Find parent .language-select and make sure it's not active (close dropdown after selection)
			const parentSelect = option.closest(".language-select");
			if (parentSelect && parentSelect.classList.contains("active")) {
				parentSelect.classList.remove("active");
			}
		} else {
			option.setAttribute("data-active", "false");
		}
	});
}

// Initialize language on page load
document.addEventListener("DOMContentLoaded", () => {
	loadLanguageData(currentLang);

	// Function to set up a language selector
	function setupLanguageSelector(selectorId) {
		const languageSelect = document.querySelector(
			`#${selectorId} .language-select`
		);
		if (!languageSelect) return;

		const languageSelected = languageSelect.querySelector(".language-selected");

		languageSelected.addEventListener("click", () => {
			languageSelect.classList.toggle("active");
		});

		// Add event listeners to language options
		languageSelect.querySelectorAll(".language-option").forEach((option) => {
			option.addEventListener("click", () => {
				const lang = option.getAttribute("data-lang");
				changeLanguage(lang);
				languageSelect.classList.remove("active"); // Close dropdown after selection
			});
		});
	}

	// Set up both language selectors
	setupLanguageSelector("language-switcher");
	setupLanguageSelector("mobile-language-switcher");

	// Close dropdowns when clicking outside
	document.addEventListener("click", (e) => {
		document.querySelectorAll(".language-select").forEach((select) => {
			if (!select.contains(e.target)) {
				select.classList.remove("active");
			}
		});
	});
});
