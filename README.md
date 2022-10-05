# React-Hooks


1. useState => The useState() is a Hook that allows you to have state variables in functional components. 
so basically useState is the ability to encapsulate local state in a functional component. The first state being set initially and the second one is a function used to 
update the state value.

2. useReducer => Works as same as the useState. When more than one state or many states is being updated at the same time, useReducer can be used. It takes in the states as
objects and second argument in the array is dispatch to dispactch the state action. In the useReduces funtion, first argument is reducer function and
in second argument, initial states in objects defined . The useReducer function has initial state as 1st argument and the action type as the 2nd. Switch cases are provided inside the reducer function.

3. useEffect => It is a function that is called whenever the page is re-rendered. We can pass in array of dependancy of diff states to specify when to run the useEffect hook. It primarly used in api calls?.

4. useRef => The useRef Hook allows you to persist values between renders. It can be used to store a mutable value that does not cause a re-render when updated. It can be used to access a DOM element and also manipulate.useRef returns a mutable ref object whose .current property is initialized to the passed argument ( initialValue ). Taking the input value, focusing on input etc.

5. useLayoutEffect => Works like useEffect. But useEffect is runned when the whole component is rendered or re-rendered completely. useLayoutEffect on the other hand is called before the component is rendered to the user. Mostly UI based. Thats why its called layoutEffect?.
