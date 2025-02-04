// import { useDispatch, useSelector } from "react-redux"
import UsersTable from "../../components/Home/UsersTable"
import PageLayout from "../../components/PageLayout"
// import { updateSearch } from "../../reduxSlices/counterSlice"

const Home = () => {
  // const search = useSelector((state) => state.counter.search)
  // const dispathcher = useDispatch()

  // const handleChange = (e) => {
  //   dispathcher(() => dispathcher(updateSearch(e.target.value)))
  // }
  return (
    <PageLayout>
      <UsersTable/>
    </PageLayout>
  )
}

export default Home