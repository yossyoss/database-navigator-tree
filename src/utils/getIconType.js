export const getIconByType = (type) => {
  let iconType
  switch (type) {
    case "connections":
      iconType = "fa-solid fa-network-wired"
      break
    case "db":
      iconType = "fa-solid fa-database"
      break
    case "tables":
      iconType = "fa-solid fa-folder-plus"
      break
    case "schemas":
      iconType = "fa-solid fa-chess-board"
      break
    case "schema":
      iconType = "fa-solid fa-folder-tree"
      break
    case "column":
      iconType = "fa-solid fa-file"
      break
    default:
      iconType = "fa-solid fa-question"
      break
  }
  return iconType
}
