import * as vscode from 'vscode';

export function activate(context: vscode.ExtensionContext) {

	let disposable = vscode.commands.registerCommand('extension.swapman', () => {

		const editor: vscode.TextEditor | undefined = vscode.window.activeTextEditor;
		if (!editor) {
			return;
		}

		const doc: vscode.TextDocument = editor.document;
		const selections: vscode.Selection[] = editor.selections;
		if (selections.length > 1 && selections.length < 3) {
			const firstStartPosition: vscode.Position = new vscode.Position(selections[0].start.line, selections[0].start.character);
			const firstEndPosition: vscode.Position = new vscode.Position(selections[0].end.line, selections[0].end.character);
			const secondStartPosition: vscode.Position = new vscode.Position(selections[1].start.line, selections[1].start.character);
			const secondEndPosition: vscode.Position = new vscode.Position(selections[1].end.line, selections[1].end.character);
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
		} else {
			vscode.window.showErrorMessage("Invalid number of selections.");
			return;
		}
	});

	context.subscriptions.push(disposable);
}

export function deactivate() {}
