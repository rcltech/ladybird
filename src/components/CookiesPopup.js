import React from "react";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import Slide from "@material-ui/core/Slide";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export const CookiesPopup = ({ isOpen }) => {
  const [open, setOpen] = React.useState(isOpen);

  const handleDisagree = () => {
    alert(
      "We need your consent to provide our authentication services. You may contact RC Tech Club to find out more why this is important. You will now be redirected back to where you came from if possible."
    );
    if (sessionStorage.getItem("redirectTo") !== "") {
      const url =
        process.env.NODE_ENV === "development"
          ? `http://${sessionStorage.getItem("redirectTo")}`
          : `https://${sessionStorage.getItem("redirectTo")}`;
      window.location.replace(url);
    }
  };

  const handleAgree = () => {
    setOpen(false);
  };

  return (
    <div>
      <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        aria-labelledby="cookies-agreement"
        aria-describedby="cookies-agreement-description"
      >
        <DialogTitle id="cookies-agreement">
          Allow RC Tech to store cookies?
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="cookies-agreement-description">
            Let us store cookies in your browser so that you can enjoy a smooth
            personal experience logging into and using all of our applications.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleDisagree} color="primary">
            Disagree
          </Button>
          <Button onClick={handleAgree} color="primary">
            Agree
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};
