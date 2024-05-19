const Tile = ({ className, value, onClick, playerTurn }) => {
  let hoverClass = null;
  if (value == null && playerTurn !== null) {
    hoverClass = `${playerTurn.toLowerCase()}-hover`;
  }
  return (
    <div onClick={onClick} className={`tile ${className} ${hoverClass}`}>
      <h1>{value}</h1>
    </div>
  );
};

export default Tile;
