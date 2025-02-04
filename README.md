User Management App
This is a React-based User Management application that displays a table of users with options to create, edit, and delete users. The app also includes pagination, responsive design, dark/light mode, and form validation.

Features
✅ User Table: Displays a list of users with details such as Name, Surname, Age, Birth Date, University.
✅ CRUD Operations: Users can be created, edited, and deleted.
✅ Fixed Columns on Scroll: The ID and Name columns remain fixed while the rest of the table is scrollable on smaller screens.
✅ Pagination: The table displays 10 users per page for better readability. (Optional Feature)
✅ Dark/Light Mode: Users can switch between dark and light themes.
✅ Form Validation: Ensures proper input validation using Yup & Formik.
✅ Responsive Design: The table and forms adapt to different screen sizes.
✅ Toast Notifications: Provides real-time feedback for user actions.
✅ Mock Data & API Integration: Fetches and updates data using DummyJSON API (Note: Changes are not persisted).

Tech Stack
Frontend: React, Material-UI
State Management: Redux Toolkit
Form Handling & Validation: Formik, Yup
UI Notifications: React Hot Toast
Mock API: DummyJSON (Data updates are not persistent on the server)

Notes
The DummyJSON API does not save created, updated, or deleted users on the server. Refreshing the page will reset the data.
The project follows best practices for React development with Redux Toolkit, Formik, and MUI.