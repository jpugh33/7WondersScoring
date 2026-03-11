import { create } from "zustand"

export const Records = create(set => ({
  players: [],
  boards: [
    'Alexandria',
    'Babylon',
    'Ephesos',
    'Gizah',
    'Halikarnassos',
    'Olympia',
    'Rhodos',
  ],
  places: [],

  addPlayer: (name) =>
    set(state => ({ players: [...state.players, name] })),

  setBoards: (boards) =>
    set(state => ({ boards: [...state.boards, ...boards] })),

  setPlaces: (rawPlaces) =>
  set({
    places: rawPlaces.map((p, index) => ({
      id: p.id ?? index + 1,
      player: p.player,
      board: p.board
    }))
  })

}))