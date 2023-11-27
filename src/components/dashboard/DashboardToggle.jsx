import { Button, Drawer } from "rsuite";
import { useMediaQuery, useModelState } from "../../misc/custom-hooks";
import Dashboard from ".";
import { useCallback } from "react";
import { signOut } from "firebase/auth";
import { auth } from "../../misc/firebase";

const DashboardToggle = () => {
  const { isOpen, open, close } = useModelState();
  const drawerSize = useMediaQuery("(max-width: 992px)") ? "full" : "xs";

  const onSignOut = useCallback(() => {
    signOut(auth);

    close();
  }, [close]);

  return (
    <>
      <Button appearance="primary" onClick={open}>
        Dashboard
      </Button>
      <Drawer size={drawerSize} open={isOpen} onClose={close} placement="left">
        <Dashboard onSignOut={onSignOut}/>
      </Drawer>
    </>
  );
};

export default DashboardToggle;
