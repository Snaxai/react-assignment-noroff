export const storageSave = (key: string, value: any) => {
  localStorage.setItem(key, JSON.stringify(value))
}

export const storageRead = (key: string) => {
  const data = localStorage.getItem(key)
  if (data) return JSON.parse(data)
  return null
}

export const storageDelete = (key: string) => {
  localStorage.removeItem(key)
}
