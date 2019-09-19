import * as vscode from 'vscode';

export function activate(context: vscode.ExtensionContext) {

	console.log('Congratulations, your extension "swapman" is now active!');

	let disposable = vscode.commands.registerCommand('extension.helloWorld', () => {

		vscode.window.showInformationMessage('Hello World!');
		const test = vscode.window.activeTextEditor;
		console.log(test);
	});

	context.subscriptions.push(disposable);
}

export function deactivate() {}
