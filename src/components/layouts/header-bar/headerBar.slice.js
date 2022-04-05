import { createSlice } from "@reduxjs/toolkit"

const initialState = {
  modulesDrawerOpen: false
}

export const headerBarSlice = createSlice({
  name: 'headerBar',
  initialState,
  reducers: {
    toggleModulesDrawer: (state, action) => {
      state.modulesDrawerOpen = typeof action.payload === 'undefined' ? true : action.payload 
    },
    openModulesDrawer: state => { state.modulesDrawerOpen = true },
    closeModulesDrawer: state => { state.modulesDrawerOpen = false }
  }
})

export const {
  toggleModulesDrawer,
  openModulesDrawer,
  closeModulesDrawer
} = headerBarSlice.actions

export default headerBarSlice.reducer