import { StarFilled, StarOutlined } from "@ant-design/icons";
import { Button } from "antd";

// eslint-disable-next-line react/prop-types
const StarButton = ({ isFavorite, onClick }) => {
  const Icon = isFavorite ? StarFilled : StarOutlined
  return <Button icon={<Icon />} onClick={onClick} />
}

export default StarButton;