import { Component } from "react";
import EmployeesListItem from "../employees-list-item/employees-list-item";

import './employees-list.css';

class EmployeesList extends Component {

    render() {
        const personList = this.props.data.map((person, i) => {
           return (
            <EmployeesListItem  person={person} 
                                key={i}
                                onDeletePerson={this.props.onDeletePerson}
                                onAddIncrease={this.props.onAddIncrease}
                                />
         )
        })
             
        return (
            <ul className="app-list list-group">
               {personList}
            </ul>
        )
    }
    
}

export default EmployeesList;