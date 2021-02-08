import React, { useState } from "react";
import { unstable_renderSubtreeIntoContainer } from "react-dom";
import "./style.css";

const EmployeeForm = () => {
  const [firstName, setFirstName] = useState();
  const [lastName, setLastName] = useState();
  const [country, setCountry] = useState();
  const [subject, setSubject] = useState();

  const [employeeList, setEmployeeList] = useState([]);

  const onFirstNameChange = (event) => {
    setFirstName(event.target.value);
  };
  const onLastNameChange = (event) => {
    setLastName(event.target.value);
  };

  const onCountryChange = (event) => {
    setCountry(event.target.value);
  };

  const onSubjectChange = (event) => {
    setSubject(event.target.value);
  };

  const onClick = () => {
    const employees = [];
    const employee = {
      firstName: firstName,
      lastName: lastName,
      country: country,
      subject: subject,
    };
    employees.push(employee);
    setEmployeeList([...employeeList, ...employees]);

    alert("Do you wanna Save?");
  };

  console.log("firstName", firstName);
  console.log("lastName", lastName);
  console.log("country", country);
  console.log("subject", subject);
  console.log("employee List", employeeList);
  return (
    <div className="container">
      <div>
        <h3>EMPLOYEE FORM<hr/></h3>
        <form action="">
          <label htmlFor="fname">First Name</label>
          <input
            type="text"
            id="fname"
            name="firstName"
            placeholder="Your name.."
            onChange={onFirstNameChange}
          />

          <label htmlFor="lname">Last Name</label>
          <input
            type="text"
            id="lname"
            name="lastName"
            placeholder="Your last name.."
            onChange={onLastNameChange}
          />

          <label htmlFor="country">Country</label>
          <select id="country" name="country" onChange={onCountryChange}>
            <option value="australia">Australia</option>
            <option value="canada">Canada</option>
            <option value="usa">USA</option>
          </select>

          <label htmlFor="subject">Subject</label>
          <textarea
            id="subject"
            name="subject"
            placeholder="Write something.."
            onChange={onSubjectChange}
          ></textarea>

          <input type="submit" value="Submit" />
          <input type="submit" value="Delete" />
          <input type="submit" value="Insert" />
          <input type="submit" value="Update" />
          <button type="button" onClick={onClick}>
            Save
          </button>
        </form>
      </div>

      <div>
        <h3>EMPLOYEE LIST</h3>
      <table >
  <tr>
    <th>Firstname</th>
    <th>Lastname</th>
    <th>Country</th>
    <th>Subject</th>
  </tr>

  {employeeList.map((employee) => {
    return (

  <tr>
    <td>{employee.firstName}</td>
    <td>{employee.lastName}</td>
    <td>{employee.country}</td>
    <td>{employee.subject}</td>

  </tr>
    );
  })}
  
</table>

      </div>
    </div>
  );
};

export default EmployeeForm;
