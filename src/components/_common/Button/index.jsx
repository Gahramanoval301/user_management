import { Button } from "@mui/material";
import PropTypes from "prop-types";
const MainButton = ({title, handleClick}) => {
  return (
    <Button onClick={handleClick}>{title}</Button>
  )
}

export default MainButton;

MainButton.propTypes = {
  title: PropTypes.string.isRequired,
  handleClick: PropTypes.func.isRequired,
}