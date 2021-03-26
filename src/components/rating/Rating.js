import * as icons from '../../assets/icons'

function Rating({ stars }) {
  const ratingArr = []

  for (let i = 0; i < 5; i += 1) {
    if (i < stars) {
      ratingArr.push(<icons.IcRoundStar />)
    } else ratingArr.push(<icons.IcRoundStarBorder />)
  }

  return <div className="rating">{ratingArr.map((item) => item)}</div>
}

export default Rating
