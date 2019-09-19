import * as vscode from 'vscode';

export function activate(context: vscode.ExtensionContext) {

	console.log('Congratulations, your extension "swapman" is now active!');

	let disposable = vscode.commands.registerCommand('extension.helloWorld', () => {
		

		const editor: vscode.TextEditor | undefined = vscode.window.activeTextEditor;
		if (!editor) {
			return;
		}

		const doc: vscode.TextDocument = editor.document;
		const b: vscode.Selection[] = editor.selections;
		console.log(b[0]);
		const start: vscode.Position = new vscode.Position(b[0].start.line, b[0].start.character);
		const end: vscode.Position = new vscode.Position(b[0].end.line, b[0].end.character);
		const range: vscode.Range = new vscode.Range(start, end);
		console.log(range);
		let a = doc.getText(range);
		console.log(a);
		vscode.window.showInformationMessage("aaa");
	});

	context.subscriptions.push(disposable);
}

export function deactivate() {}
