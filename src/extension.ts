import * as vscode from 'vscode';

export function activate(context: vscode.ExtensionContext) {

	console.log('Congratulations, your extension "swapman" is now active!');

	let disposable = vscode.commands.registerCommand('extension.helloWorld', () => {
		

		const editor: vscode.TextEditor | undefined = vscode.window.activeTextEditor;
		if (!editor) {
			return;
		}

		const doc: vscode.TextDocument = editor.document;
		const selectedNumber: vscode.Selection[] = editor.selections;
		console.log(selectedNumber.length)
		if (selectedNumber.length > 2) {
			vscode.window.showErrorMessage("Exceeded selection.");
			return;
		}
		const firstStartPosition: vscode.Position = new vscode.Position(selectedNumber[0].start.line, selectedNumber[0].start.character);
		const firstEndPosition: vscode.Position = new vscode.Position(selectedNumber[0].end.line, selectedNumber[0].end.character);
		const secondStartPosition: vscode.Position = new vscode.Position(selectedNumber[1].start.line, selectedNumber[1].start.character);
		const secondEndPosition: vscode.Position = new vscode.Position(selectedNumber[1].end.line, selectedNumber[1].end.character);
		const firstElementRange: vscode.Range = new vscode.Range(firstStartPosition, firstEndPosition);
		const secondElementRange: vscode.Range = new vscode.Range(secondStartPosition, secondEndPosition);
		let firstElement: string = doc.getText(firstElementRange);
		let secondElement: string = doc.getText(secondElementRange);
		console.log(firstElement, secondElement);
		[firstElement, secondElement] = [secondElement, firstElement];
		console.log(firstElement, secondElement);
		vscode.window.showInformationMessage("aaa");
	});

	context.subscriptions.push(disposable);
}

export function deactivate() {}
