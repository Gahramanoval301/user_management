import { Stack } from '@mui/material'
import { NavLink } from 'react-router'

export const navLinks = [
  {
    id: 0,
    label: 'Home',
    to: '/'
  },
  {
    id: 0,
    label: 'Task Description',
    to: '/task-description'
  },

]
const Navbar = () => {
  return (
    <Stack gap={2} flexDirection={"row"} >
      {navLinks.map(({ id, label, to }) => {
        return (
          <NavLink key={id} to={to} className={({ isPending, isActive }) => isPending ? "pending..." : isActive ? "active" : ""}>{label}</NavLink>
        )
      })}
    </Stack>
  )
}


export default Navbar