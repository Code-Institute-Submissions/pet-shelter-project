# Pet shelter

View live version of the website [here](https://linktowebsite).

Milestone Project 1: User-Centric Front-end Development – Code Institute

This website was made as my first milestone project for the Code Institute course. The website was created for a fictional pet shelter and the project requirements were to create a static front-end website using HTML and CSS.

add some images of the website here later<<<

---

## Contents

- [**User Experience Design (UXD)**](<#user-experience-design-(uxd)>)

  - [Strategy](#strategy)
    - Goal
    - User stories
  - [Scope](#scope)
    - Functional specifications
    - Content requirements
  - [Structure](#structure)
    - Information architecture
    - Interaction design
  - [Skeleton](#skeleton)
    - Wireframes
  - [Surface](#surface)
    - Colours
    - Typography
    - Uniformity

- [**Features**](#features)

  - Existing features
  - Future features

- [**Technologies**](#technologies)

  - Languages
  - Frameworks
  - Libraries
  - Software

- [**Testing**](#testing)

- [**Deployment**](#deployment)

  - Hosting online
  - Running locally

- [**Credits**](#credits)

  - Code
  - Text
  - Media
  - Acknowledgements

- [**Notes**](#notes)

---

## User experience design (UXD)

### Strategy

#### Goal

The goals for the (fictional) website owner would be to raise more awareness of their existence, get more people to know that they exist. This would result in more clients and therefore possibly more income. Another goal that this website would accomplish is better and more efficient contact between them and their clients.

The goal in regards to users is to provide them a website to allow for easy access to information, provide clear and simple contact details and show an overview of all pets that are available for adoption.

#### User stories

- As a **visitor**, I would like **to see an overview of all pets that are available for adoption**, so that **I don't have to travel there to find out if there is anything available that I'm looking for**.

- As a **visitor**, I would like **to see images of all pets that are available for adoption**, so that **I can decide if it's worth visiting the shelter**.

- As a **visitor**, I would like **an easy to fill in contact form**, so that **I can contact the pet shelter to get answers to any questions that I have**.

- As a **visitor**, I would like **to know the pet shelters' address information**, so that **I know where to travel to**.

- As a **visitor**, I would like **clear and concise information about letting go of a pet**, so that **I can get a good understanding of what the process is like**.

- As a **site owner**, I would like our website **to have an intuitive navigation system**, so that **visitors can easily access all available information**.

- As a **site owner**, I would like our website **to have a contact form where clients can specify their needs**, so that **we prevent unnecessary customer support calls**.

### Scope

#### Functional specifications

The website should have a navigation bar. When the user clicks on the logo it should go back to the homepage. Content on the website should support different screensizes. Wherever appropriate and or possible, visible indicators should be shown to users when they can perform an action on the website (like clicking a link or a button).

#### Content requirements

The website needs to provide information about: the pet shelter, the process of adopting a pet and the process of letting go of a pet. The website needs to provide address and contact information. The website needs a seperate contact form where clients can specify their needs. The website needs a page that shows all pets that are available for adoption.

### Structure

#### Information architecture

The website uses what I would call a 'spider web structure', where every page is always just one click away. Most pages are accessible through the navigation bar at the top of the website, while some adoption sub-category pages are accessible in the footer on the bottom of the website. I tried making a diagram of the structure, but it ended up looking pretty horrible. If you'd like to see it click [here](wireframes/structure-tree.png).

#### Interaction design

Users can use the clickable elements in the navigation bar to browse through the website. Some visible indicators will tell the user at which page they currently are, while other visible indicators will alert users when they are hovering a link. Users with touchscreens can swipe up and down to scroll through the web pages and they can (double)tap to open links and browse through the website. There won't be any audio or video that users can interact with.

### Skeleton

The shape of the website will be pretty standard: a navigation bar at the top, the main content in the middle and a footer with some address info, extra navigation links and social media links at the bottom. The users will be able to get around the website by using the navigation bar, which will also have a clickable logo to go back to the frontpage. Users will also be able to use some more direct links in the footer to pages that are not presented in the navigation bar (for instance: sub categories for pet adoption). Most of the content will be presented in a grid-style layout. On smaller screensizes the layout will transform to a smaller number of columns to ensure readability and prevent deformations.

#### Wireframes

To see the wireframes in PDF click [here](wireframes/pet-shelter-wireframes.pdf).

### Surface

#### Colours

My plan was to use green, beige/off-white and dark blue/black colours for the website. I tried several different variations and settled on the ones shown in the image below. The contrast between them is pretty great, which ensures that everything is clearly readable.

![Colour palette](wireframes/colour-palette.png)

#### Typography

I'm currently using the font-style 'Montserrat' from the Google Fonts library throughout the website. It just looks very clean and readable in my opinion.

#### Uniformity

To keep the website looking uniform I'm trying to making sure that all related contents throughout the website are consistent in font size and styling. The positioning of elements should be consistent in height, padding and spacing. I'm also using either grid, flexbox or both to present the content in a logical order.

**_[Back to top](#contents)_**

---

## Features

### Existing features

#### General features

**Navigation bar**:
Every page will have a navigation bar that will always stay visible at the top of the screen. The navigation bar has a clickable logo on the left side that returns the user to the homepage. On the right side it has internal links to the adoption page, letting go page, about us page and the contact page. It will be fully responsive in the sense that it will shrink on smaller screen sizes and eventually collapse into a so called hamburger menu.

**Footer**:
Every page will have a footer that is visible when the user is at the bottom of the page. On the left side it contains address information and a phone number. In the middle it has internal links to pages related to pets, most important are the direct links related to adopting a pet, since they take the user directly to them instead of having to go through the general adoption page. On the right side are social media icons that could have taken visitors to the external social media platforms if this wasn't a fictional project. The footer will be fully responsive, depending on the users' screen size, content will change from a horizontal to a vertical alignment.

#### Page specific features

**Homepage**:
The homepage provides the visitor with some general information about the pet shelter. It also includes some introductory information regarding both pet adoption and letting go of a pet as well as directions to their respective pages. Some images of pets are shown to engage the visitor. Below the main part of the homepage there is a section showing a video about why to adopt a pet to engage the visitor.

**Adoption page**:
The adoption page has images of different types of pets and below them are corresponding cards with information. The cards have an animation effect when hovered with the mouse and they are clickable, when clicked the visitor is taken to the corresponding pet adoption page.

**Dog gallery page**:
The dog gallery page provides the visitor with an overview of all dogs available for adoption. Each dog has a card that contains a photo, information and a short description of the pet.

**Cat gallery page**:
The cat gallery page provides the visitor with an overview of all cats available for adoption. Each cat has a card that contains a photo, information and a short description of the pet.

**All pets gallery page**:
The all pets gallery page provides the visitor with an overview of all pets available for adoption, so both cats and dogs in one overview. Each pet has a card that contains a photo, information and a short description of the pet.

**Let go page**:
The let go page provides the visitor with some information about letting go of a pet, it does this simply through text and there is also a background image. Inside the text is an internal link that directs the visitor to the contact page.

**About us page**:
The about us page provides the visitor with some information about the origins of the pet shelter, its mission and some additional information. It does this simply through text and there is also a background image.

**Contact page**:
The contact page allows the visitor to state their reason for inquiry and include their contact details and any additional information. This is all done through a form, which has textboxes for the name, email and phone number, while the reason for inquiry can be selected in a dropdown menu and the additional information can be provided in a text-area. The form can simply be sent to the site owner(s) by clicking the submit button below the form.

### Future features

- Image carousel in the pet cards, so visitors could be shown multiple pictures of available pets.

- Pet cards could be made clickable, in which case a contact form would automatically fill in that the visitor would like to inquire information regarding that specific pet.

**_[Back to top](#contents)_**

---

## Technologies

### Languages

placeholder text

### Frameworks

placeholder text

### Libraries

placeholder text

### Software

placeholder text

**_[Back to top](#contents)_**

---

## Testing

A seperate file with testing information can be found [here](/linktotesting.mdfile).

**_[Back to top](#contents)_**

---

## Deployment

### Hosting online

placeholder text

### Running locally

placeholder text

**_[Back to top](#contents)_**

---

## Credits

### Code

#1: Used [this video](https://www.youtube.com/watch?v=gj4zoaigSqI) by Youtube channel 'dcode' to maintain aspect ratio on images by using 'object-fit' in CSS.

#2: Referenced [this online explanation](https://codetheweb.blog/css-advanced-background-images/) from https://codetheweb.blog/ about background image manipulation to help with the background image positioning on the about us page, especially the 'background-position-x' property helped me achieve what I was looking for.

#? https://stackoverflow.com/questions/11488960/how-do-i-put-my-websites-logo-to-be-the-icon-image-in-browser-tabs

### Text

placeholder text

### Media

Used https://coolors.co/ to create an image of my colour palette.

### Acknowledgements

placeholder text

**_[Back to top](#contents)_**

---

## Notes

placeholder text

**_[Back to top](#contents)_**

---
