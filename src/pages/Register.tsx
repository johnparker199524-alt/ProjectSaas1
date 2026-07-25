import React, { useState } from 'react';
import { Container, Card, Form, Button, Alert } from 'react-bootstrap';
import { useAuth } from '../context/AuthContext';
import { useNavigate, useLocation, Link } from 'react-router-dom';

const Register: React.FC = () => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [error, setError] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false);

  const { signup } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  // Recuperiamo l'eventuale progetto selezionato dalla Home
  const selectedProject = location.state?.selectedProject || null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      setError('');
      setLoading(true);
      await signup(email, password);

      // Reindirizza alla dashboard passando lo stato del progetto selezionato
      navigate('/dashboard', {
        state: {
          selectedProject,
          feedback: 'Registrazione completata con successo!'
        }
      });
    } catch (err: any) {
      // FIX: usiamo err.message (oppure err per la stringa generica)
      setError('Errore durante la registrazione: ' + (err.message || 'Qualcosa è andato storto.'));
    } finally {
      setLoading(false);
    }
  };

  return (
    <Container className="d-flex align-items-center justify-content-center" style={{ minHeight: '80vh' }}>
      <Card style={{ maxWidth: '400px', width: '100%' }} className="p-4 shadow border-0">
        <Card.Body>
          <h2 className="text-center mb-4 fw-bold">Crea un Account</h2>

          {selectedProject && (
            <Alert variant="info" className="small">
              Stai creando un account per ordinare: <strong>{selectedProject}</strong>
            </Alert>
          )}

          {error && <Alert variant="danger">{error}</Alert>}

          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="email">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="password">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </Form.Group>

            <Button disabled={loading} className="w-100" type="submit" variant="primary">
              {loading ? 'Registrazione in corso...' : 'Registrati e Continua'}
            </Button>
          </Form>

          <div className="text-center mt-3 small text-muted">
            Hai già un account? <Link to="/login">Accedi</Link>
          </div>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default Register;