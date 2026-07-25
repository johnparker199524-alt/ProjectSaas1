import React from 'react';
import { Navbar, Nav, Container, Button } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const NavigationBar: React.FC = () => {
  const { currentUser, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await logout();
      navigate('/login');
    } catch (error) {
      console.error("Errore durante il logout:", error);
    }
  };

  return (
    <Navbar
      expand="lg"
      className="border-bottom sticky-top py-3"
      style={{
        backgroundColor: 'rgba(11, 15, 25, 0.85)',
        backdropFilter: 'blur(10px)',
        borderColor: 'var(--night-border)'
      
      }}
    >      <Container>
        <Navbar.Brand as={Link} to="/" className="fw-bold text-white d-flex align-items-center gap-2">
          <i className="bi bi-code-slash text-primary fs-4"></i>
          <span>DevSaaS <i style={{color:'orangered'}}>John</i> </span>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto align-items-center " >
            <Nav.Link as={Link} to="/">Home</Nav.Link>

            {currentUser ? (
              <>
                <Nav.Link as={Link} to="/dashboard">Dashboard</Nav.Link>
                <Button
                  variant="outline-light"
                  size="sm"
                  className="ms-2"
                  onClick={handleLogout}
                >
                  Logout
                </Button>
              </>
            ) : (
              <>
                <Nav.Link as={Link} to="/login">Login</Nav.Link>
                <Nav.Link as={Link} to="/register" className="btn btn-primary text-white ms-2 px-3">
                  Registrati
                </Nav.Link>
              </>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavigationBar;