import React from 'react';
import './propsraya.css';
const Propsraya = ({ title,gambar,pubDate,author,clickHandle }) => {
    return(
        <div>
             <div className="layout-gambar">
                   <div className="content-gambar">
                       <img src={gambar} onClick={clickHandle} className="gambar" />
                       <div className="text-p">
                            <h5 onClick={clickHandle}>{title}</h5>
                            <p>{author}</p>
                            <p>{pubDate}</p>
                       </div>
                   </div>
              </div>
        </div>
    )
}

export default Propsraya;
