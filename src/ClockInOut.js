import React, { useEffect } from 'react';
import { useRef, useDispatch, useSelector } from 'react-redux';
import { Button } from 'primereact/button';
import { Card } from 'primereact/card';
import { Divider } from 'primereact/divider';
import { Message } from 'primereact/message';
import { ProgressBar } from 'primereact/progressbar';
import { Toast } from 'primereact/toast';
import { clockIn, clockOut } from '../actions/clockInOutActions';
import { getUserFullName } from '../utils/helpers';

const ClockInOut = () => {
  const dispatch = useDispatch();
  const clockedInUsers = useSelector(state => state.clockInOut.clockedInUsers);
  const currentUser = useSelector(state => state.clockInOut.currentUser);
  const toast = useRef(null);

  useEffect(() => {
    if (currentUser) {
      const fullName = getUserFullName(currentUser);
      toast.current.show({
        severity: 'info',
        summary: 'You are currently clocked in',
        detail: fullName,
        life: 3000
      });
    }
  }, [currentUser]);

  const handleClockInOut = () => {
    if (currentUser) {
      dispatch(clockOut(currentUser));
      const fullName = getUserFullName(currentUser);
      const message = `You have clocked out, ${fullName}`;
      toast.current.show({ severity: 'success', summary: message, life: 3000 });
    } else {
      dispatch(clockIn());
      toast.current.show({ severity: 'success', summary: 'You have clocked in', life: 3000 });
    }
  };

  const renderUserCards = () => {
    if (clockedInUsers.length === 0) {
      return <Message severity="info" text="No users are currently clocked in." />;
    }

    return clockedInUsers.map(user => (
      <Card key={user.id} className="p-mb-3">
        <div className="p-d-flex p-jc-between">
          <div>
            <h3>{getUserFullName(user)}</h3>
            <small>{user.timestamp}</small>
          </div>
          <Button icon="pi pi-times" className="p-button-danger p-ml-auto" onClick={() => dispatch(clockOut(user))} />
        </div>
        <ProgressBar value={user.elapsedTime} showValue={false} />
      </Card>
    ));
  };

  return (
    <div className="p-d-flex p-flex-column p-jc-center p-ai-center">
      <Toast ref={toast} />
      <h1 className="p-mb-3">{currentUser ? 'Clock Out' : 'Clock In'}</h1>
      <Button label={currentUser ? 'Clock Out' : 'Clock In'} className="p-button-lg" onClick={handleClockInOut} />
      <Divider className="p-mt-3 p-mb-3" />
      <h1 className="p-mb-3">Currently Clocked In</h1>
      {renderUserCards()}
    </div>
  );
};

export default ClockInOut;
