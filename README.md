#Caveman JS

Back in my day, we didn't code with all these fancy abstracted JavaScript methods like `push` and `slice`. We did things manually with `for` loops and basic operators. So can you code like your grandpappy and/or grandmommy? Do you have what it takes to go paleo and throw out your modern coding conveniences?

This is nonsense of course. Methods like `split` and `concat` are profoundly useful and any decent engineer should know and use them. But have you ever wondered what's going on under the hood? What if you needed to micromanage performance and had to implement one or two of these manually? Or maybe you are a new JS developer, and you just need a little practice.

Caveman JS is a library of incomplete stub functions and accompanying tests. The focus is on useful native JS methods that you should probably know a little more about, and can implement with basic syntax. You won't need callback functions, recursion, or even the `this` keyword. Everything can be solved with basic loops, conditionals, operators, and occasionally the `arguments` object. If you need to practice your JavaScript fundamentals, this is the repo for you.

##How To Use This Repo
Use GitHub's "Download ZIP" feature to download a copy of Caveman JS. Once downloaded, use your text editor of choice to fill out the code in the four numbered files. Each covers a different group of useful native functions. Your job is to make each function work identically to its native equivalent, and to do so without using any functions you haven't written yourself. **No native functions allowed!**

To assist you, there is a suite of Mocha/Chai tests that you can run by opening `TestRunner.html` in any browser. This will track your progress, showing you which functions are failing and which tests are the problem. But beware relying too much on tests! There may be cases they miss, and you really should know whether your code is working or not without them.

##The Methods
If you have any questions about how one of these functions is designed to work, remember that they are should operate identically to their native counterparts unless otherwise specified. Might be a good idea to look up the [MDN page](https://developer.mozilla.org/) for any methods you aren't clear on.

###Part 01: The Math Object
Covers various `Math` methods, including `Math.ceiling`, `Math.abs`, and `Math.pow` among others. It should make for a pretty easy start.

###Part 02: The Array Prototype
Covers some useful array methods including `push`, `pop`, `shift`, `concat` and others. These are functions you should be using every day.

###Part 03: The String Prototype
Covers a few string methods including `slice` (which should work on arrays too), `split`, and `replace`. Things start to get a little more complicated here.

###Part 04: Extra Credit
If you're feeling really adventurous there a few extra methods for you to tackle here, including `splice` (doable), `Date.parse` (quite a challenge), and `Math.sqrt` (hahahaha). Have fun!

##Bugs? Unexpected Behvaior?
Feel free to submit an issue via GitHub, or even fork the project and submit your own PRs!
