export const convertCamelCaseToReadableString = (text: string) =>
  text.replace(/([A-Z])/g, ' $1')

export const capitalizeFirstLetter = (string: string) => {
  if (typeof string !== 'string' || string.length === 0) {
    return string // Return as-is if not a valid string
  }
  return string.charAt(0).toUpperCase() + string.slice(1)
}
