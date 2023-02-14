import './index.css'
import {format} from 'date-fns'

const AppointmentItem = props => {
  const {appointmentDetails, isToggleStar} = props
  const {id, titleInput, dateInput, isNecessary} = appointmentDetails

  const onClickStar = () => {
    isToggleStar(id)
  }

  const date = format(new Date(dateInput), 'dd MMMM yyyy, EEEE')

  const starImage = isNecessary
    ? 'https://assets.ccbp.in/frontend/react-js/appointments-app/filled-star-img.png'
    : 'https://assets.ccbp.in/frontend/react-js/appointments-app/star-img.png'

  return (
    <li className="each-appointment-container">
      <div className="star-title">
        <p className="title">{titleInput}</p>
        <button
          className="star-button"
          type="button"
          onClick={onClickStar}
          data-testId="star"
        >
          <img src={starImage} alt="star" />
        </button>
      </div>
      <p className="date">{date}</p>
    </li>
  )
}

export default AppointmentItem
