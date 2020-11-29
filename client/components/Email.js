import React, {Component} from 'react'
import './Email.css'
// import nodemailer from 'nodemailer'

export default class Email extends Component {
  constructor() {
    super()
    this.state = {
      email: ''
    }
    // this.handleEmail = this.handleEmail.bind(this)
  }
  // handleEmail() {
  //   const transporter = nodemailer.createTransport({
  //     service: 'gmail',
  //     auth: {
  //       user: 'jchoi33095@gmail.com',
  //       pass: 'yourpassword',
  //     },
  //   })

  //   const mailOptions = {
  //     from: 'youremail@gmail.com',
  //     to: 'myfriend@yahoo.com',
  //     subject: 'Sending Email using Node.js',
  //     text: 'That was easy!',
  //   }

  //   transporter.sendMail(mailOptions, function (error, info) {
  //     if (error) {
  //       console.log(error)
  //     } else {
  //       console.log('Email sent: ' + info.response)
  //     }
  //   })
  // }
  render() {
    const savedArr = JSON.parse(localStorage.getItem('saved'))
    console.log(savedArr)
    return (
      <div className="saved">
        <h1>Saved Items</h1>
        {savedArr.map((elm, key) => {
          return (
            <div key={key}>
              <p>Title: {elm.title}</p>
              <p>
                Artist:{' '}
                {elm.artistDisplayName.length === 0
                  ? 'N/A'
                  : elm.artistDisplayName}
              </p>
              <img src={elm.primaryImage} alt="image" className="images" />
            </div>
          )
        })}
        <div>
          <form className="formField">
            <label>
              Name:
              <input type="text" name="name" />
            </label>
            <br />
            <label>
              Email:
              <input type="text" name="name" />
            </label>
            <br />
            <input type="submit" value="Submit" />
          </form>
        </div>
      </div>
    )
  }
}
