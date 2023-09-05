export function getFirstTwoInitials(inputString: string) {
  // Check if the input string is not empty
  if (inputString.trim() !== "") {
    // Split the input string into words
    const words = inputString.split(" ");

    if (words.length === 1) {
      // If there's only one word, return the first initial
      return words[0][0];
    } else if (words.length >= 2) {
      // If there are at least two words, extract the first initial of each
      const firstInitial = words[0][0];
      const secondInitial = words[1][0];
      return `${firstInitial}${secondInitial}`;
    }
  }

  // If the input string is empty or doesn't contain any valid initials, return an appropriate message or handle it as needed
  return "Invalid input for initials.";
}
