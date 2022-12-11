import './JobDetails.css'
// import deleteImg from './delete_img.jpg'
import axios from 'axios'
import { useState } from 'react'
import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'

const JobDetails = (props) => {
  const navigate = useNavigate()
  let { id } = useParams()
  const [currentData, setData] = useState([])
  const [currentDisplay, setDisplay] = useState(false)

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
  return (
    <div>
      <header>Mari</header>
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
                delete
              </span>
              <span onClick={editHandleClick} className="editbtn">
                edit
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
