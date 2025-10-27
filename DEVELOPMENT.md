# Skilify Development Guide

## 🚀 Quick Start in VS Code

### 1. Opening the Project
```bash
# Open the workspace file
code skilify.code-workspace
```

### 2. Recommended Extensions
When you open the project, VS Code will prompt you to install recommended extensions:

**Essential Extensions:**
- **Live Server** - Local development server with live reload
- **Auto Rename Tag** - Automatically rename paired HTML tags
- **CSS Peek** - Jump to CSS definitions
- **HTML CSS Support** - CSS class and ID completion
- **Path Intellisense** - Autocomplete filenames

**Optional but Helpful:**
- **Prettier** - Code formatter
- **Emmet** - HTML/CSS abbreviations (built-in)
- **Bracket Pair Colorizer** - Colorize matching brackets

### 3. Running the Project

**Method 1: Live Server (Recommended)**
1. Right-click on `index.html`
2. Select "Open with Live Server"
3. Your browser will open at `http://localhost:5500`
4. Changes will auto-reload

**Method 2: Direct Browser**
- Simply open `index.html` in your browser
- Manually refresh after changes

## 🛠 Development Workflow

### File Structure Overview
```
skilify/
├── 📁 .vscode/              # VS Code configuration
│   ├── settings.json        # Editor settings
│   └── extensions.json      # Extension recommendations
├── 📄 *.html               # All page files
├── 📄 style.css            # Main stylesheet
├── 📄 script.js            # JavaScript functionality
├── 📄 skilify.code-workspace # Workspace config
└── 📄 README.md            # Documentation
```

### VS Code Features Enabled

**Auto-formatting:**
- Formats code on save
- Consistent indentation (4 spaces)
- HTML attributes on new lines when needed

**IntelliSense:**
- HTML tag completion
- CSS class suggestions
- JavaScript function hints
- File path completion

**Live Validation:**
- HTML syntax checking
- CSS validation
- JavaScript error detection

## 📝 Coding Standards

### HTML
```html
<!-- Use semantic HTML5 elements -->
<header>, <nav>, <main>, <section>, <article>, <footer>

<!-- Proper indentation -->
<div class="container">
    <div class="content">
        <h1>Title</h1>
    </div>
</div>

<!-- Self-closing tags -->
<meta charset="UTF-8">
<link rel="stylesheet" href="style.css">
```

### CSS
```css
/* Use consistent naming (kebab-case) */
.nav-container { }
.skill-card { }
.btn-primary { }

/* Group related properties */
.element {
    /* Positioning */
    position: relative;
    top: 0;
    
    /* Display & Layout */
    display: flex;
    flex-direction: column;
    
    /* Styling */
    background: #fff;
    border: 1px solid #ddd;
    
    /* Typography */
    font-size: 16px;
    color: #333;
}
```

### JavaScript
```javascript
// Use camelCase for variables and functions
const navMenu = document.querySelector('.nav-menu');

// Use descriptive function names
function showNotification(message, type) {
    // Implementation
}

// Use const/let instead of var
const colors = {
    success: '#4caf50',
    error: '#f44336'
};
```

## 🎨 Working with Styles

### CSS Architecture
The stylesheet is organized in sections:

1. **Reset & Base** - Global styles
2. **Navigation** - Header and menu styles
3. **Hero Section** - Landing page hero
4. **Skills Grid** - Course cards layout
5. **Responsive** - Media queries
6. **Utilities** - Helper classes

### Adding New Styles
```css
/* Add new sections at the end */
/* New Feature Styles */
.new-feature {
    /* Your styles here */
}

/* Keep responsive styles at the bottom */
@media (max-width: 768px) {
    .new-feature {
        /* Mobile styles */
    }
}
```

### Color Palette
```css
/* Primary Colors */
--primary: #667eea;
--secondary: #764ba2;
--accent: #f093fb;

/* Text Colors */
--text-dark: #333;
--text-light: #666;
--text-white: #fff;

/* Background Colors */
--bg-light: #f8f9fa;
--bg-white: #ffffff;
--bg-dark: #2c3e50;
```

## 🔧 JavaScript Development

### Global Functions Available
```javascript
// Navigation
Skilify.navigateTo('page.html');

// Notifications
Skilify.showNotification('Success!', 'success');
Skilify.showNotification('Error occurred', 'error');
Skilify.showNotification('Info message', 'info');

// Course Functions
Skilify.startCourse('UI/UX Design');
Skilify.startModule('Introduction to Design');
```

### Adding New Functionality
```javascript
// Add to script.js
function newFeature() {
    // Your code here
}

// Export for other pages
window.Skilify = { 
    ...window.Skilify, 
    newFeature 
};
```

## 📱 Responsive Development

### Breakpoints
```css
/* Mobile First Approach */
/* Base styles for mobile */
.element { }

/* Tablet */
@media (min-width: 768px) { }

/* Desktop */
@media (min-width: 1024px) { }

/* Large Desktop */
@media (min-width: 1200px) { }
```

### Testing Responsive Design
1. **Chrome DevTools:**
   - Press F12
   - Click device toggle icon
   - Test different screen sizes

2. **VS Code Extensions:**
   - Install "Browser Preview"
   - Test multiple viewports simultaneously

## 🐛 Debugging

### Common Issues

**Live Server not working:**
```bash
# Install Live Server extension
# Right-click HTML file → "Open with Live Server"
```

**CSS not loading:**
```html
<!-- Check file path -->
<link rel="stylesheet" href="./style.css">
```

**JavaScript errors:**
```javascript
// Use console.log for debugging
console.log('Debug message');

// Check browser console (F12)
```

### VS Code Debugging Features
- **Problems Panel:** Shows HTML/CSS/JS errors
- **Console:** JavaScript console output
- **Debugger:** Set breakpoints in JavaScript

## 📦 Adding New Pages

### 1. Create HTML File
```bash
# Create new file: new-page.html
```

### 2. Copy Template Structure
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <!-- Copy head section from index.html -->
</head>
<body>
    <!-- Copy navigation from any page -->
    <nav class="navbar">...</nav>
    
    <!-- Your page content -->
    <main>
        <section class="hero">
            <h1>New Page Title</h1>
        </section>
    </main>
    
    <!-- Copy footer if applicable -->
    <script src="script.js"></script>
</body>
</html>
```

### 3. Update Navigation
Add link to all HTML files:
```html
<li><a href="new-page.html" class="nav-link">New Page</a></li>
```

## 🚀 Deployment Preparation

### Before Deployment
1. **Validate HTML:** Use VS Code problems panel
2. **Check CSS:** Ensure no errors in problems panel
3. **Test JavaScript:** Check browser console for errors
4. **Test Responsive:** Use device simulation
5. **Test All Links:** Ensure navigation works

### Optimization
```css
/* Minify CSS for production */
/* Remove comments and unnecessary spaces */

/* Optimize images */
/* Use appropriate image formats and sizes */
```

## 💡 Tips & Tricks

### VS Code Shortcuts
- **Ctrl+Shift+P** - Command palette
- **Ctrl+`** - Toggle terminal
- **Alt+Shift+F** - Format document
- **Ctrl+D** - Select next occurrence
- **Ctrl+/** - Toggle comment

### Emmet Abbreviations
```html
<!-- Type: div.container>h1+p -->
<div class="container">
    <h1></h1>
    <p></p>
</div>

<!-- Type: ul>li*3>a -->
<ul>
    <li><a href=""></a></li>
    <li><a href=""></a></li>
    <li><a href=""></a></li>
</ul>
```

### Live Server Features
- **Auto-reload** on file changes
- **Network access** for testing on mobile devices
- **Custom port** configuration in settings

## 📚 Learning Resources

### HTML/CSS
- [MDN Web Docs](https://developer.mozilla.org/)
- [CSS-Tricks](https://css-tricks.com/)
- [Can I Use](https://caniuse.com/)

### JavaScript
- [JavaScript.info](https://javascript.info/)
- [MDN JavaScript Guide](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide)

### VS Code
- [VS Code Documentation](https://code.visualstudio.com/docs)
- [VS Code Extensions](https://marketplace.visualstudio.com/)

---

Happy coding! 🚀