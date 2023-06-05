const employees = [
{
    id: 1,
    name: 'Jose Pereda',
    ext: 1124,
    email: 'joselpereda@live.com',
    title: "Chief Tech Architect",
},
{
    id: 2,
    name: 'Sally Smith',
    ext: 1125,
    email: 'sallysmith@live.com',
    title: "Director of Sales",

}
]

class EmployeeFilter extends React.Component {
    render() {
        return(<div>This is a placeholder for the employee filter.</div>)
    } 
}

class EmployeeTable extends React.Component {
    render() {
        const employeeRows = employees.map(employee =>
            <EmployeeRow employee={employee} />)
        return(
            <table style="bordered-table">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Extension</th>
                        <th>Email</th>
                        <th>Title</th>
                    </tr>
                </thead>
                <tbody>
                    {EmployeeRows}
                </tbody>
            </table>
        )
    } 
}

class EmployeeRow extends React.Component {
    render () {
        const style = this.props.rowstyle
        return (<tr>
            <td style={style}>{this.props.employee_name}</td>
            <td style={style}>{this.props.employee_ext}</td>
            <td style={style}>{this.props.employee_email}</td>
            <td style={style}>{this.props.employee_title}</td>
        </tr>
        )
    }
}

class EmployeeAdd extends React.Component {
    render() {
        return(<div>This is a placeholder for a form to add a new employee.</div>)
    } 
}

class EmployeeList extends React.Component {
    render() { 
        return(
            <React.Fragment>
                    <h1>Employee Management Application</h1> 
                    <EmployeeFilter />
                    <hr />
                    <EmployeeTable/>
                    <hr />
                    <EmployeeAdd />
            </React.Fragment>
        )
    }
}

const contentNode = document.getElementById('content')
ReactDOM.render(<EmployeeList />, contentNode)