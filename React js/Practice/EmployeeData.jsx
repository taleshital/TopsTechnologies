import React from "react";
import "./EmployeeData.css";

const EmployeeData = () => {
    const Employee = ({ id, name, salary }) => {
        if (salary >= 50000) {
            return (
                <tr>
                    <td>{id}</td>
                    <td>{name}</td>
                    <td>{salary}</td>
                </tr>
            );
        }
        return null;
    };

    return (
        <table className="table-container">
            <thead>
                <tr>
                    <th>ID</th>
                    <th>NAME</th>
                    <th>SALARY</th>
                </tr>
            </thead>
            <tbody>
                <Employee id="1" name="Shital" salary="30000" />
                <Employee id="2" name="Suraj" salary="40000" />
                <Employee id="3" name="Jay" salary="50000" />
                <Employee id="4" name="Aniket" salary="50000" />
                <Employee id="5" name="Sagar" salary="50000" />
            </tbody>
        </table>
    );
};

export default EmployeeData;
