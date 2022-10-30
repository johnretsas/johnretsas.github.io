import React from "react";
import { TbArrowBarUp, TbArrowUpCircle } from "react-icons/tb";

const GoUp = () => {
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        })
    }

    return (
        <div
            style={{
                width: "calc(100% - 2px)",
                height: 40,
                background: 'black',
                position: 'fixed',
                bottom: 0,
                right: 0,
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                border: "1px solid #adff2f40",
                borderRadius: 4
            }}
            onClick={scrollToTop}
        >
            <TbArrowBarUp />
        </div>
    )
}

export default GoUp;