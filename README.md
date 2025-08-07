# 🍴 Recipe Finder App

This project is a **single-page web application built with Angular 20** . It allows users to:

- Explore delicious meals from an external recipe API
- Click on recipe images to view detailed instructions on the official website
- Submit their own custom recipes through a reactive form
- See submitted recipes appear on the main recipe list instantly

---

## 📚 About the Project

The **Recipe Finder App** is designed to demonstrate key Angular concepts such as routing, services with `HttpClient`, reactive forms, local data handling, and deployment using Vercel.

---

## ✨ Key Features

### 🏠 Home Page
- Welcoming landing page with an image and introductory text.
- Clean and minimal design to start the user journey.

### 🍜 Recipes Page
- Recipes are loaded in real-time from the **[TheMealDB public API](https://www.themealdb.com/)**.
- Each recipe displays an image, title, and basic info.
- ✅ **Clicking on a recipe image** opens the official recipe page with preparation instructions in a new tab.
- ✅ **User-submitted recipes** are also included in this list, appended below the API results.

### 📝 Submit Recipe Page
- A **reactive form** allows users to add their own recipes by filling:
  - Recipe Name
  - Ingredients
  - Instructions
  - (Optional) Upload an image
- The form includes **real-time validation**:
  - Required fields are validated with clear error messages.
  - Submit button is only enabled when the form is valid.
- ✅ Once submitted, the recipe is **instantly added** to the Recipes page for everyone to see.

---

## 🔍 How It Works

### 🔁 Routing
- Angular Router is used to manage page navigation without reloads.
- The `app.config.ts` file defines all routes: Home, Recipes, and Submit.

### 🔧 API Integration
- Recipes are fetched using Angular’s `HttpClient` via a custom `RecipeService`.
- The app combines data from the public API with user-submitted data stored locally in memory.

### 🧪 Reactive Form with Validation
- Built using Angular’s Reactive Forms module.
- Shows error messages if:
  - Fields are empty
  - User tries to submit before completing all required fields

---

## 🚀 Live Demo

🌍 Deployed on Vercel:  
👉 [https://angular-assignment-gabrielaateixeira.vercel.app](https://vercel.com/gabriela-teixeiras-projects-e1c5fafe/angular-recipe-app)

---

## 📸 Screenshots

### 🔎 Recipes Page  
Displays meals from TheMealDB and submitted recipes:  
➡️ Click on any recipe image to view the full recipe.

### 📝 Submit Page  
Reactive form with error messages and image preview:  
➡️ Submit your recipe and see it appear on the Recipes page!

---

## 📦 Tech Stack

- Angular 20 (standalone + signals)
- TypeScript
- HTML/CSS
- TheMealDB API
- Vercel (for deployment)

---

## 🧪 How to Run Locally

1. Clone the repository:

```bash
git clone https://github.com/2025-Summer-ITE-5425-OTA/angular-assignment-gabrielaateixeira.git
cd angular-assignment-gabrielaateixeira
