import React from 'react';
import { data } from './Data';
import './detail.css';
import Navbar from '../container/Navbar';

class Detail extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            datas: []
        }
    }
    componentDidMount(){
       const id = this.props.match.params.id
        const dataBerita = data.filter((isi) => isi.id == id)
        this.setState({
            datas:dataBerita
        })
    }
    render(){
        return(
            <div>
                {
                    this.state.datas.map((param) => {
                        return(
                            <div>
                                <Navbar />
                            <div className="container">
                                <div className="Header">
                                    <h4>{param.title}</h4>
                                </div>
                                <div className="authoor">
                                    <p>{param.author}</p>
                                    <p>{param.pubDate}</p>
                                </div>
                                <center>
                                <div classNmae="layout-gambar">
                                    <img src={param.thumbnail} className="gambar-l"/>
                                </div>
                                </center>
                            </div>
                            </div>
                        )
                })
                }
            </div>
        )
    }
}

export default Detail;
