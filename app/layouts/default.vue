<template>
	<div class="app-layout">
		<LanguageSwitcher />
		<slot />
	</div>
</template>

<style scoped>
	.app-layout {
		min-height: 100vh;
	}
</style>
