# VS Code Setup Guide for Skilify

This guide will help you set up VS Code for the best development experience with the Skilify project.

## Quick Start

1. **Open the project in VS Code:**
   ```bash
   code .
   ```
   Or open the `Skilify.code-workspace` file for the full workspace experience.

2. **Install recommended extensions:**
   VS Code will automatically prompt you to install the recommended extensions when you open the project.

## Key Features Added

### 🔧 Settings Configuration
- **Auto-formatting** on save with Prettier
- **HTML/CSS/JS** specific formatting rules
- **Live Server** integration for instant preview
- **Auto-save** after 1 second of inactivity
- **Enhanced IntelliSense** for web development

### 📦 Recommended Extensions
The following extensions will be suggested for installation:
- **HTML CSS Support** - Enhanced HTML/CSS IntelliSense
- **Prettier** - Code formatter
- **Live Server** - Local development server with live reload
- **Auto Rename Tag** - Automatically rename paired HTML tags
- **Path Intellisense** - Autocomplete for file paths
- **VS Code Icons** - Better file icons

### 🚀 Quick Actions & Tasks

#### Start Development Server
- **Command Palette:** `Ctrl+Shift+P` → "Tasks: Run Task" → "Start HTTP Server"
- **Terminal:** `python3 -m http.server 3000`
- **Live Server:** Right-click `index.html` → "Open with Live Server"

#### Format Code
- **Auto:** Saves automatically format with Prettier
- **Manual:** `Shift+Alt+F` (or `Cmd+Shift+F` on macOS)
- **Tasks:** Use "Format HTML/CSS/JS Files" tasks from Command Palette

#### Debug Website
- **F5** to start debugging with Chrome
- **Ctrl+Shift+D** to open Debug panel
- Multiple debug configurations available (Chrome, Firefox, Live Server)

### 📝 Code Snippets

Type these prefixes and press `Tab` to expand:

- `html5-skilify` - Complete HTML5 template with Skilify includes
- `nav-skilify` - Skilify navigation menu
- `skill-card` - Skill card component
- `hero-skilify` - Hero section template
- `footer-skilify` - Footer with all links
- `flex-center` - CSS flexbox centering
- `grid-layout` - CSS grid layout
- `media` - CSS media query

### 🎨 Workspace Customization

The workspace includes:
- **Custom color theme** for better visual distinction
- **Organized folder structure**
- **File associations** for better syntax highlighting
- **Integrated debugging** configurations

### 💡 Tips for Better Development

1. **Use Emmet** - Built-in shortcuts for faster HTML/CSS writing
   - `div.skill-card` + Tab → `<div class="skill-card"></div>`
   - `ul>li*5` + Tab → Creates unordered list with 5 items

2. **Multi-cursor editing** - Hold `Alt` and click to place multiple cursors

3. **Quick file switching** - `Ctrl+P` to quickly open files

4. **Command Palette** - `Ctrl+Shift+P` for all available commands

5. **Integrated Terminal** - `Ctrl+`` (backtick) to open terminal

### 🔍 Debugging Tips

- **Console errors** will show in the Debug Console when debugging
- **Breakpoints** can be set in JavaScript files
- **Live reload** with Live Server shows changes instantly
- **Developer Tools** integration for better debugging

### 📁 Project Structure

```
Skilify/
├── .vscode/                 # VS Code configuration
│   ├── settings.json       # Editor settings
│   ├── extensions.json     # Recommended extensions
│   ├── launch.json         # Debug configurations
│   ├── tasks.json          # Task definitions
│   └── snippets.code-snippets
├── *.html                  # All HTML pages
├── style.css               # Main stylesheet
├── script.js               # Main JavaScript
├── .prettierrc             # Prettier configuration
├── .gitignore              # Git ignore rules
└── Skilify.code-workspace  # VS Code workspace file
```

### 🚨 Troubleshooting

**Extensions not installing?**
- Open Command Palette (`Ctrl+Shift+P`)
- Type "Extensions: Show Recommended Extensions"
- Install manually

**Live Server not working?**
- Install the "Live Server" extension
- Right-click on `index.html` and select "Open with Live Server"

**Formatting not working?**
- Install "Prettier" extension
- Check that "Format on Save" is enabled in settings

**Python server not starting?**
- Ensure Python 3 is installed: `python3 --version`
- Try: `python -m http.server 3000` if `python3` doesn't work

## Next Steps

1. Install the recommended extensions
2. Start the development server using one of the methods above
3. Begin editing your HTML, CSS, or JavaScript files
4. Changes will be automatically formatted and reflected in the browser

Happy coding! 🎉