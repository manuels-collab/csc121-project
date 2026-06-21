# Programming Modules Learning Website

A professional, responsive website showcasing the first three programming modules for Computer Science students.

## 📋 Website Information

**Created by:** Prince Emmanuel Umoh  
**Registration Number:** 2025/co/cs/071  
**Department:** Computer Science

## 🎓 Modules Covered

1. **Module 1: Web Programming Basics**
   - Client-Server Architecture
   - HTTP Protocol
   - URLs and Domains
   - Web Browsers & Servers

2. **Module 2: Hypertext Markup Language (HTML)**
   - HTML Document Structure
   - Semantic HTML5 Elements
   - HTML Forms
   - Best Practices

3. **Module 3: Cascading Stylesheets (CSS)**
   - CSS Selectors and Properties
   - Box Model
   - Flexbox & Grid Layout
   - Responsive Design

## 📁 File Structure

```
website/
├── index.html          # Landing page with module overview
├── module1.html        # Web Programming Basics module
├── module2.html        # HTML module
├── module3.html        # CSS module
├── contact.html        # Contact page with form
├── style.css           # Main stylesheet
├── script.js           # JavaScript functionality
└── README.md           # This file
```

## 🚀 Getting Started

### Opening the Website

1. **Locate the website folder:**
   - Path: `c:\Users\USER\Desktop\CSC 111 project\csc121\website`

2. **Open in a web browser:**
   - Right-click on `index.html`
   - Select "Open with" and choose your browser (Chrome, Firefox, Edge, Safari)
   - OR drag and drop `index.html` into your browser

3. **Alternatively, serve locally:**
   - Using Python 3:
     ```bash
     cd c:\Users\USER\Desktop\CSC 111 project\csc121\website
     python -m http.server 8000
     ```
   - Then visit `http://localhost:8000` in your browser

## 🌟 Features

### Navigation
- **Sticky Navigation Bar** - Always visible for easy access
- **Quick Links** - Jump between modules and contact page
- **Smooth Scrolling** - Smooth transitions between sections

### Module Pages
- **Rich Content** - Text, lists, tables, and examples
- **High-Quality Images** - Professional images from Unsplash
- **Code Examples** - Properly formatted code blocks
- **Learning Outcomes** - Clear learning objectives
- **Concept Cards** - Highlighted key concepts

### Contact Page
- **Personal Information** - Name, registration, and department
- **Contact Form** - Functional form with validation
  - Name (required)
  - Phone Number (required)
  - Email (optional)
  - Subject dropdown (required)
  - Comments/Message (required)
  - Subscribe checkbox
- **Validation** - Client-side form validation
- **Success/Error Messages** - User feedback on submission

### Responsive Design
- **Mobile-Friendly** - Works perfectly on all devices
- **Tablet Optimized** - Perfect viewing on tablets
- **Desktop Enhanced** - Full experience on large screens
- **CSS Grid & Flexbox** - Modern layout techniques

### Accessibility
- **Semantic HTML** - Proper heading structure
- **Alt Text** - Images have descriptive alt text
- **Keyboard Navigation** - Fully keyboard accessible
- **Color Contrast** - WCAG compliant

## 🎨 Design Features

- **Modern Color Scheme** - Professional blue primary color
- **Smooth Animations** - Subtle hover effects
- **Professional Typography** - Clear, readable fonts
- **Consistent Spacing** - Well-organized layouts
- **Interactive Elements** - Engaging hover states
- **Scroll-to-Top Button** - Easy navigation back to top

## 💻 Technical Details

### HTML5
- Semantic elements (`<header>`, `<nav>`, `<main>`, `<footer>`)
- Form elements with proper validation
- Responsive meta tags

### CSS3
- CSS Grid for layouts
- Flexbox for flexible components
- Media queries for responsiveness
- CSS variables for maintainability
- Smooth transitions and animations

### JavaScript
- Form validation and submission handling
- Smooth scrolling
- Dynamic navigation highlighting
- Scroll-to-top functionality
- User feedback messages

## 📱 Browser Compatibility

- ✅ Chrome (latest)
- ✅ Firefox (latest)
- ✅ Safari (latest)
- ✅ Edge (latest)
- ✅ Mobile browsers

## 🔧 Customization

### Changing Colors
Edit the CSS variables in `style.css`:
```css
:root {
    --primary-color: #0066cc;
    --secondary-color: #004499;
    --accent-color: #ff6b6b;
}
```

### Adding More Content
1. Edit the respective `.html` file
2. Follow the existing structure and classes
3. The styling will automatically apply

### Updating Contact Information
Edit `contact.html` and `index.html` to update:
- Name: Prince Emmanuel Umoh
- Registration: 2025/co/cs/071
- Department: Computer Science

## 📧 Contact Form Setup

The contact form includes client-side validation. For production use, consider:
1. Using FormSubmit.co (free service)
2. Using a backend service like Formspree
3. Building a custom backend with Node.js/Python

## 🎯 Learning Outcomes

After exploring this website, students will understand:
- How web programming fundamentals work
- How to structure web pages with HTML
- How to style websites with CSS
- Responsive design principles
- Professional web development practices

## 📚 Resources Used

- **Images:** Unsplash (free high-quality images)
- **Icons:** Unicode and CSS symbols
- **Fonts:** System fonts with fallbacks

## ✨ Future Enhancements

Potential additions:
- JavaScript module with examples
- Interactive code editor
- Quizzes for each module
- Video tutorials
- Search functionality
- Dark mode toggle
- Multi-language support

## 📝 Notes

- All content is educational and accurate for beginner programming students
- The website is fully functional without internet connection (except for images)
- Form submission is simulated; connect to a backend for real data storage
- All code is clean, commented, and follows best practices

## 🎓 Usage in Class

This website can be used for:
- Self-paced learning
- Quick reference material
- Project portfolio demonstration
- Teaching examples of web design
- Student assessment

## 📞 Support

For issues or improvements:
1. Check the JavaScript console for errors
2. Verify all files are in the same directory
3. Ensure browser is up to date
4. Clear browser cache and reload

---

**Created:** 2024  
**Version:** 1.0  
**Status:** Ready for Deployment
