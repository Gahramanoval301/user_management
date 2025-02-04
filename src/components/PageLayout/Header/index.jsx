import ThemeToggle from '../../_common/ThemeToggle'
import Navbar from '../../_common/Navbar'
import { Button, Stack, Typography } from '@mui/material'
import MainModal from '../../MainModal'
import CreateForm from '../../_common/Forms/CreateForm'

const Header = () => {

  return (
    <Stack className='header-gap' alignItems={"center"} justifyContent={"space-between"} py={2} sx={{ boxShadow: "0 0 10px rgba(0,0,0,0.3)" }}>
      <Stack alignItems={"center"} gap={4}>
        <Typography component={"h3"} variant='h6'>User Management</Typography>
        <Navbar />
      </Stack>
      <Stack alignItems={"center"} gap={2}>
        <ThemeToggle />
        <MainModal  header={<h4>Create new user</h4>}
              button={({ handleOpen }) => (
               <Button
                onClick={handleOpen}>Create</Button>
              )} 
        >
       <CreateForm mode="create"/>
        </MainModal>
      </Stack>
    </Stack>
  )
}

export default Header