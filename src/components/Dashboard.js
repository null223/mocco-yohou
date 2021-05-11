import { Button } from '@material-ui/core'


// eslint-disable-next-line import/no-anonymous-default-export
export default ({user, logoutUser}) => (
    <div>
      <Button
        color="primary"
        variant="contained"
        onClick={logoutUser}
      >ログアウト</Button>
    </div>
);