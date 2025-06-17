import { Modal, Button, Form, Row, Col, InputGroup } from "react-bootstrap";
import React, { useState } from "react";

interface MReservarProps {
    show: boolean;
    handleClose: () => void;
}

const MReservar: React.FC<MReservarProps> = ({ show, handleClose }) => {
    const [passengers, setPassengers] = useState<number>(2);
    const [fecha, setFecha] = useState<string>("2024-05-23");
    const [hora, setHora] = useState<string>("09:00");
    const pricePerPerson = 5000;

    const handlePassengerChange = (delta: number) => {
        setPassengers((prev) => Math.max(1, prev + delta));
    };

    const handleAddToCart = () => {
        alert(
            `📝 Reserva:\nFecha: ${fecha}\nHora: ${hora}\nPasajeros: ${passengers}\nTotal: MXN $${(
                pricePerPerson * passengers
            ).toLocaleString()}`
        );
        handleClose(); 
    };

    const totalPrice = pricePerPerson * passengers;

    return (
        <Modal show={show} onHide={handleClose} size="lg" centered>
            <Modal.Header closeButton></Modal.Header>
            <Modal.Body>
                <h1 className="fw-bold display-5">Reservar transporte</h1>
                <Row>
                    <Col md={6}>
                        <Form>
                            <Form.Group className="mb-2">
                                <Form.Label>Tipo de viaje</Form.Label>
                                <Button
                                    className="d-block mt-2"
                                    variant="secondary"
                                    size="lg"
                                    disabled
                                >
                                    Redondo
                                </Button>
                            </Form.Group>

                            <Form.Group className="mb-3">
                                <Form.Label>Desde</Form.Label>
                                <Form.Control
                                    value="Aeropuerto Internacional de Cancún"
                                    disabled
                                />
                            </Form.Group>

                            <Form.Group className="mb-3">
                                <Form.Label>Hacia</Form.Label>
                                <Form.Control value="Hotel Nickelodeon Riviera Maya" disabled />
                            </Form.Group>

                            <Row>
                                <Col>
                                    <Form.Group className="mb-3">
                                        <Form.Label>Fecha</Form.Label>
                                        <Form.Control
                                            type="date"
                                            value={fecha}
                                            onChange={(e) => setFecha(e.target.value)}
                                        />
                                    </Form.Group>
                                </Col>
                                <Col>
                                    <Form.Group className="mb-3">
                                        <Form.Label>Horario</Form.Label>
                                        <Form.Control
                                            type="time"
                                            value={hora}
                                            onChange={(e) => setHora(e.target.value)}
                                        />
                                    </Form.Group>
                                </Col>
                            </Row>

                            <Form.Group className="mb-3">
                                <Form.Label>¿Cuántos pasajeros?</Form.Label>
                                <InputGroup>
                                    <Button
                                        variant="outline-secondary"
                                        onClick={() => handlePassengerChange(-1)}
                                    >
                                        -
                                    </Button>
                                    <Form.Control
                                        value={passengers}
                                        readOnly
                                        className="text-center"
                                    />
                                    <Button
                                        variant="outline-secondary"
                                        onClick={() => handlePassengerChange(1)}
                                    >
                                        +
                                    </Button>
                                </InputGroup>
                                <small className="text-muted">
                                    Precio individual: MXN ${pricePerPerson.toLocaleString()}
                                </small>
                            </Form.Group>
                        </Form>
                    </Col>

                    <Col md={6}>
                        <div className="border rounded p-3">
                            <h5>Vehículo Standard Buss Lorem Ipsum</h5>
                            <Button variant="dark" size="lg">
                                Compartido
                            </Button>
                            <img
                                src="/public/0cbc0bab0aacbb70773e6a196f630d9e97aefd7d.png"
                                alt="Vehículo"
                                className="img-fluid rounded mb-2"
                            />
                            <div className="d-flex flex-wrap gap-3 small mb-3">
                                <div
                                    className="d-flex align-items-center gap-2"
                                    style={{ width: "45%" }}
                                >
                                    <span>👥</span> <span>4/10 Personas</span>
                                </div>
                                <div
                                    className="d-flex align-items-center gap-2"
                                    style={{ width: "45%" }}
                                >
                                    <span>🧳</span> <span>2 Maletas</span>
                                </div>
                                <div
                                    className="d-flex align-items-center gap-2"
                                    style={{ width: "45%" }}
                                >
                                    <span>🔌</span> <span>Cargador</span>
                                </div>
                                <div
                                    className="d-flex align-items-center gap-2"
                                    style={{ width: "45%" }}
                                >
                                    <span>❄️</span> <span>Aire acondicionado</span>
                                </div>
                                <div
                                    className="d-flex align-items-center gap-2"
                                    style={{ width: "45%" }}
                                >
                                    <span>🛡️</span> <span>Seguro de viaje</span>
                                </div>
                                <div
                                    className="d-flex align-items-center gap-2"
                                    style={{ width: "45%" }}
                                >
                                    <span>🪑</span> <span>Silla para bebés</span>
                                </div>
                            </div>

                            <div className="bg-light p-2 border rounded small text-success">
                                El precio total se calcula sumando el costo individual de cada
                                pasajero.
                            </div>
                        </div>
                    </Col>
                </Row>
                <hr />
                <h5 className="text-end">
                    Total: <strong>MXN ${totalPrice.toLocaleString()}</strong>
                </h5>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="primary" onClick={handleAddToCart}>
                    Agregar al carrito
                </Button>
            </Modal.Footer>
            <div className="text-center mb-2">
                <a href="#">Políticas de cancelación</a>
            </div>
        </Modal>
    );
};

export default MReservar;
