import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchEmployees } from '../../actions/index';
import './fetchEmployees.css';

const FetchEmployees = (props) => {
  useEffect(() => {
    props.fetchEmployees();
  }, []);

  const displayAllData = (singleEmployee) => {
    return (
      <div className='display-all-data'>
        <div>{singleEmployee.name}</div>
        <div>{singleEmployee.email}</div>
      </div>
    );
  };

  // console.log('props.employees', props.employees);
  return (
    <div>
      {props.employees != [] ? (
        props.employees.map((singleEmployee) => (
          <div key={singleEmployee._id}>{displayAllData(singleEmployee)}</div>
        ))
      ) : (
        <div></div>
      )}
    </div>
  );
};

const mapStateToProps = (reduxState) => ({
  employees: reduxState.employee.all,
});

export default connect(mapStateToProps, { fetchEmployees })(FetchEmployees);
