# Notes
These will be notes for Unit 1.
HTML and CSS: Structure and style
**Also note, most of the link for css will reference the generic main.css, so change accordingly or just go to the repl.it or gist site provided at the top**

## Lesson 1: Frontend first steps
- simple intro on HTML: Hyper Text markup language
- Also for CSS: Cascading style sheets
- Usage of repl.it and Sublime text to write and run code.
	- codepen is also recommended

## Lesson 2: HTML the Right Way
- HTMl: take content and wrap in appropiate tags
- Describing the difference between elements, tags, and attributes
	- ```HTML 
		<div class="foo-class">
		  <p>This is a paragraph with <a href="https://somewhere.com">a link</a> in it.</p>
		  <p id="second-paragraph">This is the second paragraph</p>
		</div>
	```

	- **elements** : div, p, a
		- element usually consists of some content wrapped by open and closing tags
		- exceptions are `img` and some others
	- **tags** : < > and </ > mark beginning and end of element
	- **attributes** : class="foo-class" and id="second-paragraph" and ...
		- setting properties on an HTML element
- Explaining what is meant when people say HTML is about structure (vs. style or behavior)
	1. HTML specifies each and every one of its elements
		- visible (p and img) and not visible for humans (meta)
	2. specifies hierarchical relationship between elements in a doc
		- tree is a series of nodes with `<html>` as root
		- nodes above are **parents**, nodes next to each other **siblings**, nodes under **children**
- Explaining and using semantic HTML
	- **semantic**: when elements used to represent our content reinforce meaning of content
	- preferable since helps browsers, web-crawlers, screen readers, and collabs better understand
- Inspecting and manipulating HTML using Developer Tools
	- Chrome: CMD+Shift+C or opening up manually from 3 dots-> moreTools-> Developer Tools
	- if you ctrl+Rclick in dev console you can edit the HTML, then click away to see results
- Learning new HTML elements
	- anchor, image, header, video
- Taking content and structuring it into well-formed, semantic HTML
- Explaining what a11y is and describing and following basic a11y best practices
	- a11y (two 1's) stands for accessibility
	- practice making web pages accessible to both able-bodied and disabled users
		- we'll mainly focus on visually impaired
		- it also help web crawlers find and index content on the web to have it appear on search results
	- Logical content structure makes easier for screen readers to nav and understand
	- make sure to tell which language it's reading, usually placed in `<html lang="en">` tag
	- ARIA ("Accessible Rich Internet Applications"): web accessibility interface
		- helps those who uses it to understand and use websites
	- `role` tells the browser what each content is for and helps screen readers understand
		- best used for newer HTML5 sectioning 
			- e.g.: header, main, nav, footer
	- Conclusion: 
		- semantic HTML
		- lan attrib. on HTML tag
		- set the role attribute are appropiate locations

## CSS the Right Way
- Describing the different parts of a CSS ruleset (the selector, the declaration block, declarations, properties, values)
	- **ruleset**
		- ```CSS
			input {
				display: block;
				font-family: 'Proxima Nova W01', sans-serif;
				font-weight: 400;
				font-style: normal;
				height: 45px;
				width: 420px;
				min-width: 210px;
				max-width: 100%;
				padding: 6px 1em 5px;
				border: 1px solid #d0d2d5;
				border-radius: 3px;
				font-size: 15px;
				line-height: 30px;
				color: #404853;
				box-shadow: inset 0 3px 7px #f6f7f7;
			}
		```
		- describes how input elements should look
	- **selector**
		- `input` , is the element or elements that will be targeted by declarations that follows 
	- **declarationblock**
		- follows selector and is a block of delcarations contained within `{ }`
	- **declarations**
		- consists of a property and value it is to be set to
		- example: `display: block;`
	- **property**
		- has a range of valid values
			- for example, width can be set with 150px, 50%, or auto
	- **values**
- Explaining what is meant when people say CSS is about presentation (vs. structure or behavior)
	- CSS controls visual aspects of content on page (color, fonts, size, etc..)
	- Also avoid using inline styling, best practice for HTML for structure, CSS for presentation
		- refered as *separation of concerns* 
- Explaining the box model
	- most elements on a web page are rectangular boxed
		- space taken by element determined by width, height, padding, border and margin
		- normally everything will add up for total width
		- if we want model to respect width that was set, use `box-sizing`
- Inspecting and manipulating CSS using Developer Tools
	- can preview page on browser, experiement different settings, then using what you like into your code.
	- if you click on right side for source of css code, it'll be minified. 
		- click on `{}` on bottom left side for pretty print of the code
- Learning new CSS properties
- Solving basic CSS problems like setting background colors, font colors, width, height, etc.
- Using a wide variety of CSS selectors to target HTML elements
	- Look for the t004_CssSelectorsSamples.css
	- there's also pseudo elements and pseudo-classes
		- pseudo-elements:  p::first-letter
			- targets specific parts of the document
		- pseudo-classes:  div.foo:hover {...}
			- targets specific states of the document
- **Specificity** : when there are multiple style rules targeting same element, there will be conflicts
	- browser will choose the one with high specificity
- **cascade** : process browser follow to determine which CSS values gets applied for all prop. on given ele.
- Viewing HTML without CSS can be viewed differently depending on the browser
	- CSS reset with [Meyer Rest](https://meyerweb.com/eric/tools/css/reset/reset.css)
	- [normalize.css](https://necolas.github.io/normalize.css/) is a css library that normalize subset of browser elements to be consistent between browsers

## CSS Layouts
- Explaining and implementing horizontal centering for inline and block-level elements
	- `margin: auto` for horizontal centering if you put the left and right on auto.
		- block level by default extend to the full width of their parent container
			- can be overrided with width or max-width 
		- **block-level**: gets displayed on a new line, may contain additional bloc level or inline elements
			- height and width can be explicitly set.
	- centering inline elements with: `text-align: center`
		- in the case of h1 and h3, it's all of the text within to be centered, pictures can be as well
		- **inline** element (e.g.: a, strong, em, span) usually contains just text
			- dimensions determined by how much space its contents require. 
	- **inline-block elements** : combines both; displays inline like a span or a element
		- but can give explicit width, height, margin, padding
		- `font-size: 0` is a trick to remove whitespace between inline-block elements
		- line breaks are considered as a space
	- NOTE: default settings is what you need, don't need to edit unless you have reason to do so.
- Explaining and using the display: block vs. display: inline-block vs. display: inline
	- explanations above
- Explaining the so-called "white-space" problem and how to solve it
	- blank space creates white spaces in between
	- trick is to use `font-size: 0`
- Explaining and using position: static vs. position: relative vs. position: fixed vs. position: absolute
	- **position: static** : this is the default
		- any HTML element with this will have **normal flow** (default way browsers renders content)
		- things appear in the order they appear in HTML
	- **fixed** : element position stays in place even when the user scrolls
		- taken out of the normal flow, and other elements pos. as if fixed doesn't exist
	- **relative** : it is still in the normal flow, but we can use offset properties
	- **absolute** : similar to fixed, but they offset in relation to the first parent container with non-static position
		- e.g. have a navbar and you want to align logo to the left and links to the right
	- **offsets** : (left, top, right, bottom) can be used on fixed, relative, absolute
- Explaining and using the float property to get text to wrap around images or other content
	- **float** : getting text to wrap around an image or other container
		- there's `float: left` and right, which will move the images to those sides of container
		- floated images are taken out of the normal flow
		- **clear** : specifies on which sides of an element floating elements are not allowed to float
- Coding up a wide range of layouts from designs.

## Forms and Inputs
- Following accessibility best practices for forms
- Validating form inputs
- Creating and describing forms and form elements
- Learning new input types
- terms:
	- **forms** containers that hold a set of inputs
		- the element wraps all inputs and labels.
		- action and method will ensure user input can be submitted even if JS is disabled
			- *action* is URL of server endpoint that submitted form data sent to
			- *method* is the request method that browser uses when sending data to server
	- **inputs** individual conponents that user interacts with (e.g. text, e-mail, pw...)
		- labels used to tell human users and crawelers and etc what input is for using `for`
			- goes on label and should be set to the ID of the input its for
			- ```HTML
				<label for="first-name">First name</label>
				<input id="first-name" name="first-name" type="text">
			```
		- attributes: 
			- placeholder: set text that initially displays before any user data
			- required: used to indicate input must be filled out
			- pattern: used to supply regular expression patterns and user input must match (e.g. e-mail format)
			- type: how element looks and how validator works (e.g. `type='radio'` )
	- **fieldset** : used to group together related input and labels
		- helps web crawler and screen readers understand how inputs are grouped
		- **legend** is a title for fieldset 
	- `<select>` is used to let user choose from list of options
		- `<option>` and can give a default using `selected attribute`
		- `<optgroup>` can be used to wrap multiple options under a given group name
	- `<buttons>` allows user to submit and reset the form by using the type attrib.
	- accessibility of form:
		- tree stores role of form elements (form and button)
		- element's accessible names are determined by their labels
		- state form elements are in  (selected and unselected)
		- how to interact with those elements

## Responsive Design Basics
- Explaining the principles of responsive design (mobile-first, content-driven, responsive)
	- **responsive** : creating layouts that dynamically respond to dimensions of user's viewport
	- **content-driven** : recognizing users are real people with real goals
		- people getting what they expect
	- **mobile-first** : mobile devices has smallest screen size, so design first for good foundations
		- then we can enhance for bigger screens
- Using media queries to override default styles
	- **media quereies** tools to apply block of CSS rules to only certain viewports
		- can specify how things should look at one viewport size and different for another
		- ```CSS
			@media only screen and (min-width: 640px) {
			  .foo {
			    /* do something to
			    override default settings*/
			  }
			}
			@media only screen and (min-width: 800px) {
			  .foo {
			    /* do something to
			    override settings at previous threshold settings*/
			  }
			}
			```
- Analyzing and explaining the float: left; approach to implementing a responsive grid
	- one method uses `display: inline-block` another is from flexbox, and finally `float: left`
		- float: left is guaranteed to work for all browsers
- Coding up designs that call for more than one layout, depending on the width of the viewport
	- classic grid: 960px, twelve columns
		- 1000px container (prevent content from getting to close to edge on smaller screens)
		- 960px row: max width and centered
		- 60 px columns: child content contained within
		- 20px gutter: each column has 10px right and left gutters
	- column width should be *fluid* where they should scale in size relative to width of row
