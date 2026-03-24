export function fileToBase64(file: File): Promise<string> {
  return new Promise((resolve, reject) => {
    const reader = new FileReader()
    reader.onload = () => {
      if (typeof reader.result === 'string') {
        resolve(reader.result)
      } else {
        reject(new Error('Failed to convert file to base64'))
      }
    }
    reader.onerror = () => reject(reader.error)
    reader.readAsDataURL(file)
  })
}

export function fileToDataUrl(file: File): Promise<{ dataUrl: string, name: string }> {
  return new Promise((resolve, reject) => {
    const reader = new FileReader()
    reader.onload = () => {
      if (typeof reader.result === 'string') {
        resolve({ dataUrl: reader.result, name: file.name })
      } else {
        reject(new Error('Failed to convert file to data URL'))
      }
    }
    reader.onerror = reject
    reader.readAsDataURL(file)
  })
}
