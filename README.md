# What is a website??

In this exploration, you'll learn and discover the main languages for website development.

* **HTML** is used to define the structure of a page - it tells your browser _what_ is on the page.
* **CSS** is used to style the contents of a page - it tells your browser _how_ things on the page should look.
* **JavaScript** is used to make pages interactive - it tells your browser _what_ to do _when_ users interact with things on the page.

# The Easy Peasy Lemon Squeezy Part 🍋

* Double click on `index.html` file, now you should see the website in your browser! Yay!
* Open the folder in VSCode. You can do this by dragging the folder to the VSCode icon on your machine, or you can go to VSCode and go to `File > Open`, and choose the folder from your computer directories.

### `index.html`

* Open `index.html` in VSCode
* Every time you change something in this file, you'll need to **save the file** and then **refresh the browser**.  
Make the following changes:
  * Change the title `Welcome to the Full-Stack Bootcamp by CODED!` to something more exciting! Change it to whatever you like. Add some emojis to it to make it fun 🥰
  * Change the name `Fulan Al-Fulani` to your actual name
  * Change the bio from `I love CODED, and I'm willing to learn lots of cool stuff!` to a quick bio about yourself
  * Change the goals in the list to your own goals for this bootcamp

### `styles.css`

* Open `styles.css` in VSCode
* Select everything in the file (`ctrl + A` or `cmd + A`) then cut (`ctrl + x` or `cmd + x`) 😙
* Now save and refresh the page. What do you see?! 😱
* Now undo (`ctrl + z` or `cmd + z`)! 😏
* Save and refresh the page. الحمد لله everything looks better again!
* Change the **background** color using the color picker.  
  You can access the color picker by hovering over the color square for a second. 
* Change the text **color** from white to any other nice color that matches your new background color.

# The Challenging Part 🤼‍♀️

There are several buttons in `index.html` that look like this:

```html
<button onclick="doSomething()">Do Something</button>
```

* What do you think `onclick` in the button tag does? Being a good developer means being good at research. Look this up on Google.
* The `SHOUT!` button is supposed to convert all text in the page to **UPPERCASE**.  
  But it's not working because it's trying to call the wrong function.  
  Can you find the correct function name by reading `index.js`?

# The Superhero Part 🦸🏻‍♂️

So you think that was easy? Try something a little spicier! 🌶

* Go to `index.js` and edit the `toggleColor` function so that it changes the text color to something that suits the new styling you have in `styles.css`
