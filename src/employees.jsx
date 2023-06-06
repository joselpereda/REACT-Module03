class BorderWrap extends React.Component {
    render() {
        const borderStyle = {border: "1px solid silver", padding: 6}
        return (
             <div style={borderStyle}>
                {this.props.children}
             </div>
        )
    }
}

class EmployeeFilter extends React.Component {
    render() {
        return(<div>This is a placeholder for the employee filter.</div>)
    } 
}

class EmployeeTable extends React.Component {
    render() {
        const rowStyle = {border: "1px solid silver", padding:4}
        return(
            <table style={{width:"100%", borderCollapse: "collapse"}}>
                <thead>
                    <tr>
                        <th style={rowStyle}>Name</th>
                        <th style={rowStyle}>Extension</th>
                        <th style={rowStyle}>Email</th>
                        <th style={rowStyle}>Title</th>
                    </tr>
                </thead>
                <tbody>
                    <EmployeeRow rowstyle={rowStyle}
                        employee_name="Jose Pereda"
                        employee_ext={5541}
                        employee_email="joselpereda@live.com"
                        employee_title="Chief Tech Architect"/>
                    <EmployeeRow rowstyle={rowStyle}
                        employee_name="Tricia Banks"
                        employee_ext={4553}
                        employee_email="sallybanks@live.com"
                        employee_title="M&O"/>
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
                <BorderWrap>
                    <h1>Employee Management Application</h1> 
                    <EmployeeFilter />
                    <hr />
                    <EmployeeTable/>
                    <hr />
                    <EmployeeAdd />
                </BorderWrap>
            </React.Fragment>
        )
    }
}

const contentNode = document.getElementById('content')
ReactDOM.render(<EmployeeList />, contentNode)