---
title: 'JavaScript Snippets In The Browser'
date: '2021-07-30'
tags: ['WebDev', 'Tips&Tricks']
abstract: "Let's look at how we can write and run JavaScript snippets in the browser."
---

## The Problem

Sometimes, when building web applications, I want to test a piece of JavaScript code before actually writing it in the application, for example, checking the response of an API call using fetch or filtering out an array or converting the response JSON into the required format.

We can use the **_console_** tab in the browser's dev tools to write JavaScript, just type a line and hit <kbd>enter</kbd>. If we want to write multi-line expressions, we can use <kbd>shift</kbd> + <kbd>enter</kbd> to break into a new line, and hit <kbd>enter</kbd> at the end to execute all those lines. We don't have to use <kbd>shift</kbd> + <kbd>enter</kbd> always, sometimes the browser will automatically break into a new line after hitting <kbd>enter</kbd> if the expression is a multi-line expression (e.g., loops, function declarations etc.).

But, when we want to go to a piece of code we executed before, we have to use the up arrow key <kbd>&#8593;</kbd> (just like cycling through terminal history). When we do that, we can't expect the browser to break into a new line when you hit <kbd>enter</kbd> inside a loop or a function while editing it.

## The Trick

Chrome and Firefox have a feature (I don't know about Safari) where you can write JavaScript snippets just like you do in your text editor (with limited IntelliSense, and autocompletion of course).

### For Chrome

In Chrome, open dev tools by pressing <kbd>F12</kbd> and navigate to the **_Sources_** tab. Under that tab, on the right side, you will see a tab called **_Snippets_**, click on that. If you don't see it, click on the double angled brackets button (circled in red below) to expand the menu.

<figure>
	<img src="{{ '/assets/chrome_devtools_snippets.jpg' | url }}" alt="Chrome Dev Tools Snippets">
	<figcaption>Opening Snippets tab Chrome</figcaption>
</figure>

Now, click on the **_New snippet_** button to create a new snippet. You can name it whatever you want or leave it as it is. The browser will open a new snippet on the right side. There you can write your JavaScript code and run it.

<figure>
	<img src="{{ '/assets/chrome_devtools_snippets_example.jpg' | url }}" alt="Chrome Dev Tools Snippets Example">
	<figcaption>JavaScript snippets in Chrome example.</figcaption>
</figure>

After writing the code, click on the run/play button on the bottom right corner (highlighted in green) or press <kbd>ctrl</kbd> + <kbd>enter</kbd>, to run it. You can format the code using the button on the bottom left corner (circled in red above). You can view the output in the **_Console_** tab.

### For Firefox

In Firefox, open dev tools by pressing <kbd>F12</kbd> and navigate to the **_Console_** tab. on the top right corner of that tab, you will see a button (circled in red below). Clicking that will open a multi-line editor to the left. There you can write your JavaScript code and run it.

<figure>
	<img src="{{ '/assets/firefox_devtools_snippets.jpg' | url }}" alt="Firefox Dev Tools Snippets">
	<figcaption>Switch to multi-line editor mode (Ctrl + B)</figcaption>
</figure>

After writing the code, click on the run button or hit <kbd>ctrl</kbd> + <kbd>enter</kbd> to run it. You can format the code using the button with curly brackets (circled in red below). The output will be displayed on the right.

<figure>
	<img src="{{ '/assets/firefox_devtools_snippets_example.jpg' | url }}" alt="Firefox Dev Tools Snippets Example">
	<figcaption>Snippet editor on the left, Ouput on the right.</figcaption>
</figure>

### Note

We can run the code multiple times in Chrome. But in Firefox, it gives **_redeclaration_** error if we try to run the code multiple times.

<figure>
	<img src="{{ '/assets/devtools_snippets_note.jpg' | url }}" alt="Redeclaration Error">
	<figcaption>Redeclaration Error in Firefox.</figcaption>
</figure>

To avoid this error, wrap the code in a function and call it or write an IIFE (Immediately Invoked Function Expression)😉
