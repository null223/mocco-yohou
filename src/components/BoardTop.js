import { useState } from 'react'
import styled, { css } from 'styled-components'
import { Tabs, Tab, Box } from '@material-ui/core'

// eslint-disable-next-line import/no-anonymous-default-export
export default ({ user, isFocus, members, setFocus, fetchMembers, appHeight }) => {
  const [tabValue, setTabValue] = useState(0);

  const dummy_img  = "https://pbs.twimg.com/profile_images/1191258561503887362/9_N_db3M_x96.jpg"

  const TabPanel = ({ children, value, index, ...other }) => {
    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`simple-tabpanel-${index}`}
        aria-labelledby={`simple-tab-${index}`}
        {...other}
      >
        {value === index && (
          <Box sx={{ p: 3 }}>
            {children}
          </Box>
        )}
      </div>
    );
  }



  const ScheduleItem = ({day, place, members}) => (
    <StScheduleItem>
      <h3>
        {day === 0 && "今日"}
        {day === 1 && "明日"}
        {day === 2 && "明後日"}
      </h3>
      <div className="member-list">
        <MemberIcon img={dummy_img} status={0} />
        <MemberIcon img={dummy_img} status={1} />
        <MemberIcon img={dummy_img} status={2} />
        <MemberIcon img={dummy_img} status={2} />
        <MemberIcon img={dummy_img} status={2} />
        <MemberIcon img={dummy_img} status={2} />
        <MemberIcon img={dummy_img} status={2} />
        <MemberIcon img={dummy_img} status={2} />
        <MemberIcon img={dummy_img} status={2} />
        <MemberIcon img={dummy_img} status={2} />
        <MemberIcon img={dummy_img} status={2} />
        <MemberIcon img={dummy_img} status={2} />
        <MemberIcon img={dummy_img} status={2} />
        <MemberIcon img={dummy_img} status={2} />
        <MemberIcon img={dummy_img} status={2} />
        <MemberIcon img={dummy_img} status={2} />
        <MemberIcon img={dummy_img} status={2} />
        <MemberIcon img={dummy_img} status={2} />
      </div>
      <div className="join">Join</div>
    </StScheduleItem>
  )

  const Schedules = ({children}) => (
    <>
    {children}
    </>
  );

  const statusType = (status) => {
    switch (status) {
      case 0:
        return "busy";
      case 1:
        return "working";
      case 2:
        return "friendly";
      default:
        return "friendly";
    }
  }

  const MemberIcon = ({img, status, onClick}) => (
    <StMemberIcon onClick={onClick}>
      <img src={img} alt=""/>
      <div className={`state-dot ${statusType(status)}`} />
    </StMemberIcon>
  )



  const UserIcon = ({img, onClick}) => (
    <StUserIcon onClick={onClick}>
      <img src={img} alt="" />
    </StUserIcon>
  ) 

  return (
    <StWrapper onMouseDown={() => {if (isFocus) setFocus(false)}}>
      <UserIcon img={dummy_img} />
      <Tabs
        value={tabValue}
        onChange={(e, val) => setTabValue(val)}
        aria-label="mocco tab"
      >
        <Tab label="姫路" />
        <Tab label="加古川" />
      </Tabs>
      <div className="tab-root" style={{height: appHeight - 210 - (isFocus ? 40 : 0)}}>
        <TabPanel value={tabValue} index={0}>
          <ScheduleItem place="himeji" day={0} />
          <ScheduleItem place="himeji" day={1} />
          <ScheduleItem place="himeji" day={2} />
        </TabPanel>
        <TabPanel value={tabValue} index={1}>
          <ScheduleItem place="kakogawa" day={0} />
          <ScheduleItem place="kakogawa" day={1} />
          <ScheduleItem place="kakogawa" day={2} />
        </TabPanel>
      </div>
    </StWrapper>
  )
}

const StWrapper = styled.div`
  position: relative;
  border-radius: .5em;
  box-shadow: 2px 2px 9px -3px rgba(0, 0, 0, 0.4);
  border-radius: .5rem;
  padding: 10px;
  margin-bottom: 1rem;
  .MuiTab-root {
    min-height: 52px;
  }
  .tab-root {
    transition: height .4s ease;
    overflow-y: scroll;
  }
`

const StUserIcon = styled.div`
  position: absolute;
  top: 20px;
  right: 20px;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  overflow: hidden;
  box-shadow: 2px 2px 9px -1px rgba(0, 0, 0, .4);
  img {
    width: 100%;
  }
`

const StScheduleItem = styled.div`
  position: relative;
  border-radius: .5rem;
  border: 2px solid #000;
  min-height: 130px;
  margin-bottom: 1.5em;
  margin-top: .75em;
  padding: 20px 50px 10px 20px;
  h3 {
    position: absolute;
    top: -.75rem;
    left: 50%;
    transform: translateX(-50%);
    background-color: white;
    padding: 0 10px;
  }
  .member-list {
    display: flex;
    flex-wrap: wrap;
  }
  .join {
    position: absolute;
    bottom: 10px;
    right: 10px;
    width: 40px;
    height: 40px;
    padding: 11px 8px;
    border-radius: 50%;
    font-size: .75rem;
    background-color: orange;
    color: #fff;
  }
`

const StMemberIcon = styled.div`
  position: relative;
  margin-right: .75rem;
  margin-bottom: .75rem;
  width: 45px;
  height: 45px;
  border-radius: 50%;
  border: 2px solid #333;
  cursor: pointer;
  img {
    width: 100%;
    border: 1px solid #fff;
    border-radius: 50%;
  }
  .state-dot {
    position: absolute;
    bottom: -2px;
    right: -2px;
    width: 12px;
    height: 12px;
    border-radius: 50%;
    border: 1px solid #333;
    &.busy {
      background-color: red;
    }
    &.working {
      background-color: orange;
    }
    &.friendly {
      background-color: lightgreen;
    }
  }
`
