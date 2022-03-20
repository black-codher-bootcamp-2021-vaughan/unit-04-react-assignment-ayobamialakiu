function BasketCount(props) {
    return (
      <div className="counter">
        <p> you have {props.total.trackPrice} items</p>
      </div>
    );
  }
  
  export default BasketCount;
  