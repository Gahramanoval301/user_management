import { Route, Routes } from 'react-router'
import Home from './pages/Home'
import NotFound from './pages/NotFound'
import TaskDescription from './pages/TaskDescription'


const WebRouting = () => {
  return (
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/task-description" element={<TaskDescription />} />
        <Route path="*" element={<NotFound />} />
        {/* <Route path="/todos" element={<TodosPage />} />
        <Route path="/todos/:todoId" element={<SingleTodo />} /> */}
    </Routes>
  )
}

export default WebRouting