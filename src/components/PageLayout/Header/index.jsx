import ThemeToggle from '../../_common/ThemeToggle'
import Navbar from '../../_common/Navbar'
import { Button, Stack, Typography, useMediaQuery } from '@mui/material'
import MainModal from '../../MainModal'
import CreateForm from '../../_common/Forms/CreateForm'
import PersonAddAltOutlinedIcon from '@mui/icons-material/PersonAddAltOutlined';
import MobileNavbar from '../../_common/MobileNavbar'


const Header = () => {
  const matches = useMediaQuery('(max-width:600px)');
  return (
    <Stack className='header-gap' alignItems={"center"} justifyContent={"space-between"} py={2} sx={{ boxShadow: "0 0 10px rgba(0,0,0,0.3)" }}>
      <Stack alignItems={"center"} gap={4}>
        <Typography component={"h3"} variant='h6'>User Management</Typography>
        
        {matches ?
          <MobileNavbar /> : <Navbar />
        }

      </Stack>
      <Stack alignItems={"center"} gap={2} ml={1}>
        {!matches &&
          <ThemeToggle />
        }

        <MainModal header={<h4>Create new user</h4>}
          button={({ handleOpen }) => (
            <Button
              onClick={handleOpen}>{matches ? <PersonAddAltOutlinedIcon color='var(--primary-color)' /> : "Create"}</Button>
          )}
        >
          <CreateForm mode="create" />
        </MainModal>
      </Stack>
    </Stack>
  )
}

export default Header