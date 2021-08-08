import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './SlideIntroduce.css'

class SlideIntroduce extends Component {
  constructor(){
    super();
    this.state = {
      previous: -1,
      current: 0,
    };
    this.getNewSlideIndex = this.getNewSlideIndex.bind(this);
    this.forward = this.forward.bind(this);
    this.backward = this.backward.bind(this);
    this.updateDimensions = this.updateDimensions.bind(this);
    this.myRef = React.createRef();
  }
  getNewSlideIndex(step){
    const slideIndex = this.state.current;
    const amountSlide = this.props.slides.length;
    let newSlideIndex = slideIndex + step;
    //lớn hơn lenght hoặc nhỏ hơn 0
    if(newSlideIndex >= amountSlide) {newSlideIndex = 0;}
    else if(newSlideIndex < 0) {newSlideIndex = amountSlide-1;}
    
    return newSlideIndex;
  }
  forward(){
    this.setState({
      previous: this.state.current,
      current: this.getNewSlideIndex(1)
    })
  }
  backward(){
    this.setState({
      previous: this.state.current,
      current: this.getNewSlideIndex(-1)
    })
  }
  updateDimensions(){
    this.SlidesElement.style.height = `${this.SlidesElement.offsetWidth / (12/5)}px`;
    console.log("runUpdate");
  }
  getCurrentIndex(index){
    this.setState({
      previous: this.state.current,
      current: index
    })
  }
  componentDidMount(){
    this.rootElm = ReactDOM.findDOMNode(this);
    this.SlidesElement = this.rootElm.querySelector(".Slides");
    this.updateDimensions();
    window.addEventListener("resize", this.updateDimensions);
    if (this.automaticInterval) clearInterval(this.automaticInterval);
    this.automaticInterval = setInterval(()=>{
      this.forward();
    },5000);
  }
  //CLEAR
  componentWillUnmount() {
    window.removeEventListener("resize", this.updateDimensions);
    if (this.automaticInterval) clearInterval(this.automaticInterval);
  } 
  componentDidUpdate(){
    console.log("reset");
    if (this.automaticInterval) clearInterval(this.automaticInterval);
    this.automaticInterval = setInterval(()=>{
      this.forward();
    },5000);
  }
  //RENDER
  render(){
    return (<div className='slideShow' >
      <div className = 'Slides'>
        {
          this.props.slides.map((image,index)=>{
            return(
            <div className={image.className} key={index}>
              <img src={image.src} 
              className={this.state.current === index ? "toAppear" : this.state.previous === index ? "toDisappear" :""} 
              key ={index}
              alt={image.altText}/>
            </div>
            )})
        }
        <div className='btn-control'>
          <div className = "btn-next" onClick={this.forward}></div>
          <div className = "btn-previous" onClick={this.backward}></div>
        </div>
        <div className = 'points-slide'>
          {
            this.props.slides.map((slide,index)=>{
              return(
                <div className={this.state.current === index ? "point point-active" : "point"} onClick = {()=>(this.getCurrentIndex(index))}
                key ={index}></div>
              )
            })
          }
        </div>
      </div></div>
    );
  }
}
export default SlideIntroduce;