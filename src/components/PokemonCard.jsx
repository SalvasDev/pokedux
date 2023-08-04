/* eslint-disable react/prop-types */
import { useDispatch } from 'react-redux';
import { Card } from 'antd';
import Meta from 'antd/es/card/Meta';
import StarButton from './starButton';
import { setFavorite } from '../slices/dataSlice';
import './PokemonList.css';

const PokemonCard = ({ name, image, types, id, favorite }) => {
  const dispatch = useDispatch()
  const typesString = types.map(elem => elem.type.name).join(', ');

  const handleOnFavorite = () => {
    dispatch(setFavorite({ pokemonId: id }))
  }

  return (
    <Card
      title={name}
      cover={<img src={image} alt="" />}
      alt={name}
      extra={<StarButton isFavorite={favorite} onClick={handleOnFavorite} />}
    >
      <Meta description={typesString} />
    </Card>
  )
};

export default PokemonCard;
