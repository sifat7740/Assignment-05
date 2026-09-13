1.Project-Name
 => DevStack

2.Discription
 => Explore Technologies And Develop your stack
3.Technology That Used
 =>talwind css,
 React,
 Vite,
 typescript ,
 React-Toastify,
 Json
 
 
4.3 Features About The project
 =>Count your stack
 =>Explore Programming Tecnologies. 
 =>Compare Technologies Side by Side.

5.Answer of all questions
 1.Jsx is a syntax used in React that  write HTML-like code inside JavaScript.

2.Props are used to pass data from a parent component to a child component. Props are read-only, which means the child component cannot directly change them.

State is data that is managed inside a component. State can change over time, and when the state changes, React re-renders the component to display the updated information.

3.useState is a React Hook used to store and manage changeable data inside a component.

4.The useEffect hook in React is used to perform side effects in a component. Side effects are tasks that happen outside the normal rendering process, such as fetching data, loading JSON files, updating the document title, or working with APIs.

In my project, I used useEffect to load the technology data from the JSON file when the component first loads. Inside useEffect, I can fetch the JSON file and then store the received data in a state variable.

5.Every item in a .map() list needs a unique key prop because React uses the key to identify each list item and efficiently update the DOM when the list changes. A unique key helps React know which items were added, removed, or updated.

6.Conditional rendering means displaying different UI elements based on a specific condition. In my project, I used it for the empty stack message. If the stack has no items, I show an “Your stack is empty” message; otherwise, I display the items in the stack.

7.A parent component passes data to a child component through props. If the child needs to send data back to the parent, the parent passes a callback function as a prop, and the child calls that function with the required data.
