import React from 'react';
import { data } from '../component/Data';
import Propsraya from '../props/Propsraya';
import Navbar from './Navbar';
class Post extends React.Component {
    constructor(props){
        super(props);
        this.state = { datas:[] }
    }
    componentDidMount(){
        this.setState({ datas:data })
    }
    clickHandle = (id) => {
        this.props.history.push(`/home/${id}`);
    }
  render(){
  return (
      <div>
          <Navbar />
          {
              this.state.datas.map((param,i) => {
                  return(
                    <Propsraya 
                    title={param.title} 
                    gambar={param.thumbnail}
                    pubDate={param.pubDate} 
                    author={param.author} 
                    clickHandle={() => this.clickHandle(param.id)} />
                  )
          })
          }
      </div>
  );
}
}

export default Post;
