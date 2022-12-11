// import { Link } from 'react-router-dom'
import '../App.css'

import React from 'react'
import axios from 'axios'
import { useEffect, useState } from 'react'
import ReminderList from '../components/ReminderList'
import JobCard from '../components/JobCard'
import CenterButtons from '../components/CenterButtonsHome'
import '../components/CenterButtons.css'

const Home = () => {
  const [currentData, setData] = useState([])
  const [currentReminders, setReminders] = useState([])

  useEffect(() => {
    const getJobData = async () => {
      let response = await axios.get('http://localhost:3001/getalljobs')
      console.log('This is the DATA that I need!', response.data.allJobs)
      console.log('COMPANY NAME', response.data.allJobs)
      setData(response.data.allJobs)
    }
    getJobData()

    const getRemindersData = async () => {
      let response = await axios.get('http://localhost:3001/getallreminders')
      console.log('This is the REMINDERS data', response.data.allReminders)
      setReminders(response.data.allReminders)
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
            return (
              <ReminderList
                companyName={currentData.companyName}
                remindText={remindItem.reminderText}
                applicationStatus={currentData.applicationStatus}
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
