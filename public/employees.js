const employees = [{
  id: 1,
  name: 'Jose Pereda',
  ext: 1124,
  email: 'joselpereda@live.com',
  title: "Chief Tech Architect",
  dateHired: new Date('2005-08-28'),
  isEmployed: true
}, {
  id: 2,
  name: 'Sally Smith',
  ext: 1125,
  email: 'sallysmith@live.com',
  title: "Director of Sales",
  dateHired: new Date('2010-05-15'),
  isEmployed: true
}];
class BorderWrap extends React.Component {
  render() {
    const borderStyle = {
      border: "1px solid silver",
      padding: 6
    };
    return /*#__PURE__*/React.createElement("div", {
      style: borderStyle
    }, this.props.children);
  }
}
class EmployeeFilter extends React.Component {
  render() {
    return /*#__PURE__*/React.createElement("div", null, "This is a placeholder for the employee filter.");
  }
}
class EmployeeTable extends React.Component {
  render() {
    const employeeRows = employees.map(employee => /*#__PURE__*/React.createElement(EmployeeRow, {
      key: employee.id,
      employee: employee
    }));
    return /*#__PURE__*/React.createElement("table", {
      className: "bordered-table"
    }, /*#__PURE__*/React.createElement("thead", null, /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("th", null, "ID"), /*#__PURE__*/React.createElement("th", null, "Name"), /*#__PURE__*/React.createElement("th", null, "Extension"), /*#__PURE__*/React.createElement("th", null, "Email"), /*#__PURE__*/React.createElement("th", null, "Title"), /*#__PURE__*/React.createElement("th", null, "Date Hired"), /*#__PURE__*/React.createElement("th", null, "Currently Employed?"))), /*#__PURE__*/React.createElement("tbody", null, employeeRows));
  }
}
class EmployeeRow extends React.Component {
  render() {
    const employee = this.props.employee;
    return /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("td", null, employee.id), /*#__PURE__*/React.createElement("td", null, employee.name), /*#__PURE__*/React.createElement("td", null, employee.ext), /*#__PURE__*/React.createElement("td", null, employee.email), /*#__PURE__*/React.createElement("td", null, employee.title), /*#__PURE__*/React.createElement("td", null, employee.dateHired.toDateString()), /*#__PURE__*/React.createElement("td", null, employee.isEmployed ? 'Yes' : 'No'));
  }
}
class EmployeeAdd extends React.Component {
  render() {
    return /*#__PURE__*/React.createElement("div", null, "This is a placeholder for a form to add a new employee.");
  }
}
class EmployeeList extends React.Component {
  render() {
    return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(BorderWrap, null, /*#__PURE__*/React.createElement("h1", null, "Employee Management Application"), /*#__PURE__*/React.createElement(EmployeeFilter, null), /*#__PURE__*/React.createElement("hr", null), /*#__PURE__*/React.createElement(EmployeeTable, null), /*#__PURE__*/React.createElement("hr", null), /*#__PURE__*/React.createElement(EmployeeAdd, null)));
  }
}
ReactDOM.render( /*#__PURE__*/React.createElement(React.StrictMode, null, /*#__PURE__*/React.createElement(EmployeeList, null)), document.getElementById('content'));