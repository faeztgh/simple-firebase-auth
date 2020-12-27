import React from "react";
import { useState } from "react";
import { Button, Card, Alert } from "react-bootstrap";
import { Link, useHistory } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";
const Dashboard = () => {
    const [error, setError] = useState("");
    const { currentUser, logout } = useAuth();
    const history = useHistory();
    async function handleLogout() {
        setError("");
        try {
            await logout();
            history.pushState("/login");
        } catch (err) {
            setError("failed to logout!");
        }
    }
    return (
        <>
            <Card>
                <Card.Body>
                    <h2 className="text-center mb-4">Profile</h2>
                    {error && <Alert variant="danger">{error}</Alert>}
                    <strong>Email: </strong>
                    {currentUser.email}
                    <Link
                        to="/update-profile"
                        className="btn btn-primary mt-3 w-100"
                    >
                        Update Profile
                    </Link>
                </Card.Body>
            </Card>
            <div className="w-100 text-center mt-2">
                <Button variant="link" onClick={handleLogout}>
                    Log Out
                </Button>
            </div>
        </>
    );
};

export default Dashboard;
