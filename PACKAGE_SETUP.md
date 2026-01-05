# Package Setup Complete! 🎉

Your Lexical Playground is now configured to work as both a **standalone app** and as a **reusable npm package**.

## 📁 Files Created/Modified

### New Files:
- ✅ `src/index.ts` - Main package entry point (exports all public APIs)
- ✅ `src/types/assets.d.ts` - TypeScript declarations for assets
- ✅ `vite.config.lib.ts` - Vite configuration for library builds
- ✅ `README.md` - Package documentation
- ✅ `USAGE_EXAMPLE.md` - Detailed usage guide for consumers
- ✅ `.npmignore` - Files to exclude when publishing
- ✅ `PACKAGE_SETUP.md` - This file!

### Modified Files:
- ✅ `package.json` - Updated with library entry points, exports, and build scripts
- ✅ `tsconfig.json` - Configured for declaration generation
- ✅ `.gitignore` - Added dist-lib to ignore list

## 🚀 Quick Start

### Development (Standalone App)
```bash
npm run dev          # Start dev server at localhost:3000
```

### Build as Library (for use in other projects)
```bash
npm run build:lib    # Creates distributable files in dist-lib/
```

This generates:
- `dist-lib/lexical-playground.mjs` - ES Module
- `dist-lib/lexical-playground.cjs` - CommonJS
- `dist-lib/lexical-playground.css` - All styles
- `dist-lib/*.d.ts` - TypeScript types

## 📦 Using in Another Vite Project

### Option 1: Local Development Link

In this directory:
```bash
npm link
```

In your other Vite project:
```bash
npm link lexical-playground
```

### Option 2: Local File Install

In your other Vite project:
```bash
npm install /absolute/path/to/lexical-playground
```

Or in package.json:
```json
{
  "dependencies": {
    "lexical-playground": "file:../lexical-playground"
  }
}
```

### Option 3: Publish to npm

```bash
npm login
npm publish
```

Then in any project:
```bash
npm install lexical-playground
```

## 💻 Example Usage in Another Project

### Basic Import:

```tsx
import { LexicalPlayground } from 'lexical-playground';
import 'lexical-playground/styles';

function App() {
  return <LexicalPlayground />;
}
```

### Custom Editor:

```tsx
import { 
  LexicalEditor,
  SettingsContext,
  PlaygroundNodes,
  PlaygroundEditorTheme 
} from 'lexical-playground';
import { LexicalComposer } from '@lexical/react/LexicalComposer';
import 'lexical-playground/styles';

function MyEditor() {
  const config = {
    namespace: 'MyEditor',
    nodes: [...PlaygroundNodes],
    theme: PlaygroundEditorTheme,
    onError: console.error,
  };

  return (
    <LexicalComposer initialConfig={config}>
      <SettingsContext>
        <LexicalEditor />
      </SettingsContext>
    </LexicalComposer>
  );
}
```

## 📝 What Gets Exported?

Check `src/index.ts` for all available exports:

**Components:**
- `LexicalPlayground` - Full playground app
- `LexicalEditor` - Just the editor

**Contexts:**
- `SettingsContext`, `FlashMessageContext`, etc.

**Configuration:**
- `PlaygroundNodes`, `PlaygroundEditorTheme`, `DEFAULT_SETTINGS`

**UI Components:**
- `Button`, `Modal`, `DropDown`, `ContentEditable`

**Utilities:**
- `docFromHash`, `docToHash`

**Types:**
- `Settings`, `SettingName`

## 🔧 Package Configuration

### package.json Highlights:

```json
{
  "name": "lexical-playground",
  "version": "1.0.0",
  "type": "module",
  "main": "./dist-lib/lexical-playground.cjs",
  "module": "./dist-lib/lexical-playground.mjs",
  "types": "./dist-lib/index.d.ts",
  "exports": {
    ".": {
      "types": "./dist-lib/index.d.ts",
      "import": "./dist-lib/lexical-playground.mjs",
      "require": "./dist-lib/lexical-playground.cjs"
    },
    "./styles": "./dist-lib/lexical-playground.css"
  }
}
```

### Build Scripts:

- `npm run dev` - Development server
- `npm run build` - Build standalone app
- `npm run build:lib` - Build as library (for distribution)
- `npm run preview` - Preview production build

## 🎯 Next Steps

1. **Test locally:** Build and link to another project
2. **Customize:** Update package.json with your details
3. **Document:** Add more examples to README
4. **Publish:** Share on npm when ready!

## 📚 Documentation

- See `README.md` for general package info
- See `USAGE_EXAMPLE.md` for detailed usage examples
- See TypeScript types for API reference

## ⚠️ Important Notes

### Peer Dependencies Required:
Consumers of your package must install:
```bash
npm install lexical@0.25.0 react@^18.0.0 react-dom@^18.0.0
```

### Optional Dependencies (for full features):
```bash
npm install @excalidraw/excalidraw katex yjs y-websocket
```

### Excalidraw Assets:
If using Excalidraw, consumers need to copy assets:
```bash
npm run copy-excalidraw-assets
```

## 🐛 Troubleshooting

### Build errors?
- Ensure all dependencies are installed: `npm install`
- Try cleaning: `rm -rf dist-lib && npm run build:lib`

### Types not working?
- Check tsconfig.json includes types
- Rebuild with `npm run build:lib`

### Import errors in consuming project?
- Install peer dependencies
- Import styles: `import 'lexical-playground/styles'`

## 📖 More Info

For detailed examples and troubleshooting, see:
- `USAGE_EXAMPLE.md` - Complete usage guide
- `README.md` - Package overview
- `vite.config.lib.ts` - Library build config

---

Happy coding! 🚀

