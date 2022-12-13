import createjob from './createjob.css'
import { useNavigate, useParams } from 'react-router-dom'
import axios from 'axios'
import { useState } from 'react'
import React from 'react'

const CreateJob = () => {
  const [currentCompanyName, setCompanyName] = useState('')
  const [currentJobTitle, setJobTitle] = useState('')
  const [currentHiringStatus, setHiringStatus] = useState('')
  const [currentdateJobAdded, setJobDateAdded] = useState('')
  const [currentDateApplied, setDateApplied] = useState('')
  const [currentApplicationStatus, setApplicationStatus] = useState('')
  const [currentJobListingEmail, setJobListingEmail] = useState('')
  const [currentNotes, setNotes] = useState('')
  const [currentReminders, setReminders] = useState('')
  const [currentUrls, setUrls] = useState('')
  const [currentIsComplete, setIsComplete] = useState(Boolean)

  let { id } = useParams()
  const navigate = useNavigate()

  const submitHandleClick = async (e) => {
    e.preventDefault()
    console.log('submit button was clicked!')
    const response = await axios.post('http://localhost:3001/createjob', {
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
    // const res = await axios.post('http://localhost:3001/createreminder', {
    //   reminderText: currentReminders,
    //   isComplete: currentIsComplete
    // })
    navigate(-1)
  }

  const dropdownHandleClick = (e) => {
    e.preventDefault()
    console.log('THIS IS APPLICATION STATUS', e.target.value)
  }

  const companyNameHandleChange = async (e) => {
    setCompanyName(e.target.value.toUpperCase())
    console.log(e.target.value, 'company name text')
  }

  const jobTitleHandleChange = async (e) => {
    setJobTitle(e.target.value.toUpperCase())
    console.log(e.target.value, 'job title text')
  }
  const hiringStatusHandleChange = async (e) => {
    setHiringStatus(e.target.value)
    console.log(e.target.value, 'hiring status text')
  }
  const dateJobAddedHandleChange = async (e) => {
    setJobDateAdded(e.target.value)
    console.log(e.target.value, 'added job text')
  }
  const dateAppliedHandleChange = async (e) => {
    setDateApplied(e.target.value)
    console.log(e.target.value, 'date applied text')
  }
  // const applicationStatusHandleClick = async (e) => {
  //   setApplicationStatus(e.target.value.toUpperCase())
  //   console.log(e.target.value, 'application status text')
  // }
  const contactEmailHandleChange = async (e) => {
    setJobListingEmail(e.target.value.toUpperCase())
    console.log(e.target.value, 'joblisting email text')
  }
  const notesHandleChange = async (e) => {
    setNotes(e.target.value)
    console.log(e.target.value, 'notes content')
  }
  const urlsHandleChange = async (e) => {
    setUrls(e.target.value)
    console.log(e.target.value, 'urls text')
  }

  console.log(currentCompanyName)
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

        <label for="application-status" id="label">
          Application Status
        </label>
        <select
          name="application-status"
          id="dropdown"
          onClick={currentApplicationStatus}
        >
          <option value="applied">APPLIED</option>
          <option value="phone-interview">PHONE INTERVIEW</option>
          <option value="hiring-interview">HIRING INTERVIEW</option>
          <option value="offer">OFFER</option>
          <option value="rejected">REJECTED</option>
        </select>

        {/* 
//////////////////////////////////////////////////////////////////// */}

        {/* <input
          value={currentApplicationStatus}
          type="text"
          onChange={(e) =>
            applicationStatusHandleChange(e, 'application status')
          }
          className="form-item"
          placeholder="application status"
        /> */}

        {/* ///////////////////////////////////////////////////////////////////// */}

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
