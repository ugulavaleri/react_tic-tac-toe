import { useState } from "react";
import "./TicTacToe.css";

const Winner = (blocks) => {
    const winnerCombinations = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
    ];

    for (let i = 0; i < winnerCombinations.length; i++) {
        const [a, b, c] = winnerCombinations[i];
        if (blocks[a] && blocks[a] === blocks[b] && blocks[a] === blocks[c]) {
            return blocks[a];
        }
    }
    return null;
};

const Header = () => {
    const [block, setBlock] = useState(Array(9).fill(null));
    const [xTurn, setXturn] = useState(true);

    const changeValue = (e) => {
        if (Winner(block)) {
            return;
        }

        const clone = [...block];
        if (clone[e] !== null) {
            return;
        }
        if (xTurn) {
            clone[e] = "X";
        } else {
            clone[e] = "O";
        }
        setBlock(clone);
        setXturn(!xTurn);
    };

    const winner = Winner(block);
    let status;
    if (winner) {
        status = `Winner is ${winner}`;
    } else {
        status = `${xTurn ? "X" : "O"} turn`;
    }

    const Cube = ({ value, onClickEvent }) => {
        return (
            <>
                <td onClick={onClickEvent} className="cube">
                    {value}
                </td>
            </>
        );
    };

    return (
        <>
            <h1 className="winnerTitle">{status}</h1>
            <table>
                <tr>
                    <Cube
                        value={block[0]}
                        onClickEvent={() => changeValue(0)}
                    />
                    <Cube
                        value={block[1]}
                        onClickEvent={() => changeValue(1)}
                    />
                    <Cube
                        value={block[2]}
                        onClickEvent={() => changeValue(2)}
                    />
                </tr>
                <tr>
                    <Cube
                        value={block[3]}
                        onClickEvent={() => changeValue(3)}
                    />
                    <Cube
                        value={block[4]}
                        onClickEvent={() => changeValue(4)}
                    />
                    <Cube
                        value={block[5]}
                        onClickEvent={() => changeValue(5)}
                    />
                </tr>
                <tr>
                    <Cube
                        value={block[6]}
                        onClickEvent={() => changeValue(6)}
                    />
                    <Cube
                        value={block[7]}
                        onClickEvent={() => changeValue(7)}
                    />
                    <Cube
                        value={block[8]}
                        onClickEvent={() => changeValue(8)}
                    />
                </tr>
            </table>
        </>
    );
};

export default Header;
