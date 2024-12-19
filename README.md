# A Simple Counter App.

A Counter Project built with React and Vite is a simple, interactive web application that demonstrates state management and real-time UI updates using React, with fast development and build times powered by Vite.

In this project, users can increment, decrement, and reset a counter displayed on the screen. The project highlights the use of React's useState hook for managing the counter state, while Vite provides a fast and efficient development environment with features like hot module replacement (HMR) for quick feedback during development.

This project showcases basic React concepts and offers a smooth development experience with Vite's optimized build process.

# A small Project showcasing Life-Cycle of a Component

Using React’s useEffect hook, the project tracks and logs actions like when the component is mounted (using componentDidMount equivalent), when the state changes (similar to componentDidUpdate), and when the component is unmounted (like componentWillUnmount). This provides a clear understanding of how React manages components over time.

By combining this with the Counter app, the project serves as an educational tool for understanding React's lifecycle methods and their practical applications, making it easier for developers to handle side effects and manage component states effectively.

## Features

- **Project 06.1 - Explorer** :

The Counter App with Component Lifecycle and Props Drilling project combines multiple core React concepts to offer a hands-on learning experience. Below are the key features of the project:

1. Basic Counter Functionality:

Users can increment, decrement, and reset a counter value.
State management is handled using React's useState hook, ensuring real-time updates to the UI.

2. Component Lifecycle Integration:

The app demonstrates React's component lifecycle through the use of the useEffect hook.
Logs are displayed at different stages of the component lifecycle:
Mounting: When the component is first added to the DOM (like componentDidMount).
Updating: When the counter state changes (similar to componentDidUpdate).
Unmounting: When the component is removed from the DOM (like componentWillUnmount).
These logs provide insights into how React manages component lifecycle events.

3. Props Drilling:

The app uses props to pass the counter state and related functions (increment, decrement, reset) through several layers of nested components.
This illustrates how data flows through parent-to-child relationships in a React component hierarchy, highlighting the concept of props drilling.

4. Hierarchical Component Structure:

Components are organized in a nested structure to demonstrate prop drilling in practice.
Intermediary components that don’t directly use the state pass props down to their child components, simulating real-world scenarios in larger apps.

5. Interactive UI:

A simple, user-friendly interface displays the counter value and buttons for incrementing, decrementing, and resetting the counter.
React updates the UI instantly whenever the state changes, providing immediate feedback to the user.

6. Development with Vite:

The app is built using Vite, ensuring fast build times and a smooth development experience.
Hot Module Replacement (HMR) is enabled for quick feedback and faster iteration.

You can see a live version of this project [here]("https://github.com/Apostle1327/Project-06.1---Explorer.git").

## How to Use

1. Clone the repository :

   ```bash
   git clone gh repo clone Apostle1327/Project-06.1---Explorer

   ```

## Screenshots

<img width="330" alt="Countdown - 1" src="../Project 06.1 - Explorer/src/Images/Project 06.1-Explorer - 1.png">
<img width="330" alt="Countdown - 1" src="../Project 06.1 - Explorer/src/Images/Project 06.1-Explorer - 2.png">
<img width="330" alt="Countdown - 1" src="../Project 06.1 - Explorer/src/Images/Project 06.1-Explorer - 3.png">

## Technologies Used

- **HTML** : Markup structure.
- **CSS** : Styling and layout.
- **React + Vite + JSX (JavaScript & XML)** : React + Vite + JSX is a modern stack for building fast web apps. React provides reusable UI components, Vite offers fast development and optimized builds, and JSX allows writing HTML-like code in JavaScript for seamless UI creation. .
