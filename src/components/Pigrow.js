import React from 'react';

class Pigrow extends React.Component{
  render(){
    // {console.log(this.props.pigs)}
    let pig = this.props.pig
    var divStyle = {
      background: "#eee",
      padding: "20px",
      margin: "20px",
      "text-align": "left"
    }
    const pullPhotos = (pig) => {
      let pigName = pig.name
      pigName = pigName.toLowerCase().replace(" ","_")
      pig.imgUrl = `${pigName}.jpg`
      let pigUrl = '../hog-imgs/'+ pig.imgUrl
      return pigUrl
    }

    return(
      <div style={divStyle}>
        <p>name: {pig.name}</p>
        <p> pig image: {pig.imgUrl}</p>
        <img
          src={pullPhotos(pig)}
          alt='hog'
          >
        </img>
        
      </div>
    )
  }
}

export default Pigrow;
