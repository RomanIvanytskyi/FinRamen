import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Input,
  Button,
} from "@material-tailwind/react";
import Page from "../Components/login/page";
import Container from "../Components/login/container";
import { useFormik } from "formik";
import { registerApi, meAPI } from "../api/api";
import { login } from ".././store/reducers/reducer";
import { connect } from "react-redux";

const Register = (props) => {
  const formik = useFormik({
    initialValues: {
      name: "",
      password: "",
      email: "",
    },
    onSubmit: (values) => {
      registerApi({ ...values }).then((response) => {
        localStorage.setItem("token", response.data.token);
        meAPI(response.data.token).then((res) => {
        if(res.data.user){
          props.login(res.data.user);
        }
        });
      });
    },
  });
  return (
    <Page>
      <Container>
        <Card>
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
              Register
            </Typography>
          </CardHeader>
          <form onSubmit={formik.handleSubmit} noValidate>
            <CardBody>
              <div className="mb-10 px-4">
                <Input
                  onChange={formik.handleChange}
                  value={formik.values.name}
                  variant="outlined"
                  margin="normal"
                  required
                  fullWidth
                  id="name"
                  label="User Name"
                  name="name"
                  autoComplete="name"
                />
              </div>
              <div className="mb-10 px-4">
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
              <div className="mb-4 px-4">
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
            </CardBody>
            <CardFooter>
              <div className="flex justify-center">
                <Button
                  className=" mb-4 bg-indigo-500/70 hover:bg-cyan-600"
                  fullWidth={true}
                  type="submit"
                >
                  Sign Up
                </Button>
              </div>
              <Typography variant="small" className="mt-6 flex justify-center">
                Have an account?
                <Typography
                  as="a"
                  variant="small"
                  color="blue"
                  className="ml-1 font-bold"
                  onClick={() => {
                    props.setAccount(true);
                  }}
                >
                  Sign in
                </Typography>
              </Typography>
            </CardFooter>
          </form>
        </Card>
      </Container>
    </Page>
  );
};
const mapStateToProps = (state, ownProps) => ({
  ...state,
});

export default connect(mapStateToProps, { login })(Register);
