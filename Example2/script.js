// Function to load options from the text file
function loadOptions() {
    // Fetch data from a txt file
    fetch('options.txt')
        .then(response => response.text())
        .then(data => {
            // Get reference to the dropdown menu element
            const dropdown = document.getElementById('dropdown');
            const options = data.split('\n').map(option => option.trim()).filter(option => option !== '');

            //create <option value='Apple'>Apple</option>
            options.forEach(option => {
                const optionElement = document.createElement('option');
                optionElement.value = option;
                optionElement.textContent = option;
                dropdown.appendChild(optionElement);
            });
        })
        .catch(error => console.error('Error loading options:', error));
}

// Function to display the selected option and keep a history of selections
function showSelected() {
    // Get a reference to option of the dropdown element
    const selectedOption = document.getElementById('dropdown').value;
    // Get a reference to the HTML element id output to a variable output
    const output = document.getElementById('output');

    if (selectedOption) {
        const newEntry = document.createElement('p');
        newEntry.textContent = `You selected: ${selectedOption}`;
        // Append the newEntry as a child of the output element
        output.appendChild(newEntry);
    }
}

// Load options on page load
window.onload = loadOptions;