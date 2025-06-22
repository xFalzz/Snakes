# Snake's - Snake Lovers Community

A modern web application for snake enthusiasts to share photos, discuss care tips, and connect with fellow snake lovers.

## 🐍 Features

- **Photo Gallery**: Upload and share your snake photos
- **Music Player**: Built-in music player with snake-themed playlist
- **Responsive Design**: Works perfectly on desktop and mobile devices
- **Firebase Integration**: Secure file storage and authentication
- **Modern UI**: Beautiful interface with green snake-themed accents

## 🚀 Tech Stack

- **Frontend**: React 18, Vite
- **Styling**: Tailwind CSS, Material-UI
- **Backend**: Firebase (Storage, Authentication)
- **Deployment**: Vercel-ready

## 📦 Installation

1. Clone the repository:
```bash
git clone <your-repo-url>
cd Project-The-Snake-main
```

2. Install dependencies:
```bash
npm install
```

3. Set up Firebase:
   - Create a Firebase project
   - Enable Storage and Authentication
   - Update `src/firebase.js` with your Firebase config

4. Run the development server:
```bash
npm run dev
```

## 🏗️ Build

To build for production:
```bash
npm run build
```

## 🚀 Deployment

### Vercel
1. Connect your GitHub repository to Vercel
2. Vercel will automatically detect the Vite configuration
3. Deploy with the included `vercel.json` configuration

### GitHub Pages
1. Build the project: `npm run build`
2. Push the `dist` folder to your repository
3. Configure GitHub Pages to serve from the `dist` directory

## 🎨 Customization

### Colors
The application uses a green snake theme. To modify colors:
- Main accent color: `#22c55e` (green)
- Update CSS variables in `src/index.css`

### Images
- Place images in `public/images/`
- Update image paths in components to use `/images/filename.ext`

## 📱 Responsive Design

The application is fully responsive and works on:
- Desktop (1024px+)
- Tablet (768px - 1023px)
- Mobile (< 768px)

## 🔧 Configuration

### Firebase Setup
1. Create a Firebase project
2. Enable Storage and Authentication
3. Update the configuration in `src/firebase.js`:

```javascript
const firebaseConfig = {
  apiKey: "your-api-key",
  authDomain: "your-project.firebaseapp.com",
  projectId: "your-project-id",
  storageBucket: "your-project.appspot.com",
  messagingSenderId: "your-sender-id",
  appId: "your-app-id"
};
```

## 📄 License

This project is licensed under the MIT License.

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## 📞 Support

For support, please open an issue in the GitHub repository.

---

Made with ❤️ for snake lovers everywhere! 🐍 