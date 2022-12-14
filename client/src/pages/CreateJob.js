import createjob from './createjob.css'
import { useNavigate, useParams } from 'react-router-dom'
import axios from 'axios'
import { useState } from 'react'
import React from 'react'

const BASE_URL = 'https://marijobtracker.herokuapp.com/'

const CreateJob = () => {
  const [currentCompanyName, setCompanyName] = useState('')
  const [currentJobTitle, setJobTitle] = useState('')
  const [currentHiringStatus, setHiringStatus] = useState('')
  const [currentdateJobAdded, setJobDateAdded] = useState('')
  const [currentDateApplied, setDateApplied] = useState('')
  const [currentApplicationStatus, setApplicationStatus] = useState('')
  const [currentJobListingEmail, setJobListingEmail] = useState('')
  const [currentNotes, setNotes] = useState('')
  const [currentUrls, setUrls] = useState('')

  let { id } = useParams()
  const navigate = useNavigate()

  const submitHandleClick = async (e) => {
    e.preventDefault()
    console.log('submit button was clicked!')
    const response = await axios.post(`${BASE_URL}/createjob`, {
      companyName: currentCompanyName,
      jobTitle: currentJobTitle,
      hiringStatus: currentHiringStatus,
      jobDateAdded: currentdateJobAdded,
      dateApplied: currentDateApplied,
      applicationStatus: currentApplicationStatus,
      contactEmail: currentJobListingEmail,
      notes: currentNotes,
      urls: currentUrls
    })
    console.log(currentApplicationStatus)
    navigate(-1)
  }

  const companyNameHandleChange = (e) => {
    setCompanyName(e.target.value)
    console.log(e.target.value, 'company name text')
  }

  const jobTitleHandleChange = (e) => {
    setJobTitle(e.target.value)
    console.log(e.target.value, 'job title text')
  }
  const hiringStatusHandleChange = (e) => {
    setHiringStatus(e.target.value)
    console.log(e.target.value, 'hiring status text')
  }
  const dateJobAddedHandleChange = (e) => {
    setJobDateAdded(e.target.value)
    console.log(e.target.value, 'added job text')
  }
  const dateAppliedHandleChange = (e) => {
    setDateApplied(e.target.value)
    console.log(e.target.value, 'date applied text')
  }
  const applicationStatusHandleChange = (e) => {
    console.log('THIS IS THE VALUE OF APP STATUS', e.target.value)
    setApplicationStatus(e.target.value)
  }

  const contactEmailHandleChange = (e) => {
    setJobListingEmail(e.target.value)
    console.log(e.target.value, 'joblisting email text')
  }
  const notesHandleChange = (e) => {
    setNotes(e.target.value)
    console.log(e.target.value, 'notes content')
  }
  const urlsHandleChange = (e) => {
    setUrls(e.target.value)
    console.log(e.target.value, 'urls text')
  }

  return (
    <div className="main-container">
      <form>
        <h3>CREATE JOB DETAILS</h3>
        <input
          value={currentCompanyName}
          type="text"
          onChange={(e) => companyNameHandleChange(e, 'company name')}
          className="form-item"
          placeholder="company name"
        />
        <input
          value={currentJobTitle}
          type="text"
          onChange={(e) => jobTitleHandleChange(e, 'job title')}
          className="form-item"
          placeholder="job title"
        />
        <input
          value={currentHiringStatus}
          type="text"
          onChange={(e) => hiringStatusHandleChange(e, 'hiring status')}
          className="form-item"
          placeholder="hiring status"
        />
        <input
          value={currentdateJobAdded}
          onChange={(e) => dateJobAddedHandleChange(e, 'date job added')}
          className="form-item"
          placeholder="date job added"
        />
        <input
          value={currentDateApplied}
          onChange={(e) => dateAppliedHandleChange(e, 'date applied')}
          className="form-item"
          placeholder="date applied"
        />

        <select
          name="application-status"
          id="dropdown"
          onChange={applicationStatusHandleChange}
          value={currentApplicationStatus}
        >
          <option> SELECT APPLICATION STATUS</option>
          <option name="applied" value="applied">
            APPLIED
          </option>
          <option name="phoneinterview" value="phoneinterview">
            PHONE INTERVIEW
          </option>
          <option name="hiringinterview" value="hiringinterview">
            HIRING INTERVIEW
          </option>
          <option name="joboffer" value="joboffer">
            JOB OFFER
          </option>
          <option name="rejected" value="rejected">
            REJECTED
          </option>
          <option name="ghosting" value="ghosting">
            GHOSTING
          </option>
        </select>

        {/* <option value="applied">APPLIED</option>
          <option value="phone-interview">PHONE INTERVIEW</option>
          <option value="hiring-interview">HIRING INTERVIEW</option>
          <option value="offer">JOB OFFER</option>
          <option value="rejected">REJECTED</option> 

        <input
          value={currentApplicationStatus}
          type="text"
          onChange={(e) =>
            applicationStatusHandleChange(e, 'application status')
          }
          className="form-item"
          placeholder="application status"
        /> */}

        <input
          value={currentJobListingEmail}
          onChange={(e) => contactEmailHandleChange(e, 'contact email')}
          className="form-item"
          type="email"
          placeholder="job listing email"
        />
        <textarea
          value={currentNotes}
          onChange={(e) => notesHandleChange(e, 'notes')}
          className="form-item"
          id="textarea-notes"
          placeholder="Notes"
        />
        <input
          value={currentUrls}
          type="url"
          onChange={(e) => urlsHandleChange(e, 'urls')}
          className="form-item"
          id="textarea-urls"
          placeholder="URL"
        />
        <button onClick={submitHandleClick} className="createjob-btn">
          Submit
        </button>
      </form>
    </div>
  )
}

export default CreateJob
