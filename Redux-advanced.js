type UsersState = {
    users: UserModel[]
}

export const users = createModel<RootModel>()({
    state: {
        users: [],
    } as UsersState,
    reducers: {
        SET_USERS: (state: UsersState, users: UserModel[]) => {
            return {
                ...state,
                users,
            }
        },
    },
    effects: (dispatch) => {
        const { users } = dispatch
        return {
            async getUsers(): Promise<any> {
                let response = await fetch('http://www.198.162.0.15/users')
                let { data }: { data: UserModel[] } = await response.json()
                users.SET_USERS(data)
            },
        }
    },
})





type PlayersState = {
    players: PlayerModel[]
}

export const players = createModel<RootModel>()({
    state: {
        players: [],
    } as PlayersState,
    reducers: {
        SET_PLAYERS: (state: PlayersState, players: PlayerModel[]) => {
            return {
                ...state,
                players,
            }
        },
    },
    effects: (dispatch) => {
        const { players } = dispatch
        return {
            async getPlayers(): Promise<any> {
                let response = await fetch('https://www.balldontlie.io/api/v1/players')
                let { data }: { data: PlayerModel[] } = await response.json()
                players.SET_PLAYERS(data)
            },
        }
    },
})
