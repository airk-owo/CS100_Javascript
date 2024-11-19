# JavaScript Practice: Filling in the Missing Code

## Overview
Welcome to this JavaScript practice repository! The purpose of this exercise is to help you get familiar with JavaScript and enhance your skills by filling in missing code to complete two examples. These exercises involve reading data from a text file, dynamically updating the content of a web page, and interacting with dropdown menus.

## 🚀 Getting Started

### Fork and Clone Repository
To get started, fork this repository to your Github account and then clone the forked repository to your local machine using the following command:

```bash
git clone https://github.com/your-user-name/CS100_Javascript.git
cd CS100_Javascript
```
---

### 📚 Example 1: Reading Data from a Text File
In Example1/index.html, your task is to complete the missing JavaScript code to read data from a file (data.txt) and display its content on the pre element in the web page.

#### 📝 Step 1: Starting the JavaScript Code Block
In HTML, to include JavaScript code, you need to start with a specific tag. This tag tells the browser that what follows is JavaScript.
Fill in the blank:
```html
<script>
``` 
🗝️ Hint: Think of the tag used to include JavaScript directly in an HTML file. 

#### 📝 Step 2: Fetching Data from a Text File
The fetch() function is used to request resources. Here, you want to fetch a file named data.txt that is in the same directory as your HTML file.
Fill in the blank:
```javascript
fetch('data.txt')
```
🗝️ Hint: Since the file is in the same folder as your HTML file, you can simply use the file name. 

#### 📝 Step 3: Logging the Response to the Console
After successfully fetching the file, you'll receive its content in response. To confirm you've fetched the data correctly, log it to the console.
Fill in the blank:
```javascript
console.log(data);
```
🗝️ Hint: To log something in JavaScript, use a function that starts with "console" and ends with "log". 

#### 📝 Step 4: Displaying the Data on the Web Page
You need to find the \<pre\> element in your HTML where you want to display the text. Use JavaScript to select this element by its id.
Fill in the blank:
```javascript
document.getElementById('output').textContent = data;
```
🗝️ Hint: You can select an element by its `id` using `document.getElementById('id')`. 

#### 📝 Step 5: Ending the JavaScript Code Block
Remember to close the block of JavaScript code that you started in Step 1.
Fill in the blank:
```html
</script>
```
🗝️ Hint: This is the tag that indicates the end of the script.

#### 📝 Step 6: Test Your Changes 
Open the HTML files in your browser to verify your solution.

#### 📝 Step 7: Commit and Push Your Changes
Commit your changes and push your changes to your remote repository. 

#### 🎉 Congratulations!
You've just learned how to use JavaScript to fetch data from a text file and display it on a web page. Now, try experimenting with different text files and explore what else you can do with the fetch() API!

---

### 📚 Example 2: Dynamic Dropdown Menu and History Display
In Example2/index.html, your task is to fill in the missing JavaScript code to achieve the following functionality:
- Populate a dropdown menu with options read from options.txt.
- When an option is selected, append the selected option to a "history" list displayed on the div element in the web page.

#### 📝 Step 1: Define the Dropdown Menu Label
You want to give the user a clear prompt above the dropdown. This is just a descriptive word to indicate what the user is choosing.
Fill in the blank:
```html
<h1>Choose a fruit</h1>
```
🗝️ Hint: Think of what kind of options you might put in a dropdown, such as "fruit", "color", "sport" or "car". 

#### 📝 Step 2: Starting the JavaScript Code Block
In HTML, use the appropriate tag to include JavaScript code. This tag tells the browser that what follows is JavaScript.
Fill in the blank:
```html
<scirpt>
```

#### 📝 Step 3: Fetching Data from a Text File
The fetch() function is used to request resources. Here, you want to fetch a file named options.txt that is in the same directory as your HTML file.
Fill in the blank:
```javascript
fetch('option.txt')
```

#### 📝 Step 4: Getting a Reference to the Dropdown Menu
Use JavaScript to select the dropdown element by its id so that you can dynamically populate it with options.
Fill in the blank:
```javascript
const dropdown = document.getElementById('dropdown');
```
🗝️ Hint: Use `document.getElementById('id')` to get the dropdown element. 

#### 📝 Step 5: Creating Option Elements
When creating each option element, set its value attribute to those read from the file.
You also need to set the text that will appear inside the dropdown.
Fill in the blanks:
```javascript
optionElement.value = option;
optionElement.textContent = option;
```
🗝️ Hint: The value and text content should both be the option string from the text file. 

#### 📝 Step 6: Appending Options to the Dropdown Menu
Add the newly created option to the dropdown menu.
Fill in the blanks:
```javascript
dropdown.appendChild(optionElement);
```
🗝️ Hint: You want to append the newly created option element to the dropdown element.

#### 📝 Step 7: Getting the Selected Option Value
You need to get the value of the currently selected option in the dropdown.
Fill in the blank:
```javascript
const selectedOption = document.getElementById('dropdown').value;
```
🗝️ Hint: Use `getElementById('id')` to access the dropdown and get its `value`. 

#### 📝 Step 8: Getting a Reference to the Output Div
You need to get the HTML element with the id of "output" to display the history.
Fill in the blank:
```javascript
const output = document.getElementById('output');
```
🗝️ Hint Use const with the name to define a variable and `document.getElementById('id')` to get the element. 

#### 📝 Step 9: Displaying the Selected Option in the History
Create a new paragraph element and add it to the "output" div to show the user's selection.
Fill in the blank:
```javascript
output.appendChild(newEntry);
```
🗝️ Hint: Use `appendChild(x)` to add x to the element. 

#### 📝 Step 10: Test Your Changes 
Open the HTML files in your browser to verify your solution.

#### 📝 Step 11: Commit and Push Your Changes
Commit your changes and push your changes to your remote repository. 

#### 🎉 Congratulations!
You have successfully implemented a dynamic dropdown menu that loads options from an external text file and displays a history of selected options. Try experimenting with different text files to see how the dropdown updates!

---

### 📚 Example of a Comment Form for Your Web Page 
A comment form allows users to leave comments on your website. The form uses JavaScript to capture the user's input, dynamically create HTML elements, and display the comment on the page. All data is handled on the client side, so the comments are temporary and will disappear if the page is refreshed. This approach is great for learning and practicing JavaScript but isn't suitable for real-world applications where data persistence is needed.

