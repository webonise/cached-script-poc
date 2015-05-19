# cached-script-poc
A proof-of-concept about $.cachedScript (and the "once" function).

We're really struggling with the following requirement:
  * We want to load a script only at the point when it is needed.
  * We want to execute some arbitrary function once that script is loaded.
  * We should be able to do this multiple times without fetching and/or reloading the script each time.
  
So this is our PoC about how we can implement this.

The PoC should have the following form:

  * There is an external JavaScript file which performs some really obvious side effect when it is loaded.
  * There is a `withScript(f)` function that loads that external JavaScript only once, and then performs `f`, returning the result of `f`.
  * In an HTML page, we call `withScript(f)` multiple times with an `f` that performs some really obvious side effect each time it is called.
  
It should be obvious from the side-effects that we have called `withScript(f)` multiple times, but the external JavaScript file was only loaded once.
