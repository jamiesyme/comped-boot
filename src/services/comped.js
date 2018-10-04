const service = {
	async getComponents() {
		return [
			{
				path: 'src/components/cmd-bar',
				name: 'cmd-bar',
				label: 'CmdBar',
			}
		];
	},

	getComponentDistUrl(componentName, file) {
		return `${location.origin}/components/${componentName}/dist/${file}`;
	},
};

export default service;
