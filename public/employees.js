const employees = [{
  id: 1,
  name: 'Jose Pereda',
  ext: 1124,
  email: 'joselpereda@live.com',
  title: "Chief Tech Architect"
}, {
  id: 2,
  name: 'Sally Smith',
  ext: 1125,
  email: 'sallysmith@live.com',
  title: "Director of Sales"
}];
class EmployeeFilter extends React.Component {
  render() {
    return /*#__PURE__*/React.createElement("div", null, "This is a placeholder for the employee filter.");
  }
}
class EmployeeTable extends React.Component {
  render() {
    const employeeRows = employees.map(employee => /*#__PURE__*/React.createElement(EmployeeRow, {
      employee: employee
    }));
    return /*#__PURE__*/React.createElement("table", {
      style: "bordered-table"
    }, /*#__PURE__*/React.createElement("thead", null, /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("th", null, "Name"), /*#__PURE__*/React.createElement("th", null, "Extension"), /*#__PURE__*/React.createElement("th", null, "Email"), /*#__PURE__*/React.createElement("th", null, "Title"))), /*#__PURE__*/React.createElement("tbody", null, EmployeeRows));
  }
}
class EmployeeRow extends React.Component {
  render() {
    const style = this.props.rowstyle;
    return /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("td", {
      style: style
    }, this.props.employee_name), /*#__PURE__*/React.createElement("td", {
      style: style
    }, this.props.employee_ext), /*#__PURE__*/React.createElement("td", {
      style: style
    }, this.props.employee_email), /*#__PURE__*/React.createElement("td", {
      style: style
    }, this.props.employee_title));
  }
}
class EmployeeAdd extends React.Component {
  render() {
    return /*#__PURE__*/React.createElement("div", null, "This is a placeholder for a form to add a new employee.");
  }
}
class EmployeeList extends React.Component {
  render() {
    return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("h1", null, "Employee Management Application"), /*#__PURE__*/React.createElement(EmployeeFilter, null), /*#__PURE__*/React.createElement("hr", null), /*#__PURE__*/React.createElement(EmployeeTable, null), /*#__PURE__*/React.createElement("hr", null), /*#__PURE__*/React.createElement(EmployeeAdd, null));
  }
}
const contentNode = document.getElementById('content');
ReactDOM.render( /*#__PURE__*/React.createElement(EmployeeList, null), contentNode);