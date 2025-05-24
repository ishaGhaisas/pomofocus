import { useState } from "react";
import { FaPlus } from "react-icons/fa";

const Splits = () => {
    const [defaultSplits, setDefaultSplits] = useState([[25,5], [20,10], [15,5]]);
    return (
        <>
            <div>
                <h1 className="title">Choose your split!</h1>
                <span><h2 className="subtitle">Or create one</h2>
                    <FaPlus /></span>
                {
                    defaultSplits.map((split) => (
                        <p>{`${split[0]} : ${split[1]}`}</p>
                    ))
                }
            </div>
        </>
    )
}

export default Splits;