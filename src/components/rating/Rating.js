import * as icons from '../../assets/icons'

function Rating({ stars }) {
  const ratingArr = []

  for (let i = 0; i < 5; i += 1) {
    if (i < stars) {
      ratingArr.push(<icons.IcRoundStar key={`Star ${i}`} />)
    } else ratingArr.push(<icons.IcRoundStarBorder key={`Star ${i}`} />)
  }

  return <div className="rating">{ratingArr}</div>
}

export default Rating
