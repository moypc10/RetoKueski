import { Container, Image, Card, Modal, Input, Checkbox, Button, Row, Text, Col, Spacer, NextUIProvider } from "@nextui-org/react";
import { SSRProvider } from 'react-aria';
import React from "react";
import { Mail } from "./Mail";
import { Password } from "./Password";

export default function App() {
  const [visible, setVisible] = React.useState(false);
  const handler = () => setVisible(true);
  const closeHandler = () => {
    setVisible(false);
    console.log("closed");
  };
  // Ejemplo json
  const derechos = [
    { key: "acceso", name: "Acceso" },
    { key: "rectificacion", name: "Rectificación" },
    { key: "consulta", name: "Consulta" },
    { key: "oposicion", name: "Oposición" },
  ];
  return (
    <NextUIProvider>
      <SSRProvider>
        <Container gap={3} xl>
          <Row gap={0}>
            <Col>
              <Card isHoverable="true" css={{ $$cardColor: 'white' }}>
                <Card.Body>
                  <Image
                    src={"./Kueski.png"}
                    width={300}
                    height={100}
                    alt={"title"}
                  />
                </Card.Body>
              </Card>
            </Col>
          </Row>
          <Row gap={1}>
            <Col>
              <Spacer y={5} />
            </Col>
          </Row>
          <Row gap={1}>
            <Col></Col>
            <Col>
              <Card isHoverable="true" css={{ $$cardColor: '#3694FF' }}>
                <Card.Body>
                  <Row>
                    <Col justify="center" align="center">
                      <Text h6 size={20} color="white" css={{ m: 15 }}>
                        Bienvenido a tu portal de Derechos Arco!
                      </Text>
                      <Button auto color="success" shadow onPress={handler}>
                        Iniciar sesion
                      </Button>
                      <Modal
                        closeButton
                        blur
                        aria-labelledby="modal-title"
                        open={visible}
                        onClose={closeHandler}
                      >
                        <Modal.Header>
                          <Text id="modal-title" b size={18}>
                            Login Operador
                          </Text>
                        </Modal.Header>
                        <Modal.Body>
                          <Input
                            clearable
                            bordered
                            fullWidth
                            color="primary"
                            size="lg"
                            placeholder="Email"
                            contentLeft={<Mail fill="currentColor" />}
                          />
                          <Input.Password
                            clearable
                            bordered
                            fullWidth
                            color="primary"
                            size="lg"
                            placeholder="Password"
                            hideToggle = "true"
                            contentLeft={<Password fill="currentColor" />}
                          />
                          <Row justify="space-between">
                            <Checkbox>
                              <Text size={14}>Remember me</Text>
                            </Checkbox>
                            <Text size={14}>Forgot password?</Text>
                          </Row>
                        </Modal.Body>
                        <Modal.Footer>
                          <Button auto flat color="error" onPress={closeHandler}>
                            Close
                          </Button>
                          <Button auto onPress={closeHandler}>
                            Sign in
                          </Button>
                        </Modal.Footer>
                      </Modal>
                      <Spacer y={1} />
                    </Col>
                  </Row>
                </Card.Body>
              </Card>
            </Col>
            <Col></Col>
          </Row>


        </Container>
      </SSRProvider>
    </NextUIProvider >
  );
}
