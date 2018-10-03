<template>
	<div class="cmd-bar">
		<input
			type="text"
			placeholder="Enter a command...">
	</div>
</template>

<script>
</script>

<style lang="less" scoped>
	.cmd-bar {
		padding: 2rem;
		background-color: #404040;
		box-shadow: 0 0 0.3rem #333;
	}

	input {
		display: block;
		width: 33%;
		min-width: 20.0rem;
		max-width: 60.0rem;
		margin: 0 auto;

		background-color: #bfbfbf;
		border: none;
		border-radius: 1.5rem;
		box-shadow: 0 0 0.3rem #404040 inset;
		color: #404040;
		padding: 0.6rem 1.5rem;
		font-size: 1.6rem;
		transition: all 0.15s;
		outline: 0;

		&:focus {
			background-color: #f4f4f4;
			&::placeholder {
				opacity: 0;
			}
		}

		&::placeholder {
			color: #505050;
			font-style: italic;
			opacity: 1;
			transition: inherit;
			text-align: center;
		}
	}
</style>
