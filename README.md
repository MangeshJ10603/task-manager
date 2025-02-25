# Task Management App

## Table of Contents
- [Introduction](#introduction)
- [Features](#features)
- [Project Structure](#project-structure)
- [Setup and Installation](#setup-and-installation)
- [Usage](#usage)
- [Design Decisions](#design-decisions)
- [Technologies Used](#technologies-used)

---

## Introduction
This is a task management application built using React and TypeScript. It allows users to create, update, move, and delete tasks while maintaining their priority and deadline information. The app uses a context-based state management approach to handle tasks efficiently.

## Features
- Create new tasks with a title, description, priority, and deadline.
- Move tasks between different statuses (To Do, In Progress, Done).
- Delete tasks permanently.
- Search for tasks.
- Interactive UI with smooth transitions and animations.

## Project Structure
```
/src
├── components
│   ├── ui
│   │   ├── button.tsx
│   │   ├── card.tsx
│   │   ├── dialog.tsx
│   │   ├── dropdown-menu.tsx
│   │   ├── input.tsx
│   │   ├── select.tsx
│   │   ├── textarea.tsx
│   ├── TaskCard.tsx
│   ├── TaskColumn.tsx
│   ├── TaskSearch.tsx
│   ├── CreateTaskDialog.tsx
│
├── context
│   ├── TaskContext.tsx
│
├── hooks
│   ├── use-toast.ts
│   ├── use-is-mobile.ts
│
├── types
│   ├── task.ts
│
├── App.tsx
├── main.tsx
└── index.css
```

## Setup and Installation
### Prerequisites
Ensure you have the following installed on your system:
- Node.js (>=16.0)
- npm or yarn

### Steps to Run the Application
1. Clone the repository:
   ```sh
   git clone https://github.com/your-repo/task-manager.git
   cd task-manager
   ```

2. Install dependencies:
   ```sh
   npm install
   # or
   yarn install
   ```

3. Start the development server:
   ```sh
   npm run dev
   # or
   yarn dev
   ```

4. Open the app in your browser at:
   ```
   http://localhost:5173
   ```

## Usage
- Click the "Add Task" button to create a new task.
- Use the dropdown menu on each task to move it between different statuses.
- Click the delete option to remove a task permanently.
- Use the search bar to find specific tasks.

## Design Decisions
1. **Context API for State Management**
   - Instead of using a global store (e.g., Redux), the Context API was chosen for a lightweight state management approach.

2. **Reusable UI Components**
   - Components like buttons, dialogs, inputs, and dropdowns are abstracted into a reusable UI library.

3. **Task Data Structure**
   - Tasks are stored with an ID, title, description, priority, deadline, and status to facilitate filtering and organization.

4. **Animations and Transitions**
   - CSS animations enhance the user experience by making task transitions smooth.

5. **Mobile Responsiveness**
   - A custom hook `useIsMobile()` ensures that the app is optimized for mobile screens.

## Technologies Used
- **React.js & TypeScript** – For building a type-safe UI.
- **Tailwind CSS** – For styling and responsiveness.
- **Date-fns** – For handling date formatting.
- **Lucide-react** – For UI icons.

---
This project is continuously evolving. Contributions are welcome!

