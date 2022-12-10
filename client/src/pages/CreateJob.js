import createjob from './createjob.css'
import { useParams } from 'react-router-dom'
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

  let { id } = useParams()

  const submitHandleClick = async (e) => {
    let response = await axios.post('http://localhost:3001/createjob', {
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
    console.log('submit button was clicked!')
  }

  const companyNameHandleChange = async (e) => {
    setCompanyName(e.target.value)
    console.log(e.target.value, 'company name text')
  }

  const jobTitleHandleChange = async (e) => {
    setJobTitle(e.target.value)
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
  const applicationStatusHandleChange = async (e) => {
    setApplicationStatus(e.target.value)
    console.log(e.target.value, 'application status text')
  }
  const contactEmailHandleChange = async (e) => {
    setJobListingEmail(e.target.value)
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

  const remindersHandleChange = async (e) => {
    setReminders(e.target.value)
    console.log(e.target.value, 'reminders content')
  }
  console.log(currentCompanyName)
  return (
    <div className="main-container">
      <header>Mari</header>
      <form>
        <h3>Create Job</h3>
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
        <input
          value={currentApplicationStatus}
          type="text"
          onChange={(e) =>
            applicationStatusHandleChange(e, 'application status')
          }
          className="form-item"
          placeholder="application status"
        />
        <input
          value={currentJobListingEmail}
          onChange={(e) => contactEmailHandleChange(e, 'contact email')}
          className="form-item"
          type="email"
          placeholder="job listing email"
        />
        <textarea
          value={currentReminders}
          onChange={(e) => remindersHandleChange(e, 'reminders')}
          className="form-item"
          id="textarea-reminder"
          placeholder="Reminders"
        />
        <textarea
          value={currentNotes}
          onChange={(e) => notesHandleChange(e, 'notes')}
          className="form-item"
          id="textarea-notes"
          placeholder="Notes"
        />
        <textarea
          value={currentUrls}
          onChange={(e) => urlsHandleChange(e, 'urls')}
          className="form-item"
          id="textarea-urls"
          placeholder="URLs"
        />
        <button onClick={submitHandleClick}>Submit</button>
      </form>
    </div>
  )
}

export default CreateJob
