#Paleo JS

Back in my day, we didn't code with all these fancy abstracted JavaScript methods like `push` and `slice`. We did things manually with `for` loops and basic operators. It made use strong. Built character. So do you have what it takes to go paleo and throw out all those modern coding conveniences?

This is nonsense of course. Methods like `split` and `concat` are profoundly useful and any decent engineer should know and use them. But have you ever wondered what's going on under the hood? What if you needed to micromanage performance and had to implement one or two manually? Or maybe you need a little practice, and taking a closer look at these important functions happens to be a fantastic way to challenge your knowledge of JS fundamentals.

Paleo JS is a library of incomplete stub functions and accompanying tests. The focus is on useful native JS methods that you should probably know a little more about, and can implement with basic syntax. You won't need callback functions, recursion, or even the `this` keyword. Everything can be solved with basic loops, conditionals, operators, and occasionally the `arguments` object.

##How To Use This Repo
Use GitHub's "Download ZIP" feature to download a copy of Paleo JS. Once downloaded, use your text editor of choice to fill out the code in the four numbered files, each covering a different group of useful native methods. Your job is to make each function work identically to its native equivalent, and to do so without using any functions you haven't written yourself. **No native methods allowed!**

To assist you, there is a suite of Mocha/Chai tests that you can run by opening `TestRunner.html` in any browser. This will track your progress, showing you which functions are failing and which tests are the problem. But beware relying too much on tests! There may be cases they miss, and you really should know whether or not your code is working without them.

##The Methods
If you have any questions about how one of these methods is designed to work, remember that they should work like native counterparts, so it might be a good idea to look up the [MDN page](https://developer.mozilla.org/) for anything you aren't clear on.

###Part 01: The Math Object
The first section covers various `Math` methods, including `Math.floor`, `Math.max`, and `Math.pow` among others. It should make for a fairly straight-forward start.

###Part 02: Array Methods
Next you will implement some useful array methods including `push`, `pop`, `shift`, `concat` and others. These functions are a huge part of what make arrays so useful, and you should be used to using them every day.

###Part 03: String Methods
Finally, you will attack a few string methods including `slice` (which should work on arrays too), `trim`, and `replace`. You may find that things get a little more complicated here.

###Part 04: Extra Credit
If you're feeling adventurous there a few extra methods for you to tackle, including the array method `splice`, the string method `split`, `Math.sqrt`, and if you are a true masochist: `Date.parse`.

##Bugs? Unexpected Behavior?
Feel free to submit an issue via GitHub, or even fork the project and submit your own PRs!
