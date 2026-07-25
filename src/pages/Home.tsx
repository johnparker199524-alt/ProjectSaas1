import React from 'react';
import { Container, Row, Col, Card, Button, Badge } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { Project, SAMPLE_PROJECTS } from '../models/ProjectModel';
import { useAuth } from '../context/AuthContext';

const Home: React.FC = () => {
  const navigate = useNavigate();
  const { currentUser } = useAuth();

  // projectTitle è di tipo 'string' perché dall'onClick viene passato project.title
  const handleSelectProject = (projectTitle: string) => {
    if (!currentUser) {
      // Inoltra alla registrazione portando l'informazione del servizio scelto
      navigate('/register', { state: { selectedProject: projectTitle } });
    } else {
      // Se è già loggato, va direttamente in Dashboard
      navigate('/dashboard', { state: { selectedProject: projectTitle } });
    }
  };

  return (
    <Container className="py-5">
      {/* Hero Section */}
      <div className="text-center mb-5">
        <h1 className="fw-bold display-4 text-white mb-3">Soluzioni Web & Development</h1>
        <p className="text-muted lead mx-auto" style={{ maxWidth: '600px' }}>
          Scegli il servizio ideale per il tuo prossimo progetto digitale con la nostra infrastruttura SaaS integrata.
        </p>
      </div>

      {/* Tecnologie */}
      <section className="mb-5">
        <h3 className="text-center mb-4">Tech Stack & Competenze</h3>
        <div className="d-flex justify-content-center gap-2 flex-wrap">
          {["React", "TypeScript", "Bootstrap 5", "Firebase", "PHP / Laravel", "REST API", "Git & Security"].map((tech: string, index: number) => (
            <Badge key={index} bg="dark" className="p-3 fs-6">{tech}</Badge>
          ))}
        </div>
      </section>

      {/* Progetti e Servizi */}
      <section>
        <h3 className="text-center mb-4">Servizi & Soluzioni Realizzabili</h3>
        <Row>
          {SAMPLE_PROJECTS.map((project: Project) => (
            <Col md={4} key={project.id} className="mb-4">
              <Card className="h-100 ux-night-card ux-night-card-hover p-3 text-center">
                {/*  */}
                {project.img && (
                  <div style={{ height: '200px', overflow: 'hidden' }}>
                    <Card.Img
                      variant="top"
                      src={`/${project.img}`}
                      alt={project.title}
                      style={{
                        objectFit: 'cover',
                        height: '100%',
                        width: '100%'
                      }}
                    />
                  </div>
                )}
                <Card.Body className="d-flex flex-column">
                  <Card.Title className="fw-bold" style={{ color: 'chocolate' }}>{project.title}</Card.Title>
                  <Card.Text className="text-muted mb-4 opacity-90">{project.description}</Card.Text>

                  <div className="mb-3">
                    {project.tags.map((tag: string, i: number) => (
                      <Badge bg="secondary" className="me-1" key={i}>{tag}</Badge>
                    ))}
                  </div>

                  <div className="mt-auto">
                    <p className="small text-muted mb-2">Tempo stimato: ~{project.estimatedDays} giorni</p>
                    <Button
                      variant="primary"
                      size="lg"
                      className="w-100 rounded-pill fw-semibold shadow"
                      onClick={() => handleSelectProject(project.title)}
                    >
                      Richiedi Questo Servizio
                    </Button>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </section>
    </Container>
  );
};

export default Home;