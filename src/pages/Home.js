import '../App.css'
import React from 'react'
import axios from 'axios'
import { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import ReminderItem from '../components/ReminderItem'
import JobCard from '../components/JobCard'
import CenterButtons from '../components/CenterButtonsHome'
import '../components/CenterButtons.css'
const BASE_URL = 'https://marijobtracker.herokuapp.com'

const Home = () => {
  const [currentData, setData] = useState([])
  const [currentReminders, setReminders] = useState([])
  // const [currentApplicationStatus, setApplicationStatus] = useState('')
  console.log('THIS IS CURRENT REMINDERS', currentReminders)
  const getRemindersData = async () => {
    const response = await axios.get(`${BASE_URL}/getallreminders`)
    setReminders(response.data.allReminders)
  }
  useEffect(() => {
    const getJobData = async () => {
      const response = await axios.get(`${BASE_URL}/getalljobs`)
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
              //if data is empty, return empty element
              return <></>
            }
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
      <div className="maincard-div">
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
