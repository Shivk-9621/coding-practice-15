import {Component} from 'react'

import './index.css'

class ReviewsCarousel extends Component {
  state = {reviewNum: 1}

  getReview = reviewsList => {
    const {reviewNum} = this.state
    const {imgUrl, username, companyName, description} = reviewsList[reviewNum]

    return (
      <div className="detail-con">
        <h1 className="heading">Reviews</h1>
        <img src={imgUrl} alt={username} />
        <p className="userName">{username}</p>
        <p className="companyName">{companyName}</p>
        <p className="description">{description}</p>
      </div>
    )
  }

  onClickLeft = () => {
    const {reviewNum} = this.state
    if (reviewNum > 0) {
      this.setState(prevState => ({reviewNum: prevState.reviewNum - 1}))
    }
  }

  onClickRight = () => {
    const {reviewsList} = this.props
    const {reviewNum} = this.state

    if (reviewNum < reviewsList.length - 1) {
      this.setState(prevState => ({reviewNum: prevState.reviewNum + 1}))
    }
  }

  render() {
    const {reviewNum} = this.state
    const {reviewsList} = this.props
    console.log(reviewNum)

    return (
      <div className="app-con">
        <div className="review-con">
          <div className="user-con">
            <button
              data-testid="leftArrow"
              type="button"
              onClick={this.onClickLeft}
              className="left-btn"
            >
              <img
                src="https://assets.ccbp.in/frontend/react-js/left-arrow-img.png"
                alt="left arrow"
              />
            </button>

            {this.getReview(reviewsList)}

            <button
              data-testid="rightArrow"
              type="button"
              onClick={this.onClickRight}
              className="right-btn"
            >
              <img
                src="https://assets.ccbp.in/frontend/react-js/right-arrow-img.png"
                alt="right arrow"
              />
            </button>
          </div>
        </div>
      </div>
    )
  }
}

export default ReviewsCarousel
