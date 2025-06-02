import { useState } from "react";
import { FaPlus } from "react-icons/fa";

const Splits = () => {
    const [defaultSplits, setDefaultSplits] = useState([[25, 5], [20, 10], [15, 5]]);
    return (
        <>
            <div>
                <h1 className="title">Choose your split!</h1>
                <div className="container"><h2 className="subtitle">Or create one</h2>
                    <FaPlus className="icon-add" /></div>
                <div className="default-splits">
                    {
                        defaultSplits.map((split, index) => (
                            <button key={index} className="split-btn">{`${split[0]} : ${split[1]}`}</button>
                        ))
                    }
                </div>
            </div>
        </>
    )
}

export default Splits;