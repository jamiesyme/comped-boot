<template>
	<cmd-bar></cmd-bar>
	<component-viewer></component-viewer>
</template>

<script>
	import CmdBar from './components/cmd-bar';
	import ComponentViewer from './components/pages/component-viewer';

	export default {
		components: {
			CmdBar,
			ComponentViewer,
		},

		data() {
			return {};
		},
	};
</script>

<style lang="less">
	*,
	*::after,
	*::before {
		box-sizing: inherit;
	}

	html {
		box-sizing: border-box;
		font-size: 62.5%;
		height: 100%;
	}

	body {
		font-family: sans-serifx;
		font-size: 1.6em;
		letter-spacing: 0.01em;
		line-height: 1.6;
		min-height: 100%;
		margin: 0;
		background-color: #565656;
		//display: flex;
		//flex-direction: column;
	}
</style>
