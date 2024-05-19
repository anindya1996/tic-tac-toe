import Strike from "./Strike";
import Tile from "./Tile";

const Board = ({ tiles, onTileClick, playerTurn, strikeClass }) => {
  return (
    <div className="board">
      <Tile
        onClick={() => onTileClick(0)}
        playerTurn={playerTurn}
        value={tiles[0]}
        className="top-border left-border right-border bottom-border"
      />
      <Tile
        onClick={() => onTileClick(1)}
        playerTurn={playerTurn}
        value={tiles[1]}
        className="top-border right-border bottom-border"
      />
      <Tile
        onClick={() => onTileClick(2)}
        playerTurn={playerTurn}
        value={tiles[2]}
        className="top-border right-border bottom-border"
      />
      <Tile
        onClick={() => onTileClick(3)}
        playerTurn={playerTurn}
        value={tiles[3]}
        className="left-border right-border bottom-border"
      />
      <Tile
        onClick={() => onTileClick(4)}
        playerTurn={playerTurn}
        value={tiles[4]}
        className="right-border bottom-border"
      />
      <Tile
        onClick={() => onTileClick(5)}
        playerTurn={playerTurn}
        value={tiles[5]}
        className="right-border bottom-border"
      />
      <Tile
        onClick={() => onTileClick(6)}
        playerTurn={playerTurn}
        value={tiles[6]}
        className="left-border bottom-border right-border"
      />
      <Tile
        onClick={() => onTileClick(7)}
        playerTurn={playerTurn}
        value={tiles[7]}
        className=" right-border bottom-border"
      />
      <Tile
        onClick={() => onTileClick(8)}
        playerTurn={playerTurn}
        value={tiles[8]}
        className="right-border bottom-border"
      />
      <Strike strikeClass={strikeClass} />
    </div>
  );
};

export default Board;
