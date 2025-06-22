# 🐍 Snake's - A Community for Reptile Enthusiasts

**A modern, responsive web application for snake lovers to share photos, discover care tips, and connect with a passionate community.**

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![GitHub Actions Workflow Status](https://img.shields.io/github/actions/workflow/status/xFalzz/Snakes/deploy.yml?branch=main)](https://github.com/xFalzz/Snakes/actions)

---

### ✨ [Live Demo (Link)](https://snakes-tau.vercel.app/) <!-- Replace with your Vercel deployment link -->

![Snake's App Screenshot](https://i.ibb.co/6y45sF0/Screenshot-2024-05-20-112048.png) <!-- Replace with a real screenshot of your app -->

## 🌟 Features

-   **Dynamic Photo Gallery**: Upload and view beautiful snake photos from the community.
-   **Interactive Music Player**: Enjoy a curated playlist while you browse.
-   **Fully Responsive Design**: A seamless experience on desktop, tablet, and mobile devices.
-   **Firebase Integration**: Secure and reliable backend for image storage and user authentication.
-   **Modern Tech Stack**: Built with the latest web technologies for optimal performance.

## 💻 Tech Stack

-   **Frontend**: React 18, Vite
-   **Styling**: Tailwind CSS, Material-UI
-   **Backend & Storage**: Firebase
-   **Deployment**: Vercel & GitHub Pages

## 🚀 Getting Started

To get a local copy up and running, follow these simple steps.

### Prerequisites

-   Node.js (v16 or later)
-   npm

### Installation

1.  **Clone the repository:**
    ```sh
    git clone https://github.com/xFalzz/Snakes.git
    cd Snakes
    ```

2.  **Install NPM packages:**
    ```sh
    npm install
    ```

3.  **Set up Firebase:**
    -   Create a project on the [Firebase Console](https://console.firebase.google.com/).
    -   Enable **Storage** and **Authentication** (Google Sign-In).
    -   Create a `.env` file in the root of your project and add your Firebase configuration keys:
        ```env
        VITE_FIREBASE_API_KEY="YOUR_API_KEY"
        VITE_FIREBASE_AUTH_DOMAIN="YOUR_AUTH_DOMAIN"
        VITE_FIREBASE_PROJECT_ID="YOUR_PROJECT_ID"
        VITE_FIREBASE_STORAGE_BUCKET="YOUR_STORAGE_BUCKET"
        VITE_FIREBASE_MESSAGING_SENDER_ID="YOUR_MESSAGING_SENDER_ID"
        VITE_FIREBASE_APP_ID="YOUR_APP_ID"
        ```

4.  **Run the development server:**
    ```sh
    npm run dev
    ```
    The application will be available at `http://localhost:3000`.

## 🏗️ Building for Production

To create a production-ready build:

```sh
npm run build
```
This will generate a `dist` folder with the optimized assets.

## 🌐 Deployment

This project is configured for easy deployment on both Vercel and GitHub Pages.

### Vercel (Recommended)
1.  Push your code to your GitHub repository.
2.  Import your repository into [Vercel](https://vercel.com/).
3.  Add your Firebase `VITE_` variables to the project's **Environment Variables** in the Vercel dashboard.
4.  Vercel will automatically detect the Vite configuration and deploy the site.

### GitHub Pages
The included `.github/workflows/deploy.yml` workflow will automatically build and deploy the project to GitHub Pages whenever you push to the `main` branch.

## 🤝 Contributing

Contributions are welcome! If you have suggestions or want to improve the project, please feel free to:
1.  Fork the repository.
2.  Create a new branch (`git checkout -b feature/AmazingFeature`).
3.  Commit your changes (`git commit -m 'Add some AmazingFeature'`).
4.  Push to the branch (`git push origin feature/AmazingFeature`).
5.  Open a Pull Request.

## 📄 License

Distributed under the MIT License. See `LICENSE` for more information.

---

**Made with ❤️ for the love of snakes!** 