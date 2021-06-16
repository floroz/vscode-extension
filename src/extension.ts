import * as vscode from 'vscode';
import SnykExtension from './snyk/extension';

const extension = new SnykExtension();

export function activate(context: vscode.ExtensionContext): void {
  console.log('Activating SnykExtension');
  extension.activate(context);
}
export function deactivate(): void {
  console.log('Deactivating SnykExtension');
  extension.deactivate();
}

export function getExtension(): SnykExtension {
  return extension;
}
