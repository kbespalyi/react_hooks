# react_hooks

Introduction to Hooks in react(<https://www.newline.co/fullstack-react/articles/an-introduction-to-hooks-in-react/>)

Demo for React Hooks

Create a react-hooks (<https://www.newline.co/courses/the-newline-guide-to-creating-a-react-hooks-library/>)
Create Custom Hooks (<https://www.youtube.com/watch?v=aCu4PaygeP4>)

Community Reaction to Hooks
Since the news of React hooks the community has been excited about the feature and we've seen tons of examples and use cases for React Hooks. Here are some of the highlights:

This website (<https://nikgraf.github.io/react-hooks/>) which showcases a collection of React Hooks.
react-use (<https://github.com/streamich/react-use>), a library that ships with a bunch of React Hooks.
This CodeSandbox (<https://codesandbox.io/s/ppxnl191zx?from-embed>) example that shows how to use the useEffect Hook to create animations with react-spring (<https://github.com/drcmda/react-spring>).
An example (<https://gist.github.com/aweary/be8338a211e72b9f1563d75091005c0e>) of a useMutableReducer hook that lets you just mutate the state to update it in the reducer.
This CodeSandbox example (<https://codesandbox.io/s/y570vn3v9>) that shows complex usage of the child-parent communication and reducer usage.
A toggle component (<https://codesandbox.io/s/m449vyk65x>) built with React Hooks.
Another collection (<https://rehooks.com/>) of React Hooks that features hooks for input values, device orentation and document visibility.

References to the Different types of Hooks (<https://reactjs.org/docs/hooks-reference.html>)
There are various types of Hooks that you can begin to use in your React code. They are listed below:

- useState allows us to write pure functions with state in them.
- The useEffects hook lets us perform side effects. Side effects can be API calls, Updating DOM, subscribing to event listeners.
- useContext allows to write pure functions with context in them.
- useReducer gives us a reference do a Redux-like reducer
- useContext allows to write pure functions that return a mutable ref object.
- useMemo is used to return a memoized value.
- the useCallback Hook is used to return a memoized callback.
- useImperativeMethods customizes the instance value that is exposed to parent components when using ref.
- the useMutationEffect is similar to the useEffect Hook in the sense that it allows you perform DOM mutations.
- The useLayoutEffect hook is used to read layout from the DOM and synchronously re-render.
- Custom Hooks allows you to write component logic into reusable functions.

To test React code (<https://codesandbox.io/>)

git add --all
git commit -am "some changes..."

Check if everything ok
npm --no-git-tag-version version prerelease

Last step, to publish to npm rep

npm version prerelease
