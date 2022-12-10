import './JobDetails.css'
// import deleteImg from './delete_img.jpg'
import axios from 'axios'
import { useState } from 'react'
import React, { useEffect } from 'react'

const JobDetails = (props) => {
  const [currentData, setData] = useState('')

  useEffect(() => {
    const getAllJobs = async () => {
      let response = await axios.get('http://localhost:3001/getalljobs')
      console.log('This is JOB DETAILS PAGE', response.data.allJobs)
      console.log('JOB DETAILS PAGE', response.data.allJobs)
      setData(response.data.allJobs)
    }
    getAllJobs()
  }, [])

  return (
    <div>
      <header>Mari</header>
      <div className="main-container">
        <div class="jobdetails-container">
          <section>
            <div className="editdelete-btns">
              <span className="deletebtn">delete</span>
              <span class="editbtn">edit</span>
            </div>

            {currentData.map((jobItem) => {
              console.log(jobItem)
              return (
                <div className="secondmain-container">
                  <div className="topsection">
                    <h2 className="companyname">{jobItem.companyName}</h2>
                    <div className="titlelink-container">
                      <h4 className="job-title">{jobItem.jobTitle}</h4>
                      <div className="job-link">Job Link</div>
                    </div>
                    <div className="span-container">
                      <span>{jobItem.hiringStatus}</span>
                      <span>Date added: {jobItem.jobDateAdded}</span>
                      <span>Date applied: {jobItem.dateApplied}</span>
                      <span>
                        Application Status: {jobItem.applicationStatus}
                      </span>
                      <span>{jobItem.contactEmail}</span>
                    </div>
                  </div>

                  <div className="notes-container">
                    <p>Notes:</p>
                    <span>{jobItem.notes}</span>
                  </div>

                  <div className="url-container">
                    <p>URLs:</p>
                    <span>{jobItem.urls}</span>
                  </div>
                </div>
              )
            })}
          </section>
        </div>
      </div>
    </div>
  )
}

export default JobDetails
