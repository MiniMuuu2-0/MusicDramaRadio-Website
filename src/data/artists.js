export const artists = []

export function getArtistBySlug(slug) {
  return artists.find((artist) => artist.slug === slug)
}
