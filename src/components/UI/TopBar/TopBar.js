import React from 'react';

const topBar = () => {
  return (
    <div className='top-bar pt-1 pb-1 text-light'>
      <div className='container'>
        <div className='d-flex justify-content-between'>
          <div className='d-flex pt-2 pb-2'>
            <div className='d-flex align-item-center mr-3'>
              <i className='fas fa-phone-alt mr-2' />
              <small>No Phone # Yet!</small>
            </div>
            <div className='d-flex align-item-center'>
              <i className='fas fa-envelope mr-2' />
              <small>support@tko.pics</small>
            </div>
          </div>
          <div className='d-flex pt-2 pb-2'>
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default topBar;
