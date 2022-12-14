import './JobDetails.css'
// import deleteImg from './delete_img.jpg'
import axios from 'axios'
import { useState } from 'react'
import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import deleteImg from './material-symbols_delete-outline.svg'
import editImg from './material-symbols_edit.svg'
import ReminderItem from '../components/ReminderItem.js'

const JobDetails = (props) => {
  const navigate = useNavigate()
  let { id } = useParams()
  const [currentJobData, setJobData] = useState([])
  const [currentData, setData] = useState([])
  const [currentDisplay, setDisplay] = useState(false)
  const [currentReminderText, setReminderText] = useState('')
  const [currentAllReminders, setAllReminders] = useState([])
  const [currentReminders, setReminders] = useState([])
  console.log('THIS IS CURRENT REMINDERS', currentReminders)
  console.log(`This is JOBID`, id)
  const BASE_URL = 'https://marijobtracker.herokuapp.com'

  useEffect(() => {
    const getJobData = async () => {
      if (id !== undefined) {
        let response = await axios.get(`${BASE_URL}/getjobcard/${id}`)
        console.log('THIS IS THE DATA!!', response.data.jobCardItem)
        setData(response.data.jobCardItem)
      }
    }
    getJobData()
  }, [])

  const getAllRemindersByJobId = async () => {
    const response = await axios.get(`${BASE_URL}/getallreminders-job/${id}`)
    console.log(
      'This is the ALL REMINDERS BY ID DATA',
      response.data.allReminders
    )
    setAllReminders(response.data.allReminders)
  }

  useEffect(() => {
    getAllRemindersByJobId()
  }, [currentReminderText])

  const editHandleClick = () => {
    navigate(`/editpage/${id}`)
  }

  const deleteHandleClick = async () => {
    const response = await axios.delete(`${BASE_URL}/deletejob/${id}`)
    navigate('/')
  }

  const deletebtnHandleClick = () => {
    if (currentDisplay === false) {
      setDisplay(true)
    }
  }
  let panelDisplay = 'hide'
  if (currentDisplay === true) {
    panelDisplay = ''
  }

  const xHandleClick = (e) => {
    if (currentDisplay === true) {
      setDisplay(false)
    }
    console.log('This X is clicked', e.target.value)
  }

  const realDeleteHandleClick = async (e) => {
    const response = await axios.delete(`${BASE_URL}/deletejob/${id}`)
    navigate('/')
  }

  const addReminderHandleClick = async (e) => {
    e.preventDefault()
    const response = await axios.post(`${BASE_URL}/createreminder`, {
      jobId: id,
      reminderText: currentReminderText,
      isComplete: false
    })
    getAllRemindersByJobId()
    setReminderText('')
  }

  const inputHandleChange = (e) => {
    setReminderText(e.target.value)
    console.log('THIS IS REMINDER TEXT LINE 72', e.target.value)
  }

  return (
    <div className="jobdetails-container">
      <section>
        <div className={`popup-box ${panelDisplay}`}>
          <p onClick={xHandleClick} className="x-close">
            x
          </p>
          <p className="popup-text">
            Are you sure you want to remove this item?
          </p>
          <p className="removebtn" onClick={realDeleteHandleClick}>
            DELETE
          </p>
        </div>
        <div className="company-editdelete-container">
          <div className="companyname-box">
            <h2 className="companyname">{currentData.companyName}</h2>
          </div>
          <div className="editdelete-btns">
            <span onClick={editHandleClick} className="editbtn">
              <img src={editImg} />
            </span>
            <span onClick={deletebtnHandleClick} className="deletebtn">
              <img src={deleteImg} />
            </span>
          </div>
        </div>

        <div className="topsection">
          <div className="titlelink-container">
            <h4 className="job-title">{currentData.jobTitle}</h4>
            <div className="job-link">
              <a href={currentData.urls}>JOB LINK</a>
            </div>
          </div>

          <div className="outerlayer-bar">
            <div className={currentData.applicationStatus}>
              <div>{currentData.applicationStatus}</div>
            </div>
          </div>

          <div>
            <ul className="reminderitem-container">
              {currentAllReminders.map((reminderItem) => {
                console.log(reminderItem)
                if (reminderItem.isComplete === true) {
                  return <></>
                }

                return (
                  <ReminderItem
                    remindText={reminderItem.reminderText}
                    id={reminderItem._id}
                    jobId={reminderItem.jobId}
                    completed={() => {
                      getAllRemindersByJobId()
                    }}
                  />
                )
              })}
            </ul>
          </div>

          <form
            className="inputplus-container"
            onSubmit={addReminderHandleClick}
          >
            <button type="submit" className="plus-reminder">
              +
            </button>
            <input
              onChange={inputHandleChange}
              type="text"
              placeholder="Add reminder"
              className="reminder-inputbox"
              value={currentReminderText}
            />
          </form>

          <div className="spancontainer-jobdetail">
            <span className="spandetails">
              Hiring Status: {currentData.hiringStatus}
            </span>
            <span className="spandetails">
              Date added: {currentData.jobDateAdded}
            </span>
            <span className="spandetails">
              Date applied: {currentData.dateApplied}
            </span>

            <span>{currentData.contactEmail}</span>
          </div>
        </div>
        <div className="notes-container">
          <p>NOTES</p>
          <span>{currentData.notes}</span>
        </div>
      </section>
    </div>
  )
}

export default JobDetails
