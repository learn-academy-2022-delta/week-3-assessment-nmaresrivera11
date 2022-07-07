# ASSESSMENT 3: Interview Practice Questions

Answer the following questions.

First, without external resources. Challenge yourself to answer from memory as if you were in a job interview.

Then, research the question to expand on your answer. Even if you feel you have answered the question completely, there is always something more to learn. Write your researched answer in your OWN WORDS.


1. What is `this` in JavaScript?

  Your answer:

  The 'this' in JavaScript is referring to a part of itself. We see 'this' used in React when something is held in 'state' or 'setSet'. The the value of it is declared earlier on, so that allows you to refer to the method or key/value pair with 'this' in front of it. The 'this' helps you not have to repeat declaration. I like to think of using 'this' like if the Class was a huge house, and if you wanted to call someone into another room of the house without walking all the way to that room, you would call them on your cellphone. Although, using 'this' in a file that lives in the components would be known as calling ('this'.props), to me it is like having a guest house because you can still call on it from another file that is associated with the main JavaScript file. Either way, the 'this' is used to call on something that was previously given a value that is held within the state or method of the same React App.

  Researched answer:

  What I explained was the use of 'this' in React, but even in React the main point is the 'this' is used in Class structures. React just uses a big class and so that was the easiest reference for me. The 'this' is the cellphones of Class houses. A way to call on specific information. The rooms of the house, are called objects.

2. What is React? Why would you use it?

  Your answer:

  React is an application that Facebook created in order to keep up with the millions of users that flooded to Facebook social media. It allows developers to render code as many times by using components. React is open source so developers can add to the folders of files with it to give ease to future code to be written. Open source allows developers access to these snippets and functionality. It allows users to have instant interactions with the application, such as likes, comments, and posts. Instead of having to refresh the page to see your interaction. React is also a great way for developers to avoid having to write code over and over behind the scenes because of it's components factor. React having the ability to store your code in a components folder with files that are relevant to the App.js (or main file) is best practice to render it later in your application over and over. A great example can be found in most social medias, how there is always the same structure of your newsfeed. Profile picture, username, some sort of image/video/post, and then a reaction above the comment section. being able to code the layout and then render it over and over to input that users specific information in the template that he/she previously made.

  Researched answer:

  A little more cleaner of an explanation would be that React is a component based system that uses these smaller components to create a larger application. We would use React in order to prevent repetition of code, by putting the functions in smaller components. We then can call on these components to start painting the bigger picture. 



3. Which lifecycle method is required in a React class component?

  Your answer:

  I am not too familiar with the usage of lifecycle method from the question. I would ask for the interviewer to elaborate more on which specific method that they are asking about.

  Researched answer:

  The lifecycle method that is required in a React class component is the Render method. The Render method is required because without it you will not see any of the code appear on your app. The Render is where the JSX comes into play because the HTML side of it will allow the developer to give the page structure. The JavaScript will allow users interactability with the application. 



4. What is JSX? What is one syntax difference between HTML and JSX?

  Your answer:

  JSX is a type of code used in React. It is a mix of HTML and JavaScript, that allows you to intertwine JavaScript within HTML. The syntax is a little bit different when using JSX because when starting an element in HTML you will distinguish the JavaScript inside with {JavaScript} around the portion that calls on JavaScript. Also, when giving a tag an attribute, the camelcase will be incorporated in it, instead of normal HTML. An example of this is <p className=""> vs <p class="">. There are many similarities but in the end the subtle differences make them very different.

  Researched answer:

  JSX is JavaScript flavored HTML syntax. As stated above, JSX uses className vs class because class is solely HTML syntax. The JSX will be rendered and lives inside of fragment tags so that we can give it unlimited nested items for the application.

5. What is yarn? What file(s) are modified in a React application when you run yarn?

  Your answer:

  Yarn is used through your terminal to run, start, test, or create certain applications. Running React through your terminal with yarn start will allow you to use your local device to act as a network for you to see and interact with your application. It will refresh as soon as the file is saved, and giving that real time interaction allows you to modify and see your application as a user would once deployed. Yarn can also be used to test your code for cleaner code with less bugs. Yarn is also able to create a React App right through your terminal, using yarn create react-app. Files that are modified in a React application when you run yarn are those that are coded under the source folder or any of the given folders that are tied to React with "create react-app" with yarn as well.

  Researched answer:

  Yarn is the package manager. The files that are all nested within the package or included when you create or start React with Yarn, will be brought to your code editor. The files that are modified are the ones you have imported to your main app.js file.

6. STRETCH: What is an anonymous function in JavaScript?

  Your answer:

  An anonymous function is a function that hasn't been given a name but it is still a valid function. An example could be something like:
  var hi = function () {
    console.log('hello')
    }

  Researched answer:

  Most commonly an anonymous function is used as an argument to other functions. It is only accessible by the variable it stored in. An anonymous function can have multiply arguments. Giving it multiple arguments is a pro for developers to use anonymous functions in this way.


## Looking Ahead: Terms for Next Week

1. Conditional rendering:
  Condtional rendering allows us to control when the information gets displayed to users on the app. Incorporating what we learned about logical operators, we can use && to set up a conditional that waits for both to be true before rendering to the page.

2. Object-oriented programming:
  It was created to handle large software systems. If you break it all down into objects that it is easier to change one small aspect without a large break in code. Sectioning off into objects is a great way to protect the large scale of the code. In this aspect we have seen it in React so in Ruby it amplifies the importance of containing these objects to pertain to certain areas of your application. The grand scheme is the complex large scale, but each piece of the puzzle is just multiple objects working together.

3. Ruby:
  Ruby is an open source backend, object-oriented programming language. It has many purposes but the simplicity and productivity of it is a great help to developers. Many call Ruby highly versitile and portable.

4. Ruby blocks:
  Ruby blocks are JavaScript anonymous functions. Blocks are created with 'do/end' keywords or {} which are then passed to methods. Blocks work on methods like 'Times' method, 'Each' method, 'While' method, and Ruby's 'Map' method. Each method will allow the blocks to act differently with it's parameters.

5. Ruby hashes:
  Ruby Hashes is a container for data. The hashes are stored in 'key: value' pairs. Hashes can be looked at a bit like arrays, where their values are referenced by their keys. Hashes can be iterated over, also similar to an array. Syntax for the output of hashes are seen aas the colon on the left side of the key and a "Hash rocket" directs the the value. An example : {:Key=> Value} 