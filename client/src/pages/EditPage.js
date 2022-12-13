import editjob from './editjob.css'
import { useEffect, useState } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import React from 'react'

const EditJob = () => {
  const navigate = useNavigate()
  let { id } = useParams()

  const [currentData, setData] = useState([])
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

  useEffect(() => {
    const getDataById = async () => {
      const response = await axios.get(`http://localhost:3001/getjobcard/${id}`)
      console.log('EDIT PAGE BY ID', response.data)
      setData('THIS IS EDIT PAGE DATA!', response.data.editJobCard)
      setCompanyName(response.data.jobCardItem.companyName)
      setJobTitle(response.data.jobCardItem.jobTitle)
      setHiringStatus(response.data.jobCardItem.hiringStatus)
      setJobDateAdded(response.data.jobCardItem.setDateJobAdded)
      setDateApplied(response.data.jobCardItem.dateApplied)
      setApplicationStatus(response.data.jobCardItem.applicationStatus)
      setJobListingEmail(response.data.jobCardItem.contactEmail)
      setNotes(response.data.jobCardItem.notes)
      setUrls(response.data.jobCardItem.urls)
    }
    getDataById()
  }, [])

  const submitHandleClick = async (e) => {
    e.preventDefault()
    const response = await axios.put(`http://localhost:3001/updatejob/${id}`, {
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

    navigate(-1)
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

  return (
    <div className="main-container">
      <form>
        <h3>Edit Job</h3>
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
        <button className="createjob-btn" onClick={submitHandleClick}>
          Submit
        </button>
      </form>
    </div>
  )
}

export default EditJob
