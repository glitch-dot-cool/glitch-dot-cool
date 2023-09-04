export const truncateString = (str, limit = 150) => {
  if (str.length <= limit) return str

  return `${str.substring(0, limit)}...`
}
