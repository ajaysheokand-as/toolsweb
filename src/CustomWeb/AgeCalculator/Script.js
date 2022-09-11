import React from 'react'
import { useState } from 'react';
import * as Datetime from 'react-datetime';

export const Script = () => {
    const [ age, setAge] = useState();
    let [ dob, setDob] = useState(null);
   
    const handleChange = (event) =>{
        setDob(event.target.value);
        console.log(dob);
    }
//   return (
//     <div></div>
//   )
// }

// class AgeCalculator extends React.Component {
//     state = {};
//     public render(): JSX.Element {
    const   calculateAge = () => {
       
        dob = new Date();
        const dateString   = dob;
        const now = new Date();
        console.log(dob)
        const yearNow  = now.getFullYear();
        const monthNow  = now.getMonth();
        const dateNow  = now.getDate();

        const dob = new Date(dateString);

        const yearDob  = dob.getFullYear();
        const monthDob  = dob.getMonth();
        const dateDob  = dob.getDate();

        let yearAge  = yearNow - yearDob;
        let monthAge ;

        if (monthNow >= monthDob) {
            monthAge = monthNow - monthDob;
        } else {
            yearAge--;
            monthAge = 12 + monthNow - monthDob;
        }

        let dateAge ;
        if (dateNow >= dateDob) {
            dateAge = dateNow - dateDob;
        } else {
            monthAge--;
            dateAge = 31 + dateNow - dateDob;

            if (monthAge < 0) {
                monthAge = 11;
                yearAge--;
            }
        }

        const age = {
            years: yearAge,
            months: monthAge,
            days: dateAge
        };

        const yearString   = (age.years > 1) ? "years" : "year";
        const monthString   = (age.months > 1) ? " months" : " month";
        const dayString   = (age.days > 1) ? " days" : " day";

        let ageString   = "";

        if ((age.years > 0) && (age.months > 0) && (age.days > 0)) {
            ageString = age.years + yearString + ", " + age.months + monthString + ", and " + age.days + dayString + " old.";
        } else if ((age.years === 0) && (age.months === 0) && (age.days > 0)) {
            ageString = "Only " + age.days + dayString + " old!";
        } else if ((age.years > 0) && (age.months === 0) && (age.days === 0)) {
            ageString = age.years + yearString + " old. Happy Birthday!!";
        } else if ((age.years > 0) && (age.months > 0) && (age.days === 0)) {
            ageString = age.years + yearString + " and " + age.months + monthString + " old.";
        } else if ((age.years === 0) && (age.months > 0) && (age.days > 0)) {
            ageString = age.months + monthString + " and " + age.days + dayString + " old.";
        } else if ((age.years > 0) && (age.months === 0) && (age.days > 0)) {
            ageString = age.years + yearString + " and " + age.days + dayString + " old.";
        } else if ((age.years === 0) && (age.months > 0) && (age.days === 0)) {
            ageString = age.months + monthString + " old.";
        } else {
            ageString = "Oops! Could not calculate age!";
        }

    setAge({ ageString });
    };
        return (
            <div id="container">
                <table className='table'>
                    <thead>
                        <tr>
                            <th colSpan={2}><h2>Age Calculator</h2></th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td><span>Date of birth: </span></td>
                            <td><Datetime dateFormat="YYYY-MM-DD" timeFormat={false} /></td>
                        </tr>
                        
                        <tr>
                            <td colSpan={2}>
                                <button onClick={calculateAge}>Calculate age</button>
                            </td>
                        </tr>
                        <tr>
                            <td colSpan={2}><div className="result">{age}</div></td>
                        </tr>
                    </tbody>
                </table>
            </div>
        );
    }

  


// ReactDOM.render(<AgeCalculator />, document.getElementById("root"));