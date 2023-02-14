import {Component} from 'react'
import {v4 as uuidv4} from 'uuid'
import AppointmentItem from '../AppointmentItem'

import './index.css'

class Appointments extends Component {
  state = {
    appointmentList: [],
    titleInput: '',
    dateInput: '',
  }

  onClickStarred = () => {
    const {appointmentList} = this.state
    const filteredList = appointmentList.filter(
      eachAppointment => eachAppointment.isNecessary === true,
    )
    this.setState({appointmentList: filteredList})
  }

  isToggleStar = id => {
    this.setState(prevState => ({
      appointmentList: prevState.appointmentList.map(eachComment => {
        if (id === eachComment.id) {
          return {...eachComment, isNecessary: !eachComment.isNecessary}
        }
        return eachComment
      }),
    }))
  }

  addAppointment = event => {
    event.preventDefault()
    const {titleInput, dateInput} = this.state

    const newAppointment = {
      id: uuidv4(),
      titleInput,
      dateInput,
      isNecessary: false,
    }
    this.setState(prevState => ({
      appointmentList: [...prevState.appointmentList, newAppointment],
      titleInput: '',
      dateInput: '',
    }))
  }

  onTitleInput = event => {
    this.setState({titleInput: event.target.value})
  }

  onDateInput = event => {
    this.setState({dateInput: event.target.value})
  }

  render() {
    const {appointmentList, titleInput, dateInput} = this.state
    console.log(dateInput)

    return (
      <div className="bg-container">
        <div className="card">
          <div className="top-section">
            <div className="left-section">
              <h1 className="heading">Add Appointment</h1>
              <form className="appointment-form" onSubmit={this.addAppointment}>
                <div className="title-container">
                  <label htmlFor="title">TITLE</label>
                  <input
                    placeholder="title"
                    onChange={this.onTitleInput}
                    value={titleInput}
                    id="title"
                    type="text"
                  />
                </div>

                <div className="date-container">
                  <label htmlFor="date">DATE</label>
                  <input
                    onChange={this.onDateInput}
                    value={dateInput}
                    id="date"
                    type="date"
                  />
                </div>

                <button type="submit" className="button">
                  Add
                </button>
              </form>
            </div>

            <div className="left-image-section">
              <img
                className="image"
                alt="appointments"
                src="https://assets.ccbp.in/frontend/react-js/appointments-app/appointments-img.png"
              />
            </div>
          </div>
          <hr className="hr-line" />
          <div className="comment-starred-container">
            <h1 className="appointment-text">Appointments</h1>
            <button
              type="button"
              onClick={this.onClickStarred}
              className="starred-text"
            >
              Starred
            </button>
          </div>
          <ul className="appointment-container">
            {appointmentList.map(eachAppointment => (
              <AppointmentItem
                isToggleStar={this.isToggleStar}
                key={eachAppointment.id}
                appointmentDetails={eachAppointment}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default Appointments
