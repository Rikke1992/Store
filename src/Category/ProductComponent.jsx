import React from "react";

class ProductComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      mainPhoto: props.photo[0],
    };
    this.chengeMainPhoto = this.chengeMainPhoto.bind(this);
  }
  chengeMainPhoto = (value) => {
    this.setState({
      mainPhoto: value,
    });
  };
  render() {
    return (
      <div>
        <div>
          {photo.map((item) => {
            return (
              <div id={item.photo}>
                <img src={item.photo}></img>
              </div>
            );
          })}
        </div>
        <div>
          <img src={this.state.mainPhoto}></img>
        </div>
        <div>
          <h1>{this.props.name}</h1>
          <h2>{this.props.descriptions}</h2>
          <div>
            <span>Size ore color</span>
            <div className={"sizeOreColor"}>
              {this.props.size.map(() => {})}
            </div>
            <div>
              <span>Price</span>
              <span>{this.props.price}</span>
            </div>
            <div onClick={}>Add to Cart</div>
            <div>
              <p>Bla bla bla</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ProductComponent;
