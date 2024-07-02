import React from 'react'
import photo from "../../assets/images/empty/1f937-2642.png"


const Empty = () => {
    return (
        <div style={{ textAlign: "center", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", height: "700px", zIndex: 1 }}>
            <img src={photo} width={250} alt="" />
            <h2>Empty</h2>
        </div>
    )
}

export default Empty