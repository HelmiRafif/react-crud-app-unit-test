# React CRUD App

This is a simple CRUD (Create, Read, Update, Delete) application built with React and TypeScript. The application allows users to manage a list of items through a user-friendly interface.

## Features

- Create new items
- Read and display a list of items
- Update existing items
- Delete items from the list

## Project Structure

```
react-crud-app
├── src
│   ├── components
│   │   ├── Create.tsx      # Component for creating new items
│   │   ├── Read.tsx        # Component for displaying items
│   │   ├── Update.tsx      # Component for updating items
│   │   └── Delete.tsx      # Component for deleting items
│   ├── App.tsx             # Main application component
│   ├── index.tsx           # Entry point of the application
│   └── types
│       └── index.d.ts      # TypeScript interfaces for items
├── tests
│   ├── Create.test.tsx     # Unit tests for Create component
│   ├── Read.test.tsx       # Unit tests for Read component
│   ├── Update.test.tsx     # Unit tests for Update component
│   └── Delete.test.tsx     # Unit tests for Delete component
├── package.json             # NPM configuration file
├── tsconfig.json            # TypeScript configuration file
├── jest.config.js           # Jest configuration file
└── README.md                # Project documentation
```

## Getting Started

To get started with the project, follow these steps:

1. **Clone the repository:**
   ```
   git clone <repository-url>
   cd react-crud-app
   ```

2. **Install dependencies:**
   ```
   npm install
   ```

3. **Run the application:**
   ```
   npm start
   ```

4. **Run tests:**
   ```
   npm test
   ```

## Usage

Once the application is running, you can:

- Use the form to create new items.
- View the list of items displayed on the screen.
- Click on an item to update its details.
- Delete items using the delete button.

## Contributing

Contributions are welcome! Please feel free to submit a pull request or open an issue for any suggestions or improvements.

## License

This project is licensed under the MIT License.