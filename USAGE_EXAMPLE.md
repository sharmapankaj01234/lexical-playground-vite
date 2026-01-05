# How to Use This Package in Another Vite Project

## Step 1: Build the Library

First, build this package as a library:

```bash
npm run build:lib
```

This creates distributable files in the `dist-lib/` directory.

## Step 2: Install in Another Project

You have several options:

### Option A: Install from npm (if published)

```bash
npm install lexical-playground
```

### Option B: Install from local directory (for development)

In your other Vite project:

```bash
npm install /path/to/lexical-playground
```

Or add to package.json:

```json
{
  "dependencies": {
    "lexical-playground": "file:../lexical-playground"
  }
}
```

### Option C: Link locally (for active development)

```bash
# In this directory (lexical-playground)
npm link

# In your other project
npm link lexical-playground
```

## Step 3: Use in Your Vite Project

### Basic Setup

**Create your Vite app** (if you don't have one):

```bash
npm create vite@latest my-app -- --template react-ts
cd my-app
npm install
```

**Install peer dependencies:**

```bash
npm install lexical@0.25.0 react@^18.0.0 react-dom@^18.0.0
npm install @lexical/react @lexical/clipboard @lexical/code @lexical/link @lexical/list @lexical/mark @lexical/overflow @lexical/plain-text @lexical/rich-text @lexical/selection @lexical/table @lexical/utils
```

**Optional: Install additional features:**

```bash
npm install @excalidraw/excalidraw katex yjs y-websocket
```

### Example: Using the Full Playground

**src/App.tsx:**

```tsx
import { LexicalPlayground } from 'lexical-playground';
import 'lexical-playground/styles';

function App() {
  return (
    <div className="App">
      <h1>My App with Lexical</h1>
      <LexicalPlayground />
    </div>
  );
}

export default App;
```

### Example: Custom Editor Setup

**src/CustomEditor.tsx:**

```tsx
import { LexicalEditor, SettingsContext, PlaygroundNodes, PlaygroundEditorTheme } from 'lexical-playground';
import { LexicalComposer } from '@lexical/react/LexicalComposer';
import { SharedHistoryContext } from 'lexical-playground';
import 'lexical-playground/styles';

function CustomEditor() {
  const initialConfig = {
    namespace: 'CustomEditor',
    nodes: [...PlaygroundNodes],
    theme: PlaygroundEditorTheme,
    onError: (error: Error) => {
      console.error(error);
    },
  };

  return (
    <LexicalComposer initialConfig={initialConfig}>
      <SettingsContext>
        <SharedHistoryContext>
          <div className="editor-container">
            <LexicalEditor />
          </div>
        </SharedHistoryContext>
      </SettingsContext>
    </LexicalComposer>
  );
}

export default CustomEditor;
```

### Example: Minimal Editor

For a lightweight editor with just basic features:

```tsx
import { LexicalComposer } from '@lexical/react/LexicalComposer';
import { ContentEditable } from 'lexical-playground';
import { RichTextPlugin } from '@lexical/react/LexicalRichTextPlugin';
import { HistoryPlugin } from '@lexical/react/LexicalHistoryPlugin';
import { PlaygroundEditorTheme } from 'lexical-playground';

function MinimalEditor() {
  const initialConfig = {
    namespace: 'MinimalEditor',
    theme: PlaygroundEditorTheme,
    onError: console.error,
  };

  return (
    <LexicalComposer initialConfig={initialConfig}>
      <RichTextPlugin
        contentEditable={<ContentEditable />}
        placeholder={<div>Enter some text...</div>}
      />
      <HistoryPlugin />
    </LexicalComposer>
  );
}
```

## Step 4: Configure Vite (if needed)

If you encounter issues with Excalidraw or other dependencies, update your `vite.config.ts`:

```typescript
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  define: {
    'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV || 'development'),
    'process.env.IS_PREACT': JSON.stringify('false'),
  },
  optimizeDeps: {
    include: ['@excalidraw/excalidraw'],
    esbuildOptions: {
      define: {
        global: 'globalThis',
      },
    },
  },
});
```

## Handling Excalidraw Assets

If using Excalidraw features, you need to copy assets to your public directory:

```bash
# Add to your package.json scripts
{
  "scripts": {
    "postinstall": "mkdir -p public && cp -r node_modules/@excalidraw/excalidraw/dist/excalidraw-assets* public/ || true"
  }
}
```

Then run:

```bash
npm run postinstall
```

## TypeScript Support

The package includes TypeScript declarations, so you'll get full autocomplete and type checking:

```typescript
import type { Settings, SettingName } from 'lexical-playground';

const settings: Settings = {
  // TypeScript will autocomplete available settings
  isRichText: true,
  showTreeView: false,
  // ...
};
```

## Styling

The package exports CSS that you need to import:

```tsx
// Import all styles
import 'lexical-playground/styles';

// Or in your CSS file
@import 'lexical-playground/styles';
```

## Publishing to npm

If you want to publish this package to npm:

1. Update package.json with your details (name, author, repository, etc.)
2. Build the library: `npm run build:lib`
3. Login to npm: `npm login`
4. Publish: `npm publish`

The `prepublishOnly` script will automatically build the library before publishing.

## Troubleshooting

### Module not found errors

Make sure all peer dependencies are installed:
```bash
npm install lexical@0.25.0 react@^18.0.0 react-dom@^18.0.0
```

### Styles not applied

Import the stylesheet:
```tsx
import 'lexical-playground/styles';
```

### Excalidraw not working

1. Copy Excalidraw assets to public directory
2. Configure process.env in vite.config.ts
3. Install @excalidraw/excalidraw

### Type errors

Make sure TypeScript is configured to include node_modules declarations:
```json
{
  "compilerOptions": {
    "skipLibCheck": true
  }
}
```

