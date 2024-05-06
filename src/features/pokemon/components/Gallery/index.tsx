import Card from '@/features/pokemon/components/Card';

const Gallery = () => {
  const pokemonIds = [1, 2, 3];

  return (
    <div>
      {pokemonIds.map((id) => (
        <Card id={id} key={id} />
      ))}
    </div>
  );
};

export default Gallery;
