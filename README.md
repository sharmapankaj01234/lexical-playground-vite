# Lexical Playground

A feature-rich, production-ready Lexical editor implementation with React.

## Features

- ✨ Rich text editing with Lexical
- 🎨 Multiple themes and customization options
- 🖼️ Image support with drag & drop
- 📊 Tables with cell merging
- 🎭 Excalidraw integration for diagrams
- 📝 Markdown shortcuts
- 🔗 Link editing
- 💬 Mentions and hashtags
- 📐 Math equations (KaTeX)
- 🎯 Auto-complete
- 🌐 Collaboration support (with Yjs)
- And many more features!

## Installation

### As a standalone app:

```bash
npm install
npm run dev
```

### As a package in another project:

```bash
npm install lexical-playground
# or
yarn add lexical-playground
# or
pnpm add lexical-playground
```

## Usage

### Basic Usage

```tsx
import { LexicalPlayground } from 'lexical-playground';
import 'lexical-playground/styles';

function App() {
  return (
    <div>
      <LexicalPlayground />
    </div>
  );
}
```

### Using Just the Editor Component

```tsx
import { LexicalEditor, SettingsContext } from 'lexical-playground';
import { LexicalComposer } from '@lexical/react/LexicalComposer';
import PlaygroundNodes from 'lexical-playground/nodes';
import PlaygroundEditorTheme from 'lexical-playground/theme';
import 'lexical-playground/styles';

function MyEditor() {
  const initialConfig = {
    namespace: 'MyEditor',
    nodes: [...PlaygroundNodes],
    theme: PlaygroundEditorTheme,
    onError: (error: Error) => console.error(error),
  };

  return (
    <LexicalComposer initialConfig={initialConfig}>
      <SettingsContext>
        <LexicalEditor />
      </SettingsContext>
    </LexicalComposer>
  );
}
```

### Available Exports

```tsx
// Main components
import { 
  LexicalPlayground,      // Full playground app
  LexicalEditor,          // Editor component only
} from 'lexical-playground';

// Context providers
import {
  SettingsContext,
  FlashMessageContext,
  SharedHistoryContext,
  ToolbarContext,
} from 'lexical-playground';

// Configuration
import {
  PlaygroundNodes,
  PlaygroundEditorTheme,
  DEFAULT_SETTINGS,
} from 'lexical-playground';

// UI Components
import {
  Button,
  Modal,
  DropDown,
  ContentEditable,
} from 'lexical-playground';
```

## Development

### Run locally:

```bash
npm run dev          # Start dev server
npm run build        # Build the standalone app
npm run build:lib    # Build as a library package
npm run preview      # Preview production build
```

### Building for Distribution

To build this package for publishing to npm:

```bash
npm run build:lib
```

This creates:
- `dist-lib/lexical-playground.mjs` - ES module
- `dist-lib/lexical-playground.cjs` - CommonJS module
- `dist-lib/lexical-playground.css` - All styles
- `dist-lib/*.d.ts` - TypeScript declarations

## Requirements

### Peer Dependencies

```json
{
  "react": "^18.0.0",
  "react-dom": "^18.0.0",
  "lexical": "0.25.0"
}
```

### Optional Dependencies (for full features)

- `@excalidraw/excalidraw` - For diagram support
- `katex` - For math equations
- `yjs` and `y-websocket` - For collaboration

## Configuration

You can customize the editor behavior using the Settings context:

```tsx
import { SettingsContext, DEFAULT_SETTINGS } from 'lexical-playground';

const customSettings = {
  ...DEFAULT_SETTINGS,
  isRichText: true,
  showTreeView: false,
  isCollab: false,
};
```

## License

MIT

## Credits

Built with [Lexical](https://lexical.dev/) - Meta's extensible text editor framework.

