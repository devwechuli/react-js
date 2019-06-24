# Using State Correctly

setState() is asynchronous so it's risky to assume that the previous call has finished when you call it. Also, React will sometimes batch(squash together ) calls to setState together into one for performance reasons

If a call to setState() depends on cureent state, the safest thing is to use the alternate callback form. The fact that you can pass a function to this.setState lends itself nicely to a more advanced pattern called functional setState.

Basically, you can describe your state updates abstractly as separate functions. This pattern helps you when testing

## Mutable Data Structures

Mutating nested data structures in your state can cause problems with React. A much better way is to make a new copy of the data structure in question. Using the spread operator is a convenient way of copying enumarable properties from one object to another in a more succint way.

there is a light efficiency cost due to the O(N) space/time required to make a copy, but it's almost always worth it to ensure that your app doesn't have extremely difficult to detect bugs due to mischevious side effects.

Immutable state just means that there is an old state object and a new state object that are both snapshots in time. The safest way to update state is to make a copy of it, then call this.setState with the new copy.

## Designing State
Some good design patterns:
- **Minimize Your State** - You want to try to put as little data in state as possible. Litmus test 
    - does x change?If not, x should not be part of state. It should be a prop.
    - is x already captured by some other value y in state or props? If so, derive it from there instead
- **Downward Data Flow** - State should live on the parent. We want to support the 'downward data flow philosophy of React'. In general, it makes more sense for a parent component to manage state and have a bunch of 'dumb' stateless child display components. This makes debugging easier, because the state is centralized. It's easier to predict where to find state.