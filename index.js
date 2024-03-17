var StringUtils = {};

// Add string utility functions to your library
StringUtils.capitalize = function (str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
};

StringUtils.reverse = function (str) {
  return str.split("").reverse().join("");
};

StringUtils.truncate = function (str, maxLength) {
  if (str.length <= maxLength) {
    return str;
  } else {
    return str.slice(0, maxLength) + "...";
  }
};

// Example usage of the library
console.log(StringUtils.capitalize("hello"));            // Output: "Hello"
console.log(StringUtils.reverse("world"));               // Output: "dlrow"
console.log(StringUtils.truncate("Lorem ipsum dolor sit amet", 10)); // Output: "Lorem ipsu..."
