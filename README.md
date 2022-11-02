# Frontend Mentor - Interactive rating component solution

This is a solution to the [Interactive rating component challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/interactive-rating-component-koxpeBUmI). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
- [Author](#author)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the app depending on their device's screen size
- See hover states for all interactive elements on the page
- Select and submit a number rating
- See the "Thank you" card state after submitting a rating

### Links

- Solution URL: [https://www.frontendmentor.io/solutions/interactive-rating-component-3JkdowjaPz](https://www.frontendmentor.io/solutions/interactive-rating-component-3JkdowjaPz)
- Live Site URL: [https://seranela.github.io/interactive-rating-component/](https://seranela.github.io/interactive-rating-component/)

## My process

### Built with

- HTML5
- CSS
- Flexbox
- Mobile-first workflow

### What I learned

Custom styling for radio buttons making use of hover and focus states. Making use of CSS incremental counter for numberthe buttons without having to specify individual styles for each uniquely numbered button.

I was getting accessibility errors about needing a text label on the legend and input label elements. Discovered that 'display: none' was the culprit. Used a special CSS styling for visually hiding the legend and input labels, but still keeping it visible for screen reader users.

When I checked tab ordering in Firefox, it was all messed up. Only indexes 1 and 2 showed out of the 6 and not in the order I expected. Discovered that Firefox gets confused and I needed to close the tab and reload the page to fix it.

The orange color in the style guide seems to fail WCAG-AA Contrast Ratio when used as a background with white foreground text such as the submit button in the design. I ended up creating a darker orange for this combination. Will ask community about this for any feedback.

## Author

- Frontend Mentor - [@seranela](https://www.frontendmentor.io/profile/seranela)