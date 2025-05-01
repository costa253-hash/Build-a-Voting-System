const poll = new Map();

function addOption(option) {
  if (!option || option.trim() === "") {
    return "Option cannot be empty.";
  }
  if (poll.has(option)) {
    return `Option "${option}" already exists.`;
  }
  poll.set(option, new Set());
  return `Option "${option}" added to the poll.`;
}

function vote(option, voterId) {
  if (!poll.has(option)) {
    return `Option "${option}" does not exist.`;
  }
  const voters = poll.get(option);
  if (voters.has(voterId)) {
    return `Voter ${voterId} has already voted for "${option}".`;
  }
  voters.add(voterId);
  return `Voter ${voterId} voted for "${option}".`;
}

function displayResults() {
  let result = "Poll Results:";
  for (const [option, voters] of poll.entries()) {
    result += `\n${option}: ${voters.size} votes`;
  }
  return result;
}

// Add 3 options
addOption("Turkey");
addOption("Morocco");
addOption("Malysia");

// Add 3 votes
vote("Turkey", "voter1");
vote("Morocco", "voter2");
vote("Malysia", "voter3");
