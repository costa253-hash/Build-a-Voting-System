---

# Polling System Project

A simple polling system built with JavaScript, where users can add options, vote for options, and view the results. The system ensures that each voter can only vote once per option.

## Features

- **Add poll options**: Add new options to the poll.
- **Vote for options**: Allow users to vote for an option using their unique voter ID.
- **View results**: Display the number of votes each option has received.

## Project Structure

- **index.html**: HTML file to display the page and test the poll.
- **poll.js**: JavaScript logic for handling the poll operations (adding options, voting, and displaying results).

## How to Run the Project Locally

To test this project in your browser, follow these steps:

### 1. Clone the Repository

```bash
git clone https://github.com/costa253-hash/Build-a-Voting-System.git
```

### 2. Open the `index.html` file in your browser

After cloning the repository, open the `index.html` file in your browser.

### 3. Open the Browser Console

- In Chrome: Right-click > Inspect > Console.
- In Firefox: Right-click > Inspect Element > Console.

### 4. Test the Polling System

In the **Console**, you can test the functions. Here are a few examples to get started:

- **Add options**:

```js
addOption("Turkey");
addOption("Morocco");
addOption("Malaysia");
```

- **Vote for options**:

```js
vote("Turkey", "voter1");
vote("Morocco", "voter2");
vote("Malaysia", "voter3");
```

- **Display results**:

```js
console.log(displayResults());
```

### 5. Expected Output

Once you've added options and votes, the results will look like:

```
Poll Results:
Turkey: 1 votes
Morocco: 1 votes
Malaysia: 1 votes
```

## Functions

### `addOption(option)`
Adds a new option to the poll. Returns a message indicating success or failure.

- **Parameters**: `option` (string) - The name of the option to be added.
- **Returns**: A string indicating whether the option was successfully added or if there was an error.

### `vote(option, voterId)`
Allows a voter to vote for a specified option. Ensures each voter can only vote once per option.

- **Parameters**: 
  - `option` (string) - The option to vote for.
  - `voterId` (string) - A unique identifier for the voter.
- **Returns**: A string indicating success or failure.

### `displayResults()`
Displays the poll results, showing how many votes each option has received.

- **Returns**: A string containing the results in the format:

```
Poll Results:
OptionName: X votes
```

## Contribution

Feel free to fork this repository, make changes, and submit pull requests. Contributions are welcome!

## License

This project is open-source and available under the MIT License.

---
