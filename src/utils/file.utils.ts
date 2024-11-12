export const readFileAsDataURL = (file: File): Promise<string> => {
  return new Promise((resolve, reject) => {
    const reader = new FileReader()
    reader.onloadend = () => {
      if (reader.result) {
        resolve(reader.result as string)
      } else {
        reject(new Error('File reading failed'))
      }
    }
    reader.onerror = reject
    reader.readAsDataURL(file)
  })
}
