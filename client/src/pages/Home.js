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
  let { id } = useNavigate()
  const [currentData, setData] = useState([])
  const [currentReminders, setReminders] = useState([])
  const [currentReminder, setReminder] = useState({})

  useEffect(() => {
    const getJobData = async () => {
      const response = await axios.get('http://localhost:3001/getalljobs')
      console.log('This is the DATA that I need!', response.data.allJobs)
      console.log('COMPANY NAME', response.data.allJobs)
      setData(response.data.allJobs)
    }
    getJobData()

    const getRemindersData = async () => {
      const response = await axios.get('http://localhost:3001/getallreminders')
      console.log('This is the REMINDERS data', response.data.allReminders)
      setReminders(response.data.allReminders)
      if (id !== undefined) {
        const res = await axios.get(`http://localhost:3001/getreminder/${id}`)
        console.log('This is a SINGLE REMINDER', res.data.reminderText)
        setReminder(res.data.reminderText)
      }
    }
    getRemindersData()
  }, [])

  return (
    <div className="main-container">
      <div className="header-container">
        <div className="user-name">Mari</div>
        <div className="signout-btn">Sign Out</div>
      </div>

      <div className="reminders-box">
        <ul className="reminders-container">
          {currentReminders.map((remindItem) => {
            console.log('this is a remind item', remindItem)
            console.log('THIS IS JOB ID', remindItem.jobId)

            let companyName = ''
            let foundJobObj = currentData.find((jobItem) => {
              return jobItem.id === remindItem.jobId
            })

            if (foundJobObj) {
              companyName = foundJobObj.companyName
            }

            return (
              <ReminderItem
                companyName={companyName}
                remindText={remindItem.reminderText}
                // applicationStatus={currentData.applicationStatus}
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
            console.log(jobItem)
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
