// Function to fetch data from the PokéAPI based on user input
const findPoki = async () => {
    const category = document.getElementById("input1").value;  // First input box (category)
    const num = document.getElementById("input2").value;  // Second input box (ID or number)

    try {
        const response = await fetch(`https://pokeapi.co/api/v2/${category}/${num}/`);
        const data = await response.json();
        
        // Display fetched data in the console for now
        console.log(data);

        // Call function to display the data on the UI
        displayData(data);
    } catch (error) {
        console.error('Error fetching data:', error);
        alert('Failed to fetch data. Please check your input.');
    }
};


const displayData = (data) => {
    const resultDiv = document.getElementById('result');
    

    resultDiv.innerHTML = '';


    const nameElement = document.createElement('p');
    nameElement.textContent = `Name: ${data.name}`;
    
    const idElement = document.createElement('p');
    idElement.textContent = `ID: ${data.id}`;

    resultDiv.appendChild(nameElement);
    resultDiv.appendChild(idElement);
};


document.getElementById('findButton').addEventListener('click', findPoki);
