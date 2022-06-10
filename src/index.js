async function renderHirebeatWidget() {
    const myTag = document.getElementsByTagName('hirebeat-jobs')
    if (myTag.length < 1) {
        console.error('Did not find <hirebeat-jobs> tag in the document')
        return
    }

    // replace '/jd.json' with get-current-jobs?jobid=(job_id from hirebeat-jobs tag)
    const link2_jobid = myTag[0].getAttribute('jobid')
    const link1 = `https://app.hirebeat.co/apply-job/_/get-current-jobs?jobid=${link2_jobid}`
    let response = await fetch(link1)
    response = await response.json()
    console.log(response)

    // need error handling

    // company logo
    const companyLogo = document.createElement("img")
    companyLogo.setAttribute("src", response.data.company_logo)

    // company overview
    const companyOverview = document.createElement("div")
    const companyOverviewTitle = document.createElement("h2")
    companyOverviewTitle.innerText = "Company Overview"
    const companyOverviewContent = document.createElement("h3")
    companyOverviewContent.innerHTML = response.data.company_overview
    companyOverview.appendChild(companyOverviewTitle)
    companyOverview.appendChild(companyOverviewContent)

    // job title
    const jobTitle = document.createElement("h1")
    const jobTitleContent = document.createTextNode(response.data.job_title)
    jobTitle.appendChild(jobTitleContent)

    // job level
    const jobLevel = document.createElement("h3")
    const jobLevelContent = document.createTextNode(response.data.job_level)
    jobLevel.appendChild(jobLevelContent)

    // job location
    const jobLocation = document.createElement("h3")
    const jobLocationContent = document.createTextNode(response.data.job_location)
    jobLocation.appendChild(jobLocationContent)

    // job description
    const jobDescription = document.createElement("div")
    const jobDescriptionTitle = document.createElement("h2")
    jobDescriptionTitle.innerText = "Job Description"
    const jobDescriptionContent = document.createElement("h3")
    jobDescriptionContent.innerHTML = response.data.job_description
    jobDescription.appendChild(jobDescriptionTitle)
    jobDescription.appendChild(jobDescriptionContent)


    myTag[0].replaceChildren(companyLogo, jobTitle, jobLevel, jobLocation, companyOverview, jobDescription)

}

document.addEventListener('DOMContentLoaded', renderHirebeatWidget)