import JobDetailsCss from './JobDetails.css'
import deleteImg from './delete_img.jpg'

const AllJobsData = [
  {
    companyName: 'Apple',
    jobTitle: 'Full Stack Engineer',
    hiringStatus: 'Actively Recruiting',
    jobDateAdded: '10-22-2022',
    dateApplied: '10-23-2022',
    applicationStatus: 'Applied',
    contactEmail: 'abc@gmail.com',
    notes: 'Need to review for technical assessment.',
    urls: 'github.com, classwiki.com'
  },
  {
    companyName: 'Walt Disney',
    jobTitle: 'Front End Engineer',
    hiringStatus: 'Actively Recruiting',
    applicationStatus: 'Applied',
    jobDateAdded: '10-22-2022',
    dateApplied: '10-23-2022',
    applicationStatus: 'Applied',
    contactEmail: 'abc@gmail.com',
    notes: 'Need to review for technical assessment.',
    urls: 'github.com, classwiki.com'
  },
  {
    companyName: 'Netflix',
    jobTitle: 'Back End Engineer',
    hiringStatus: 'Actively Recruiting',
    applicationStatus: 'Applied',
    jobDateAdded: '10-22-2022',
    dateApplied: '10-23-2022',
    applicationStatus: 'Applied',
    contactEmail: 'abc@gmail.com',
    notes: 'Need to review for technical assessment.',
    urls: 'github.com, classwiki.com'
  },
  {
    companyName: 'Google',
    jobTitle: 'Full Stack Engineer',
    hiringStatus: 'Actively Recruiting',
    applicationStatus: 'Applied',
    jobDateAdded: '10-22-2022',
    dateApplied: '10-23-2022',
    applicationStatus: 'Applied',
    contactEmail: 'abc@gmail.com',
    notes: 'Need to review for technical assessment.',
    urls: 'github.com, classwiki.com'
  }
]

const JobDetails = (props) => {
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
            {AllJobsData.map((jobDetailItem) => {
              console.log(jobDetailItem)
              return (
                <div className="secondmain-container">
                  <div className="topsection">
                    <h2 className="companyname">{jobDetailItem.companyName}</h2>
                    <div className="titlelink-container">
                      <h4 className="job-title">{jobDetailItem.jobTitle}</h4>
                      <div className="job-link">Job Link</div>
                    </div>
                    <div className="span-container">
                      <span>{jobDetailItem.hiringStatus}</span>
                      <span>Date added: {jobDetailItem.jobDateAdded}</span>
                      <span>Date applied: {jobDetailItem.dateApplied}</span>
                      <span>
                        Application Status: {jobDetailItem.applicationStatus}
                      </span>
                      <span>{jobDetailItem.contactEmail}</span>
                    </div>
                  </div>

                  <div className="notes-container">
                    <p>Notes:</p>
                    <span>{jobDetailItem.notes}</span>
                  </div>

                  <div className="url-container">
                    <p>URLs:</p>
                    <span>{jobDetailItem.urls}</span>
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
