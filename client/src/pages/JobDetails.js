import './JobDetails.css'
// import deleteImg from './delete_img.jpg'
import axios from 'axios'
import { useState } from 'react'
import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import deleteImg from './material-symbols_delete-outline.svg'
import editImg from './material-symbols_edit.svg'

const JobDetails = (props) => {
  const navigate = useNavigate()
  let { id } = useParams()
  const [currentData, setData] = useState([])
  const [currentDisplay, setDisplay] = useState(false)
  // const [currentJobId, setJobId] = useState('')
  const [currentReminderText, setReminderText] = useState('')
  // const [currentIsComplete, setIsComplete] = useState('')
  const [currentAllReminders, setAllReminders] = useState([])

  console.log(`This is JOBID`, id)
  useEffect(() => {
    const getJobData = async () => {
      if (id !== undefined) {
        let response = await axios.get(`http://localhost:3001/getjobcard/${id}`)
        console.log('THIS IS THE DATA!!', response.data.jobCardItem)
        setData(response.data.jobCardItem)
      }
    }
    getJobData()
  }, [])

  useEffect(() => {
    const getAllRemindersByJobId = async () => {
      const response = await axios.get(
        `http://localhost:3001/getallreminders-job/${id}`
      )
      console.log(
        'This is the ALL REMINDERS BY ID DATA',
        response.data.allReminders
      )
      setAllReminders(response.data.allReminders)
    }
    getAllRemindersByJobId()
  }, [currentReminderText])

  const editHandleClick = () => {
    navigate(`/editpage/${id}`)
  }

  const deleteHandleClick = async () => {
    const response = await axios.delete(`http://localhost:3001/deletejob/${id}`)
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
    const response = await axios.delete(`http://localhost:3001/deletejob/${id}`)
    navigate('/')
  }

  const addReminderHandleClick = async (e) => {
    const response = await axios.post('http://localhost:3001/createreminder', {
      jobId: id,
      reminderText: currentReminderText,
      isComplete: false
    })
    console.log('THIS IS RESPONSE DATA REMINDER', response.data)
    setReminderText('')
  }

  const inputHandleChange = (e) => {
    setReminderText(e.target.value)
    console.log('THIS IS REMINDER TEXT LINE 72', e.target.value)
  }

  return (
    <div>
      <div className="main-container">
        <div className="jobdetails-container">
          <section>
            <div className={`popup-box ${panelDisplay}`}>
              <p onClick={xHandleClick} className="x-close">
                X
              </p>
              <p className="popup-text">
                Are you sure you want to remove this item?
              </p>
              <p className="removebtn" onClick={realDeleteHandleClick}>
                Delete
              </p>
            </div>
            <div className="editdelete-btns">
              <span onClick={deletebtnHandleClick} className="deletebtn">
                <img src={deleteImg} />
              </span>
              <span onClick={editHandleClick} className="editbtn">
                <img src={editImg} />
              </span>
            </div>

            <div className="secondmain-container">
              <div className="topsection">
                <h2 className="companyname">{currentData.companyName}</h2>
                <div className="titlelink-container">
                  <h4 className="job-title">{currentData.jobTitle}</h4>
                  <div className="job-link">
                    <a href={currentData.urls}>Job Link</a>
                  </div>
                </div>

                <div className="span-container">
                  <span>{currentData.hiringStatus}</span>
                  <span>Date added: {currentData.jobDateAdded}</span>
                  <span>Date applied: {currentData.dateApplied}</span>
                  <span>
                    Application Status: {currentData.applicationStatus}
                  </span>
                  <span>{currentData.contactEmail}</span>
                </div>
              </div>

              <div className="reminders-container">
                {/* <span className="circle-reminder"></span> */}
                <input
                  onChange={inputHandleChange}
                  type="text"
                  placeholder="type reminder"
                  className="reminder-inputbox"
                />
                <span
                  onClick={addReminderHandleClick}
                  className="plus-reminder"
                >
                  +
                </span>
              </div>

              <div>
                <ul>
                  {currentAllReminders.map((reminderItem) => {
                    console.log(reminderItem)
                    return (
                      <li className="reminder-item">
                        {reminderItem.reminderText}
                      </li>
                    )
                  })}
                </ul>
              </div>

              <div className="notes-container">
                <p>Notes:</p>
                <span>{currentData.notes}</span>
              </div>

              <div className="url-container">
                <p>URLs:</p>
                <span>{currentData.urls}</span>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  )
}

export default JobDetails
