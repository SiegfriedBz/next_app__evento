/** Helpers */
export const capitalize = (str: string) => {
  // replace - with space and capitalize
  str = str.replace(/-/g, " ")
  return str.charAt(0).toUpperCase() + str.slice(1)
}

export const getDay = (date: Date) => {
  return new Date(date).toLocaleDateString("en-US", {
    day: "2-digit",
  })
}

export const getMonth = (date: Date) => {
  return new Date(date).toLocaleDateString("en-US", {
    month: "short",
  })
}
