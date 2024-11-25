export const convertCamelCaseToReadableString = (text: string) =>
  text
    .replace(/([a-z])([A-Z0-9])/g, '$1 $2') // Add space between lowercase and uppercase/number
    .replace(/([0-9])([A-Za-z])/g, '$1 $2') // Add space between number and letter

export const capitalizeFirstLetter = (string: string) => {
  if (typeof string !== 'string' || string.length === 0) {
    return string // Return as-is if not a valid string
  }
  return string.charAt(0).toUpperCase() + string.slice(1)
}
