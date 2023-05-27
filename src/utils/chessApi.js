import ChessWebAPI from 'chess-web-api'

const api = new ChessWebAPI()

export async function getPlayer(username) {
  return await api.getPlayer(username)
}
