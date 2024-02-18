export type ListState = {
  listItems: Array<Array<string|boolean>>
}

export type ListStatePosition = {
  position: number
} & ListState