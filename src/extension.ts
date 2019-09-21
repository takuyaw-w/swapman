import * as vscode from 'vscode';

export function activate(context: vscode.ExtensionContext) {

	let disposable = vscode.commands.registerCommand('extension.swapman', () => {

		const editor: vscode.TextEditor | undefined = vscode.window.activeTextEditor;
		if (!editor) {
			return;
		}

		const doc: vscode.TextDocument = editor.document;
		const selectedNumber: vscode.Selection[] = editor.selections;
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
		[firstElement, secondElement] = [secondElement, firstElement];
		editor.edit(builder => {
			builder.replace(firstElementRange, firstElement);
			builder.replace(secondElementRange, secondElement);
		});
		vscode.window.showInformationMessage("Swaaaaaaaaaaaaaaaaaap!!!!!");
	});

	context.subscriptions.push(disposable);
}

export function deactivate() {}
