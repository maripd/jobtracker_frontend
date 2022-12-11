import './JobCard.css'
import { useNavigate } from 'react-router-dom'

const JobCard = (props) => {
  const navigate = useNavigate()

  const cardHandleClick = () => {
    // add id for path
    navigate(`/jobDetails/${props.id}`)
  }

  return (
    <div className="alljobs-container" onClick={cardHandleClick}>
      <li className="alljobs-list">
        <h3 class="jobcard-detail">{props.companyName}</h3>
        <span class="jobcard-detail">{props.jobTitle}</span>
        <span class="jobcard-detail">{props.hiringStatus}</span>
        <span class="jobcard-detail">{props.applicationStatus}</span>
        <span class="jobcard-detail">{props.statusBar}</span>
        <div className="status-bar"></div>
      </li>
    </div>
  )
}
export default JobCard
