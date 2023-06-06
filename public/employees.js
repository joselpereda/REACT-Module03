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
    const rowStyle = {
      border: "1px solid silver",
      padding: 4
    };
    return /*#__PURE__*/React.createElement("table", {
      style: {
        width: "100%",
        borderCollapse: "collapse"
      }
    }, /*#__PURE__*/React.createElement("thead", null, /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("th", {
      style: rowStyle
    }, "Name"), /*#__PURE__*/React.createElement("th", {
      style: rowStyle
    }, "Extension"), /*#__PURE__*/React.createElement("th", {
      style: rowStyle
    }, "Email"), /*#__PURE__*/React.createElement("th", {
      style: rowStyle
    }, "Title"))), /*#__PURE__*/React.createElement("tbody", null, /*#__PURE__*/React.createElement(EmployeeRow, {
      rowstyle: rowStyle,
      employee_name: "Jose Pereda",
      employee_ext: 5541,
      employee_email: "joselpereda@live.com",
      employee_title: "Chief Tech Architect"
    }), /*#__PURE__*/React.createElement(EmployeeRow, {
      rowstyle: rowStyle,
      employee_name: "Tricia Banks",
      employee_ext: 4553,
      employee_email: "sallybanks@live.com",
      employee_title: "M&O"
    })));
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
    return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(BorderWrap, null, /*#__PURE__*/React.createElement("h1", null, "Employee Management Application"), /*#__PURE__*/React.createElement(EmployeeFilter, null), /*#__PURE__*/React.createElement("hr", null), /*#__PURE__*/React.createElement(EmployeeTable, null), /*#__PURE__*/React.createElement("hr", null), /*#__PURE__*/React.createElement(EmployeeAdd, null)));
  }
}
const contentNode = document.getElementById('content');
ReactDOM.render( /*#__PURE__*/React.createElement(EmployeeList, null), contentNode);