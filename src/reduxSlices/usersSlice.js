import { createSlice } from '@reduxjs/toolkit'

const initialData = {
    users: []
}
export const usersSlice = createSlice({
    name: 'users',
    initialState: initialData,
    reducers: {
        getUsers: (state, action) => {
            state.users = action.payload
        },
        updateUser: (state, action) => {
            const {id, updatedUser} =action.payload;
            state.users = state.users.map((user) => user.id === id? {id:id, ...updatedUser} : user)
        },
        deleteUser: (state, action) => {
            state.users = state.users.filter((user) => user.id!== action.payload)
        },
        addUser: (state, action) => {
            state.users = [...state.users, action.payload]
        }
    },
})
export const {getUsers, updateUser, deleteUser, addUser} = usersSlice.actions
export default usersSlice.reducer