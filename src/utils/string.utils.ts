export const convertCamelCaseToReadableString = (text: string) =>
  text.replace(/([A-Z])/g, ' $1')
