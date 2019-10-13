Used create-react app for the project.

- Used Axios for request
- A small walkthrough, the project has a blog container that shows the posts, onclick of which you can see the details and even delete them.Through a toggle button you get an option to add a new post using a simple form.
- The get, post and delete request are being called , you can check them in the network tab.
- The post data , when clicked also shows a loading...!! text when the post is being loaded, hence user knows that something is happening.
- The request doesnt has the author in it, still added the same on blog js, just to undertand that it can be modified.
- The get request ( when fetching details of a particular card ) is handled in fullpost js. This helps to check the network calls that are being made hence avoiding the uneccesary calls or infinite number of calls as the call is inside of componentDidUpdate()
- The code has clean view, the container ( blog) contains all the component and is then added to core file i.e. app.js which keeps the code really modularised and easy to work on.
