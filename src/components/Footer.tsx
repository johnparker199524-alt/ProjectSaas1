import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <footer className="text-center py-4 mt-auto w-100 border-top" style={{ borderColor: 'var(--night-border)', backgroundColor: 'var(--night-bg)' }}>      <Container>
      <Row className="gy-3 align-items-center">
        {/* Logo e Descrizione */}
        <Col md={5}>
          <h5 className="fw-bold text-primary mb-1">
            <i className="bi bi-code-slash me-2"></i>DevSaaS Portfolio
          </h5>
          <p className="small text-muted mb-0">
            Sviluppo soluzioni web moderne, API e architetture Full-Stack su misura con React, TypeScript e Firebase.
          </p>
        </Col>

        {/* Link Rapidi */}
        <Col md={4} className="text-md-center">
          <ul className="list-inline mb-0 small">
            <li className="list-inline-item me-3">
              <Link to="/" className="text-decoration-none text hover-light">
                Home
              </Link>
            </li>
            <li className="list-inline-item me-3">
              <Link to="/login" className="text-decoration-none text hover-light">
                Accedi
              </Link>
            </li>
            <li className="list-inline-item">
              <Link to="/register" className="text-decoration-none text hover-light">
                Registrati
              </Link>
            </li>
          </ul>
        </Col>

        {/* Copyright & Social */}
        <Col md={3} className="text-md-end">
          <div className="small text-primary">
            &copy; {new Date().getFullYear()} <i style={{color:'orangered'}}> John Moise </i> DevSaaS Pro. Tutti i diritti riservati.
          </div>
        </Col>
      </Row>
    </Container>
    </footer>
  );
};

export default Footer;