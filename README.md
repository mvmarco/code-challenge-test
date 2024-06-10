# Image Management Application

This application allows users to manage images through a grid view with pagination and search functionalities. Users can also add new images using a form.

## Features

- **Pagination:** Navigate through multiple pages of images.
- **Search:** Search for images by title with a 'no results found' state.
- **Accessibility:** Fully keyboard navigable and accessible components.
- **Form for Adding Images:** Add new images with a form (title, description, image path).
- **Responsive:** Ensures a great experience on both desktop and mobile devices.
- **No Data or No Search View:** Displays appropriate messages when there are no images or no search results.
- **Storybook Implementation:** Storybook has been implemented following the atomic structure.

## Storybook

- **Storybook Implementation:** Storybook has been implemented following the atomic structure.

## Setup and Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/your-username/your-repo.git
   cd your-repo
   ```
2. **Install dependencies:**
   ```npm install```
3. **Start the development server:**
   ```npm start```
4. **Run StoryBook:**
   ```npm run storybook```

## Deployment with GitHub Pages
- **Link:** .....


## Limitations and Challenges

- Vite Compatibility: I could not use Vite due to an unresolved conflict with msw.
- Testing: I faced issues with configuring the tests and was unable to resolve them within the given time frame. As a result, test coverage is incomplete.
