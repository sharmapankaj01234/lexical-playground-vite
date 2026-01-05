/**
 * Main entry point for lexical-playground package
 * Use this when importing the package as a library
 */

// Main App component
export { default as LexicalPlayground } from './package/App';

// Editor component (without the playground wrapper)
export { default as LexicalEditor } from './package/Editor';

// Context providers
export { SettingsContext, useSettings } from './package/context/SettingsContext';
export { FlashMessageContext } from './package/context/FlashMessageContext';
export { SharedHistoryContext } from './package/context/SharedHistoryContext';
export { ToolbarContext } from './package/context/ToolbarContext';

// Settings and configuration
export { isDevPlayground, DEFAULT_SETTINGS } from './package/appSettings';
export type { Settings, SettingName } from './package/appSettings';

// Nodes
export { default as PlaygroundNodes } from './package/nodes/PlaygroundNodes';

// Theme
export { default as PlaygroundEditorTheme } from './package/themes/PlaygroundEditorTheme';

// Utility functions
export { docFromHash, docToHash } from './package/utils/docSerialization';

// UI Components (commonly reused)
export { default as Button } from './package/ui/Button';
export { default as Modal } from './package/ui/Modal';
export { default as DropDown } from './package/ui/DropDown';
export { default as ContentEditable } from './package/ui/ContentEditable';

// Styles (consumers will need to import these)
export const styles = {
  main: './package/index.css',
  theme: './package/themes/PlaygroundEditorTheme.css',
};

