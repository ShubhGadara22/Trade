# Skilify - Learn Trending Skills

A modern, responsive learning platform website that offers courses in trending skills like UI/UX design, graphic design, business & finance, digital marketing, video editing, and freelancing.

## 🚀 Features

- **Responsive Design**: Works perfectly on desktop, tablet, and mobile devices
- **Modern UI/UX**: Clean, professional design with smooth animations
- **Multiple Course Categories**: 
  - UI/UX Design
  - Graphic Design
  - Business & Finance
  - Digital Marketing
  - Video Editing
  - Freelancing
- **Interactive Navigation**: Mobile-friendly hamburger menu
- **Notification System**: Built-in notification system for user feedback
- **Cross-page Navigation**: Seamless navigation between different skill pages

## 📁 Project Structure

```
skilify/
├── index.html              # Homepage
├── about.html              # About page
├── contact.html            # Contact page
├── support.html            # Support page
├── ui-ux.html             # UI/UX Design course page
├── graphic-design.html     # Graphic Design course page
├── business-finance.html   # Business & Finance course page
├── digital-marketing.html  # Digital Marketing course page
├── editing.html           # Video Editing course page
├── freelancing.html       # Freelancing course page
├── style.css              # Main stylesheet
├── script.js              # JavaScript functionality
├── skilify.code-workspace # VS Code workspace configuration
├── .vscode/               # VS Code settings
│   ├── settings.json      # Editor settings
│   └── extensions.json    # Recommended extensions
└── README.md              # Project documentation
```

## 🛠 Technologies Used

- **HTML5**: Semantic markup structure
- **CSS3**: Modern styling with Flexbox and Grid
- **JavaScript (ES6+)**: Interactive functionality
- **Font Awesome**: Icons and visual elements
- **Google Fonts**: Inter font family for modern typography

## 🎨 Design Features

- **Color Scheme**: Professional gradient backgrounds with purple/blue theme
- **Typography**: Inter font family for clean, modern look
- **Animations**: Smooth hover effects and transitions
- **Layout**: CSS Grid and Flexbox for responsive layouts
- **Icons**: Font Awesome icons for visual enhancement

## 🚀 Getting Started

### Prerequisites
- A modern web browser (Chrome, Firefox, Safari, Edge)
- Code editor (VS Code recommended)

### Installation

1. **Clone or download the project**:
   ```bash
   git clone [repository-url]
   cd skilify
   ```

2. **Open in VS Code**:
   ```bash
   code skilify.code-workspace
   ```

3. **Install recommended extensions** (when prompted in VS Code):
   - Live Server (for local development server)
   - Auto Rename Tag
   - CSS Peek
   - HTML CSS Support
   - Path Intellisense

4. **Run the project**:
   - Right-click on `index.html`
   - Select "Open with Live Server"
   - Or simply open `index.html` in your browser

## 💻 Development

### VS Code Setup
The project includes VS Code workspace configuration with:
- **Auto-formatting** on save
- **Live reload** with Live Server extension
- **IntelliSense** for HTML, CSS, and JavaScript
- **Code validation** and error checking
- **Emmet** shortcuts for faster development

### File Organization
- **HTML files**: Each page is a separate HTML file with consistent structure
- **CSS**: Single `style.css` file with organized sections
- **JavaScript**: Single `script.js` file with modular functions

### Adding New Pages
1. Create new HTML file following the existing structure
2. Copy navigation and footer from existing pages
3. Update navigation links in all pages
4. Add page-specific content in the main section

## 🎯 Key JavaScript Functions

```javascript
// Navigation
navigateTo(page)           // Navigate to specific page
showNotification(message)  // Show user notifications
startCourse(courseType)    // Start a course
startModule(moduleName)    // Start a specific module
```

## 📱 Responsive Breakpoints

- **Desktop**: 1200px and above
- **Tablet**: 768px - 1199px
- **Mobile**: Below 768px

## 🎨 CSS Classes Structure

```css
/* Layout */
.container              /* Main content container */
.hero                  /* Hero section */
.skills-grid          /* Skills layout grid */

/* Navigation */
.navbar               /* Navigation bar */
.nav-menu            /* Navigation menu */
.hamburger           /* Mobile menu toggle */

/* Components */
.skill-card          /* Individual skill cards */
.btn-primary         /* Primary buttons */
.btn-secondary       /* Secondary buttons */
```

## 🔧 Customization

### Colors
Edit CSS variables in `style.css`:
```css
:root {
  --primary-color: #667eea;
  --secondary-color: #764ba2;
  --text-color: #333;
  --background-color: #f8f9fa;
}
```

### Adding New Skills
1. Create new HTML page (e.g., `new-skill.html`)
2. Add navigation link in all pages
3. Follow existing page structure
4. Update skill cards on homepage

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📞 Support

For support, email support@skilify.com or create an issue in the repository.

---

**Happy Learning with Skilify!** 🎓✨
