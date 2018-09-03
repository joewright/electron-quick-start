'use strict';
module.exports = {
	electronPackagerConfig: {
		packageManager: 'npm',
		asar: false
	},
	make_targets: {
		win32: ['squirrel']
	},
	makers: [{
		name: '@electron-forge/maker-squirrel',
		config: {
			// https://js.electronforge.io/maker/squirrel/interfaces/makersquirrelconfig
			authors: 'Your Boi',
			// TODO: buy a code signing certificate from Digicert
			// certificateFile: './cert.pfx',
			// certificatePassword: 'this-is-a-secret',
			// copyright: '',
			// description: '',
			exe: 'my-cool-game',
			// iconUrl: './haha.ico',
			// loadingGif: './haha.gif',
			// name: 'MyCompany.MyProduct.SubProduct.VersionInfo',
			noMsi: true,
			// owners: 'Me!',
			// remoteReleases: 'dang.com',
			// remoteToken: 'super-secure',
			setupExe: 'Set-me-up',
			// setupIcon: './wow.ico',
			// signWithParams: '',
			// title: 'Wow!',
			version: '1.1'
		}
	}]
};