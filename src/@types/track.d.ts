type Track = {
  id: number
  title: string
  duration: string
  preview: string
  album: {
    id: string
    title: string
    cover_medium: string
  }
  artist: {
    id: number
    name: string
  }
}
