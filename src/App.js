import { Container } from "react-bootstrap";
import {
    Dashboard,
    Signup,
    Login,
    PrivateRoute,
    ForgotPassword,
    UpdateProfile,
} from "./components";
import { AuthProvider } from "./components/contexts/AuthContext";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
function App() {
    return (
        <>
            <Router>
                <AuthProvider>
                    <Container
                        className="d-flex align-items-center justify-content-center"
                        style={{ minHeight: "100vh" }}
                    >
                        <div className="w-100" style={{ maxWidth: "400px" }}>
                            <Switch>
                                <PrivateRoute
                                    exact
                                    path="/"
                                    component={Dashboard}
                                />
                                <Route
                                    path="/signup"
                                    render={(props) => <Signup />}
                                />
                                <Route
                                    path="/login"
                                    render={(props) => <Login />}
                                />
                                <Route
                                    path="/forgot-password"
                                    component={ForgotPassword}
                                />
                                <PrivateRoute
                                    path="/update-profile"
                                    component={UpdateProfile}
                                />
                            </Switch>
                        </div>
                    </Container>
                </AuthProvider>
            </Router>
        </>
    );
}

export default App;
