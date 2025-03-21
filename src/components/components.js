import React from "react"

export function Intro(){
  return(
    <>
    <h1>ASINGURA K PHILIP</h1>
      <p>
        Hello there <br /> My name is Asingura K Philip, a student at Uganda Christian University
        pursuing a bachelors degree in Computer Science. <br />
        This is my portfolio website
      </p>
    </>
  )
}

export function Content(){
  return(<>
  <hr />
      <h2>Profile photo</h2>
      <img
        src="./public/profile.png"
        alt="profile "
        style={{ width: '300px' }}
      />
      <hr />
      <h2>Hobbies video</h2>
      <video width="600" height="340" controls>
        <source
          src="Bumblebee Comeback Fight Scene _ Transformers Rise of The Beasts.mp4"
          type="video/mp4"
        />
      </video>
      <hr />
      
  </>)
}

export function PersonalDetails(){
  return(
    <>
    <hr />
      <h1>Personal details section</h1>
      <ul>
        <li>Name: ASINGURA K PHILIP</li>
        <li>ID: B20231</li>
        <li>Course and Year: BSCS 2:2</li>
        <li>Hobbies and Interests: Movies, gaming</li>
      </ul>
    </>
  )
}
export function ContactSection(){
  return(
    <>
    <h2>Contact section</h2>
      <p>Email: nguraphill@gmail.com</p>
      <p>GitHub: Asingura-Philip</p>
    </>
  )
}
export function Links(){
  return(
    <>
    <h2>Links</h2>
      <a href="https://github.com/Asingura-Philip">Check out my GitHub</a>
      <br />
      <a href="https://cse-ucu.com/robotics-ai-club/">Check out interesting robotics projects</a>
      <hr />
    </>
  )
}

export function Table(){
    
  return(
    <>
    <h2>Results table</h2>
    <table style={{ border: '2px solid black' }}>
        <thead>
          <tr>
            <th>Courseunit</th>
            <th>Grade</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Understanding Old Testament</td>
            <td>4.0</td>
          </tr>
          <tr>
            <td>Writing and study skills</td>
            <td>4.0</td>
          </tr>
          <tr>
            <td>Fundamentals in computing</td>
            <td>4.0</td>
          </tr>
          <tr>
            <td>Essentials in hardware</td>
            <td>4.0</td>
          </tr>
          <tr>
            <td>Structured programming</td>
            <td>4.0</td>
          </tr>
          <tr>
            <td>Discrete Math</td>
            <td>4.0</td>
          </tr>
        </tbody>
      </table>
      <hr />
    </>
  )
}

