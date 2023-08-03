### Conceptual Exercise

Answer the following questions below:

- What is React? When and why would you use it?

    React is one of the most popular JavaScript frameworks -- along with Angular, Ember, and Vue -- that's fun and easy to pick up. You would use React to create a front end of an app whose usable pieces are divided up and organized into reusable components.

- What is Babel?

    Babel helps transpile JSX into legal JavaScript code. JavaScript will throw errors when we return HTML elements like <h1> because JS isn't expecting < > after a return statement. It's invalid JavaScript syntax. Babel script will tell JavaScript that it's actually JSX -- HTML rendered through JavaScript.

- What is JSX?

    JavsScript XML -- HTML-like syntax extension to JavaScript. JSX helps us embed HTML elements and syntax inside JavaScript files. JSX isn't legal JavaScript, so needs to be transpiled with a tool like Babel above. JSX is more strict than HTML, where elements must have an explicit closing tag </b>, or be explicitly self-closed <input name='msg' />

- How is a Component created in React?

    React components used to be class-based, but now components have more flexibility, readability, and easier to write as function-based components.
    EX.: const Shiba = () => (<img src="https://6 ... .png" /> ).
    Components shouldn't be very complicated, and if they can be broken up into smaller and smaller componenets, it is best practice to do so. React components are exported out of their own file, and imported into other component files that will be rendering them.

- What are some difference between state and props?

    State is used to store variables in which data will be changing frequently, or at least once. Changing the value in a state variable will re-render the component entirely. Props are immutable, so willnot and cannot be changed within a component. However, state values can be used and passed down to other components as props.

- What does "downward data flow" refer to in React?

    Downward data flow -- React convention whereas parent componenets are "smarter" than their children, which typically have more logic and flexibility with state variables, and their children componenets are generally simplier and smaller. Props are usually passed down from parents to children, and the children usually do not keep their own state.

- What is a controlled component?

    A component in React that is controlled by use of state -- useState. Forms are controlled componenets that have access to a user's input data, and utilize form submission functions. Controlled componenets use React's state as the single source of truth. A controlled component has a handler function every time state mutates, which makes it easy to modify or validate user input.

- What is an uncontrolled component?

    Uncontrolled components are any component in which React is NOT in control of state. React is not in control of state with DOM elements usually because react can't interact with them directly, such as videos.

- What is the purpose of the `key` prop when rendering a list of components?

    The key prop allows you to interate over lists. React wants a key prop to help identify which items have changed, are added, or removed -- it's like an ID for an element. Key props halp React track changes.

- Why is using an array index a poor choice for a `key` prop when rendering a list of components?

    Array indices can easily change when removing items or pushing them onto the beginning of the array. Key props are not supposed to change.

- Describe useEffect.  What use cases is it used for in React components?

    useEffect is utilized to do something as soon as a component is rendered, and/or as soon as a piece of state changes. useEffect accepts a callback function as its first argument, and returns undefined or a function. useEffect accepts an optional 2nd argument that is an array, which tells React to skip applying an effect if certain values haven't changed between re-renders. The array, 2nd argument, is also called its dependencies.

- What does useRef do?  Does a change to a ref value cause a rerender of a component?

    A built in React hook. useRef returns a mutable object with a key of current, whose value is equal to the initial value passed into the hook. The object persists across renders (so it's like a local variable, but independent of state). Mutating the object does not trigger a re-render. You would use useRef to access an underlying DOM element, and/or setting up and clearing timers.

- When would you use a ref? When wouldn't you use one?

   You would use useRef to access an underlying DOM element, and/or setting up and clearing timers. Dont overly rely on using useRef to access DOM elements, since that's not what React has it meant to do.

- What is a custom hook in React? When would you want to write one?

    Custom Hooks are very versatile, but not essential. Make a custom hook to abstract logic out of a component, to handle repeated tasks (toggle an on/off switch, or make an axios call, add/access localStorage), and generate your own JSX. Custom Hooks can hide complex logic behind a simple interface, or help untangle a messy component. Custom hooks should go in their own directory `hooks` and each hook should start with `use` -- useToggle, useFetch, etc.

