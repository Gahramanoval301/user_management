
import { Box, Typography } from '@mui/material'
import PageLayout from '../../components/PageLayout'


const TaskDescription = () => {
  return (
    <PageLayout>
      <Box p={2}>

      
      <Typography variant='h5'>Task Description</Typography>
      <ol>
        <li>Create a page in which there will be table with users data – id, name, surname, school, subscribed courses and in the last column of each row there will be buttons - “Delete” and “Edit”</li>
        <li>In the top-right of the table, outside of table, there will be button “Create”.</li>
        <li>You first need to create a mock data for users – up to you 😊</li>
        <li>Page should be responsive. And in the screens smaller than normal size, table should be scrollable. However, user id and user name column should be fixed – the rest should be scrollable.</li>
        <li>Buttons should be actionable. Up to you what to show in the forms.</li>
        <li>Optional, Pagination can be added. Each page should show at most 10 rows.</li>
      </ol>

      Tech stack: react/react native, material UI/ react native paper.


      Example screen for design. It is not mandatory to use this one. Can be your imagination:
      </Box>
      <img src="/usermanagement.png" alt="user management" />
    </PageLayout>
  )
}

export default TaskDescription