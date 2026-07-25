import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Card, Alert, Button, ListGroup, Spinner } from 'react-bootstrap';
import { useAuth } from '../context/AuthContext';
import { useLocation, useNavigate } from 'react-router-dom';
import { db } from '../firebase/firebaseConfig';
import { ref, push, set, onValue, query, orderByChild, equalTo } from 'firebase/database';
import { getDeveloperStats } from '../services/apiService';

interface Order {
  id: string;
  projectName: string;
  status: string;
  userId: string;
}

const Dashboard: React.FC = () => {
  const auth = useAuth();
  const { currentUser, logout } = auth as any;

  const location = useLocation();
  const navigate = useNavigate();

  const [feedback, setFeedback] = useState<string>(location.state?.feedback || '');
  const [orders, setOrders] = useState<Order[]>([]);
  const [apiData, setApiData] = useState<any[]>([]);
  const [loadingApi, setLoadingApi] = useState<boolean>(true);

  // 1. Invio del progetto selezionato su Realtime Database
  useEffect(() => {
    const selectedProject = location.state?.selectedProject;

    if (selectedProject && currentUser) {
      const saveOrder = async () => {
        try {
          // Crea un riferimento al nodo 'orders'
          const ordersRef = ref(db, 'orders');
          // Genera una nuova chiava univoca (push)
          const newOrderRef = push(ordersRef);

          // Salva il documento
          await set(newOrderRef, {
            userId: currentUser.uid,
            userEmail: currentUser.email,
            projectName: selectedProject,
            status: 'In Elaborazione',
            createdAt: new Date().toISOString()
          });

          setFeedback(`Richiesta inviata con successo per: ${selectedProject}!`);
        } catch (error) {
          console.error("Errore nel salvataggio dell'ordine:", error);
        }
      };
      saveOrder();
    }
  }, [location.state, currentUser]);

  // 2. Lettura in tempo reale degli ordini dell'utente
  useEffect(() => {
    if (!currentUser) return;

    const ordersRef = ref(db, 'orders');

    // Ascolta i dati in tempo reale
    const unsubscribe = onValue(ordersRef, (snapshot) => {
      const data = snapshot.val();
      if (data) {
        // Filtra solo gli ordini associati all'utente corrente
        const userOrders: Order[] = Object.keys(data)
          .map(key => ({
            id: key,
            ...data[key]
          }))
          .filter(order => order.userId === currentUser.uid);
        setOrders(userOrders);
      } else {
        setOrders([]);
      }
    });

    return () => unsubscribe();
  }, [currentUser]);

  // 3. Chiamata API REST Esterna
  useEffect(() => {
    getDeveloperStats()
      .then(data => {
        setApiData(data);
        setLoadingApi(false);
      })
      .catch(() => setLoadingApi(false));
  }, []);

  const handleLogout = async () => {
    await logout();
    navigate('/login');
  };

  return (
    <Container className="py-5">
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h2>Dashboard Utente</h2>
        <Button variant="outline-danger" onClick={handleLogout}>Logout</Button>
      </div>

      <p className="text-muted">Benvenuto/a, <strong>{currentUser?.email}</strong></p>

      {feedback && <Alert variant="success" dismissible onClose={() => setFeedback('')}>{feedback}</Alert>}

      <Row className="mt-4">
        <Col md={6} className="mb-4">
          <Card className="ux-night-card h-100 shadow-sm">            <Card.Header className="bg-primary text-white fw-bold">I Tuoi Servizi Ordinati</Card.Header>
            <Card.Body>
              {orders.length === 0 ? (
                <p className="text-muted">Non hai ancora richiesto nessun servizio.</p>
              ) : (
                <ListGroup variant="flush">
                  {orders.map((order) => (
                    <ListGroup.Item key={order.id} className="d-flex justify-content-between align-items-center py-3 ux-list-item">                      <div>
                      <strong>{order.projectName}</strong>
                    </div>
                      <span className="badge bg-warning text-dark">{order.status}</span>
                    </ListGroup.Item>
                  ))}
                </ListGroup>
              )}
            </Card.Body>
          </Card>
        </Col>

        <Col md={6} className="mb-4">
          <Card className="shadow-sm h-100">
            <Card.Header className="bg-dark text-white fw-bold">Live API Feed (Task in Lavorazione)</Card.Header>
            <Card.Body>
              {loadingApi ? (
                <div className="text-center py-3">
                  <Spinner animation="border" size="sm" /> Caricamento dati API...
                </div>
              ) : (
                <ListGroup variant="flush">
                  {apiData.map((task: any) => (
                    <ListGroup.Item key={task.id} className="small">
                      <i className={`bi ${task.completed ? 'bi-check-circle-fill text-success' : 'bi-clock text-secondary'} me-2`}></i>
                      {task.title}
                    </ListGroup.Item>
                  ))}
                </ListGroup>
              )}
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Dashboard;