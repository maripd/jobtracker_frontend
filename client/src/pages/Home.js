// import { Link } from 'react-router-dom'
import '../App.css'
import React from 'react'
import axios from 'axios'
import { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import ReminderItem from '../components/ReminderItem'
import JobCard from '../components/JobCard'
import CenterButtons from '../components/CenterButtonsHome'
import '../components/CenterButtons.css'

const Home = () => {
  const [currentData, setData] = useState([])
  const [currentReminders, setReminders] = useState([])
  const [currentApplicationStatus, setApplicationStatus] = useState('')
  console.log('THIS IS CURRENT REMINDERS', currentReminders)
  const getRemindersData = async () => {
    const response = await axios.get('http://localhost:3001/getallreminders')
    // console.log('This is the REMINDERS data', response.data.allReminders)
    setReminders(response.data.allReminders)
  }
  useEffect(() => {
    const getJobData = async () => {
      const response = await axios.get('http://localhost:3001/getalljobs')
      // console.log('This is the DATA that I need!', response.data.allJobs)
      // console.log('COMPANY NAME', response.data.allJobs)
      setData(response.data.allJobs)
      getRemindersData()
    }
    getJobData()
  }, [])

  return (
    <div className="homemain-container">
      <div className="reminders-box">
        <ul className="reminders-container">
          {currentReminders.map((remindItem) => {
            if (remindItem.isComplete === true) {
              return <></>
            }
            // console.log('this is a remind item', remindItem)
            // console.log('THIS IS JOB ID', remindItem.jobId)

            let companyName = ''
            let foundJobObj = currentData.find((jobItem) => {
              console.log('job and reminder id', jobItem.id, remindItem.jobId)
              return jobItem._id === remindItem.jobId
            })

            if (foundJobObj) {
              console.log('FOUND OBJ', foundJobObj)
              companyName = foundJobObj.companyName
            }
            return (
              <ReminderItem
                companyName={companyName}
                remindText={remindItem.reminderText}
                id={remindItem._id}
                jobId={remindItem.jobId}
                completed={() => {
                  getRemindersData()
                }}
              />
            )
          })}
        </ul>
      </div>
      <div className="center-btns">
        <CenterButtons />
      </div>
      <div>
        <ul className="job-card">
          {currentData.map((jobItem) => {
            return (
              <JobCard
                id={jobItem._id}
                companyName={jobItem.companyName}
                jobTitle={jobItem.jobTitle}
                hiringStatus={jobItem.hiringStatus}
                applicationStatus={jobItem.applicationStatus}
              />
            )
          })}
        </ul>
      </div>
    </div>
  )
}

export default Home
