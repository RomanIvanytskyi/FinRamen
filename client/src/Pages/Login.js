import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Input,
  Checkbox,
  Button,
} from "@material-tailwind/react";
import Page from "../Components/login/page";
import Container from "../Components/login/container";
import { useFormik } from "formik";
import { loginApi } from "../api/api";
import { connect } from "react-redux";
import { login } from ".././store/reducers/reducer";

function Login(props) {
  const formik = useFormik({
    initialValues: {
      password: "",
      email: "",
    },
    onSubmit: (values) => {
      loginApi({ ...values }).then((res) => {});
    },
  });
  return (
    <Page>
      <Container>
        <Card className="w-96">
          <CardHeader
            variant="gradient"
            className="mb-4
            bg-indigo-500/70 grid h-28 place-items-center"
          >
            <Typography
              variant="h2"
              color="rgb(42,45,39)"
              style={{ marginBottom: 0 }}
            >
              Login
            </Typography>
          </CardHeader>
          <form onSubmit={formik.handleSubmit} noValidate>
            <CardBody>
              <div className="mb-12 px-4 bg-bb">
                <Input
                  onChange={formik.handleChange}
                  value={formik.values.email}
                  variant="outlined"
                  margin="normal"
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                />
              </div>
              <div className="mb-8 px-4">
                <Input
                  onChange={formik.handleChange}
                  value={formik.values.password}
                  variant="outlined"
                  margin="normal"
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="current-password"
                />
              </div>
              <div className="mb-4 px-4">
                <Checkbox
                  backgroundColor="black"
                  label="Remember Me"
                  id="remember"
                />
              </div>
            </CardBody>
            <CardFooter>
              <div className="flex justify-center bg-bb">
                <Button
                  className=" mb-4 bg-indigo-500/70 hover:bg-cyan-600"
                  fullWidth={true}
                  type="submit"
                  
                >
                  Sign In
                </Button>
              </div>
              <Typography variant="small" className="mt-6 flex justify-center">
                Don't have an account?
                <Typography
                  as="a"
                  href="#signup"
                  variant="small"
                  color="blue"
                  className="ml-1 font-bold"
                  onClick={()=>{props.setAccount(false)}}
                >
                  Sign up
                </Typography>
              </Typography>
            </CardFooter>
          </form>
        </Card>
      </Container>
    </Page>
  );
}
const mapStateToProps = (state, ownProps) => ({
  ...state,
});

export default connect(mapStateToProps, { login })(Login);
