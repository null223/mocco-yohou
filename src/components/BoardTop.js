import { useState } from 'react'
import styled, { css } from 'styled-components'
import { Tabs, Tab, Box } from '@material-ui/core'

// eslint-disable-next-line import/no-anonymous-default-export
export default ({ appHeight }) => {
  const [tabValue, setTabValue] = useState(0);

  

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

  const ScheduleItem = ({day, place}) => (
    <StScheduleItem>
      <h3>
        {day === 0 && "今日"}
        {day === 1 && "明日"}
        {day === 2 && "明後日"}
      </h3>
      <div className="member-list">

      </div>
      <div className="join">Join</div>
    </StScheduleItem>
  )

  const Schedules = ({children}) => (
    <>
    {children}
    </>
  );



  const UserIcon = ({img = "https://pbs.twimg.com/profile_images/1191258561503887362/9_N_db3M_x96.jpg", onClick}) => (
    <StUserIcon onClick={onClick}>
      <img src={img} alt="" />
    </StUserIcon>
  ) 

  return (
    <StWrapper onMouseDown={() => console.log("touched!")}>
      <UserIcon />
      <Tabs
        value={tabValue}
        onChange={(e, val) => setTabValue(val)}
        aria-label="mocco tab"
      >
        <Tab label="姫路" />
        <Tab label="加古川" />
      </Tabs>
      <div className="tab-root" style={{height: appHeight - 210}}>
        <TabPanel value={tabValue} index={0}>
          <Schedules>
            <ScheduleItem place="himeji" day={0} />
            <ScheduleItem place="himeji" day={1} />
            <ScheduleItem place="himeji" day={2} />
          </Schedules>
        </TabPanel>
        <TabPanel value={tabValue} index={1}>
          <Schedules>
            <ScheduleItem place="kakogawa" day={0} />
            <ScheduleItem place="kakogawa" day={1} />
            <ScheduleItem place="kakogawa" day={2} />
          </Schedules>
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
    // height: 600px;
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
  padding: 10px 20px;
  h3 {
    position: absolute;
    top: -.75rem;
    left: 50%;
    transform: translateX(-50%);
    background-color: white;
    padding: 0 10px;
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
