import { Button, Col, Container, Grid, Panel, Row } from "rsuite";
import { auth, database } from "../misc/firebase";
import { GoogleAuthProvider, signInWithPopup, getAdditionalUserInfo } from "firebase/auth";
import { ref, serverTimestamp, set} from "firebase/database";

const SignIn = () => {
  const onGoogleSignIn = async () => {
    const provider = new GoogleAuthProvider();
    await signInWithPopup(auth, provider)
      .then((result) => {
        const { isNewUser } = getAdditionalUserInfo(result);
        if (isNewUser) {
          const userProfileRef = ref(database, `/profiles/${result.user.uid}`);
          set(userProfileRef, {
            name: result.user.displayName,
            createdAt: serverTimestamp(),
          });
        }
        console.log("scucess");
      })
      .catch((err) => console.log(err.message));
  };
  return (
    <Container className="">
      <Grid className="mt-page">
        <Row>
          <Col xs={24} md={12}>
            <Panel>
              <div className="text-center">
                <h2>Welcome to Chat-App</h2>
                <p>Progressive chat platform for neophytes</p>
              </div>

              <div className="mt-3">
                <Button block appearance="primary" onClick={onGoogleSignIn}>
                  Continue with Google
                </Button>
              </div>
            </Panel>
          </Col>
        </Row>
      </Grid>
    </Container>
  );
};

export default SignIn;
