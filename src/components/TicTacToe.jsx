import { useState } from "react";
import "./TicTacToe.css";

const Cube = ({ value, onClickEvent }) => {
    return (
        <td onClick={onClickEvent} className="cube">
            {value}
        </td>
    );
};

const Header = () => {
    const [block, setBlock] = useState(Array(9).fill(null));
    const [xTurn, setXturn] = useState(true);

    const changeValue = (e) => {
        const clone = [...block];
        if (clone[e]) {
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

    return (
        <table>
            <tr>
                <Cube value={block[0]} onClickEvent={() => changeValue(0)} />
                <Cube value={block[1]} onClickEvent={() => changeValue(1)} />
                <Cube value={block[2]} onClickEvent={() => changeValue(2)} />
            </tr>
            <tr>
                <Cube value={block[3]} onClickEvent={() => changeValue(3)} />
                <Cube value={block[4]} onClickEvent={() => changeValue(4)} />
                <Cube value={block[5]} onClickEvent={() => changeValue(5)} />
            </tr>
            <tr>
                <Cube value={block[6]} onClickEvent={() => changeValue(6)} />
                <Cube value={block[7]} onClickEvent={() => changeValue(7)} />
                <Cube value={block[8]} onClickEvent={() => changeValue(8)} />
            </tr>
        </table>
    );
};

export default Header;
