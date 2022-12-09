// import { Link } from 'react-router-dom'
import '../App.css'
import ReminderList from '../components/ReminderList'
import AllJobs from '../components/AllJobs'
import CenterButtons from '../components/CenterButtonsHome'
import CenterButtonsCss from './CenterButtons.css'

const remindersData = [
  {
    company: 'Walt Disney',
    text: 'Code challenge due on Monday'
  },
  { company: 'Electronic Arts', text: 'Rejection follow up' },
  {
    company: 'Dell',
    text: 'Email reply onsite question'
  },
  {
    company: 'IBM',
    text: 'Offer reply'
  },
  {
    company: 'Target',
    text: 'Edit resume for Target'
  }
]

const AllJobsData = [
  {
    companyName: 'Apple',
    jobTitle: 'Full Stack Engineer',
    hiringStatus: 'Actively Recruiting',
    applicationStatus: 'Applied'
  },
  {
    companyName: 'Walt Disney',
    jobTitle: 'Front End Engineer',
    hiringStatus: 'Actively Recruiting',
    applicationStatus: 'Applied'
  },
  {
    companyName: 'Netflix',
    jobTitle: 'Back End Engineer',
    hiringStatus: 'Actively Recruiting',
    applicationStatus: 'Applied'
  },
  {
    companyName: 'Google',
    jobTitle: 'Full Stack Engineer',
    hiringStatus: 'Actively Recruiting',
    applicationStatus: 'Applied'
  }
]
const Home = () => {
  return (
    <div className="main-container">
      <div className="header-container">
        <div className="user-name">Mari</div>
        <div className="signout-btn">Sign Out</div>
      </div>

      <div className="reminders-box">
        <ul className="reminders-container">
          {remindersData.map((remindItem) => {
            console.log('this is a remind item', remindItem)
            return (
              <ReminderList
                companyName={remindItem.company}
                remindText={remindItem.text}
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
          {AllJobsData.map((jobItem) => {
            console.log(jobItem)
            return (
              <AllJobs
                companyName={jobItem.companyName}
                jobTitle={jobItem.jobTitle}
                hiringStatus={jobItem.hiringStatus}
                applicationStatus={jobItem.applicationStatus}
                statusBar={jobItem.statusBar}
              />
            )
          })}
        </ul>
      </div>
    </div>
  )
}

export default Home
