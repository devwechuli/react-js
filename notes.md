# Using State Correctly

setState() is asynchronous so it's risky to assume that the previous call has finished when you call it. Also, React will sometimes batch(squash together ) calls to setState together into one for performance reasons

If a call to setState() depends on cureent state, the safest thing is to use the alternate callback form. The fact that you can pass a function to this.setState lends itself nicely to a more advanced pattern called functional setState.

Basically, you can describe your state updates abstractly as separate functions. This pattern helps you when testing