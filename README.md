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

6. useImperativeHandle => In certain circumstances, we want our parent component to reach down to the child component, getting data that originates in the child component for its own use. We can achieve this type of data flow with the useImperativeHandle Hook, which allows us to expose a value, state, or function inside a child component to the parent component through ref. Useful for snackbar.

7. useContext => It is used like props. Get rid of nested props. We set up a context provider in the componet where we pass the data. Also provide the 'value' property where we pass the data we want to acccess in other component. Then we use that context in any component we want by passing the context in useContext.

8. useMemo => The useMemo Hook can be used to keep expensive, resource intensive functions from needlessly running. Kinda like the useEffect. It takes a function as the first argument which we want to run and we pass the dependency of when we want to run it as the second argument. Used for improved performance and  reduced lag in big projects. 
Here are a couple of cases when you should consider using useMemo: You're noticing a component's render is frustratingly slow, and you're passing a calculation to an unknowable number of children, such as when rendering children using Array. map()

9. useCallback => Similar as the useMemo. With the useMemo, we can store a value that is memoized from a funtion (in a variable) and also we pass a value in the useMemo    (findLongestName(data) is a value that we used in the useMemo example. When we pass the function itself, useMemo becomes useless. Thats where useCallback comes in. It will then work as expected of a useMemo.

  Look up more on useMemo, useEffect and useCallback. 
  
  Bye!
