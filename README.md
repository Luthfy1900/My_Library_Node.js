# My_Library_Node.js
This is a simple book library using Node.js and bootsrap.

# What's Needed?
In order to run this you will need two things:
* Node.js installed
* Live Server Extension in VS code installed

# Running the App
* After installing both elements, write a script in the HTML referencing the javascript file. It would look something like this:
```<script src="app.js"></script>```.
* Then afterwards, to test it out, look at the bottom right of VS code, you will see a "Go Live" button.
* Click on it and it should open up in the browser.

# Note
* Just running the app using the terminal will not work because Node.js does not have a window or document. That's why we installed "Live Server". You can test it out by typing ```node app.js``` in the terminal to try and open the application.
* It will work if you do ```console.log("Hello World")``` because ```console.log()``` is merely a function with no DOM manipulation.
