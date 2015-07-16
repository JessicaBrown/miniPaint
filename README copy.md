# Understanding jQuery - Paint

This project will help us better understand basic DOM manipulation by creating a paint program! Much like Microsoft Paint.

Our index.html has 5400 divs on it. These divs are little black squares. These squares will each act as a pixel in our paint application. We shouldn't have to worry about our html or css in this project. Just our JavaScript file named app.js

# Step 1 - Add Class

The primary thing our 'pixes' do is change color. These little guys will be the building blocks of our works of art. With v1 of our app, let's go with just black and white pixels. Not because we can't have colors, but we'll need to save some features for v2 right?

- Initialize our app.js file by loading the document when it's ready

``` javascript
  $(document).ready(function() {
  // all code goes in here
  })
```

All of our code will live within this piece of code. 

- Make it so that when we click on a pixel, it changes to white
  - Notice in the our index.html file each div has the class of 'box'
  - We can use this box class as our selector. This gives us a way to touch our DOM

``` javascript
  $('.box').on('click', function() {
    $('.box').addClass('white');
  })

```

Our style.css file has a class named white. All it does is change the background of the black boxes to white.

In theory this would change the black box we click on to a white box, but what happens when we try it out?
It looks as though when we click on a box, all of our boxes are turning white!

This is because they all share the same class, by the name of box. We are currently telling jQuery that anything with the class 'box' should also have the class 'white'. This is a common problem in jQuery. Now we could give each div in the list of all 5400 divs their own unique ID, but I've got a better idea. 

- Use the 'this' keyword

``` javascript
  $('.box').on('click', function() {
    $(this).addClass('white');
  })
```
$('.box').on('click', function() {
    $('.box').addClass('white');
  })
The keyword 'this' is very common in JavaScript and it's also very confusing. In this case with our jQuery code it's referring to the specific box we clicked on. Often times you'll find yourself in positions where you need to change one thing, in an array of many. If you ever find yourself changing all of them, experiement with 'this' a bit. 

## Step 2 - Edits

Great, now we can create beautiful works of art. Black and white art, but art nonetheless. But what happens when we make a mistake? There is no way to edit our artwork. Let's fix that.

- Make it so that when we double click, it changes back to black with removeclass

``` javascript
  $('.box').on('click', function() {
    $(this).addClass('white');
  })

  $('.box').on('dblclick', function() {
    $(this).removeClass('white');
  })
```

## Step 3 - Reset Button

It looks like we have a reset button. Let's make it work. Remember how we could send blanket commands over all of our pixels by using the class name instead of the individual pixel? Let's use that method to create our reset button.

- Make the reset button work

``` javascript
  $('#reset').on('click', function() {
    $('.box').removeClass('white')
  })
```

## Step 4 - Color Pallette

Let's make our color buttons work!

- Create a color variable and set the default to white. This color variable will be the class we add to things.

``` javascript
  var color = 'white'
```


- Create a click event for each color which changes the color variable on click

``` javascript
  $('#red').on('click', function() {
    color = 'red';
  })

  $('#blue').on('click', function() {
    color = 'blue';
  })

  $('#green').on('click', function() {
    color = 'green';
  })

  $('#yellow').on('click', function() {
    color = 'yellow';
  })

  $('#white').on('click', function() {
    color = 'white';
  })
```

- Update the add class functionality to reflect our color variable rather than our actual class names

``` javascript

  $('.box').on('click', function() {
    $(this).addClass(color);
  })

  $('.box').on('dblclick', function() {
    $(this).removeClass(color);
  })

  $('#reset').on('click', function() {
    $('.box').removeClass(color)
  })

```

One last thing is a little messed up. Our reset and double click functions aren't working now. Because we placed the 'color' variable in the place of the remove class action, it will only respect the currently selected color. 

In jQuery's removeClass function we have the ability to remove multiple classes by just separating each class we want to remove by a space, like so:

``` javascript

  $('.box').remove  $('#reset').on('click', function() {
    $('.box').removeClass('white')
  })Class('red blue green yellow white');

```

Which is doable, but let's just put those in a variable so we don't have to write so much code

``` javascript

  var colors = 'white green red blue yellow'

  $('.box').on('dblclick', function() {
    $(this).removeClass(colors);
  })

  $('#reset').on('click', function() {
    $('.box').removeClass(colors)
  })

```
And we're all set! Feel free to play around and create some more features of your own!
