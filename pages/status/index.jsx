import { Container, Image, Card, Row, Text, Col, Link, Spacer, Table, Button, NextUIProvider, Dropdown } from "@nextui-org/react";
import { SSRProvider } from 'react-aria';

export default function App() {

  // Ejemplo json
  const derechos = [
    { key: "acceso", name: "Acceso" },
    { key: "rectificacion", name: "Rectificación" },
    { key: "consulta", name: "Consulta" },
    { key: "oposicion", name: "Oposición" },
  ];
  const columns = [
    {
      key: "ARCO_RIGHT",
      label: "Derecho Arco",
    },
    {
      key: "CLIENT_FULL_NAME",
      label: "Nombre completo",
    },
    {
      key: "CREATED_AT",
      label: "Fecha de creación",
    },
    {
      key: "PETITION_ID",
      label: "ID",
    },
  ];
  const rows = [
    {
      key: "1",
      ARCO_RIGHT: "Tony Reichert",
      CLIENT_FULL_NAME: "CEO",
      CREATED_AT: "Active",
      PETITION_ID: "1"
    },
    {
      key: "2",
      ARCO_RIGHT: "Zoey Lang",
      CLIENT_FULL_NAME: "Technical Lead",
      CREATED_AT: "Paused",
      PETITION_ID: "2"
    },
    {
      key: "3",
      ARCO_RIGHT: "Jane Fisher",
      CLIENT_FULL_NAME: "Senior Developer",
      CREATED_AT: "Active",
      PETITION_ID: "3"
    },
    {
      key: "4",
      ARCO_RIGHT: "William Howard",
      CLIENT_FULL_NAME: "Community Manager",
      CREATED_AT: "Vacation",
      PETITION_ID: "4"
    }, {
      key: "1",
      ARCO_RIGHT: "Tony Reichert",
      CLIENT_FULL_NAME: "CEO",
      CREATED_AT: "Active",
      PETITION_ID: "1"
    },
    {
      key: "2",
      ARCO_RIGHT: "Zoey Lang",
      CLIENT_FULL_NAME: "Technical Lead",
      CREATED_AT: "Paused",
      PETITION_ID: "2"
    },
    {
      key: "3",
      ARCO_RIGHT: "Jane Fisher",
      CLIENT_FULL_NAME: "Senior Developer",
      CREATED_AT: "Active",
      PETITION_ID: "3"
    },
    {
      key: "4",
      ARCO_RIGHT: "William Howard",
      CLIENT_FULL_NAME: "Community Manager",
      CREATED_AT: "Vacation",
      PETITION_ID: "4"
    }, {
      key: "1",
      ARCO_RIGHT: "Tony Reichert",
      CLIENT_FULL_NAME: "CEO",
      CREATED_AT: "Active",
      PETITION_ID: "1"
    },
    {
      key: "2",
      ARCO_RIGHT: "Zoey Lang",
      CLIENT_FULL_NAME: "Technical Lead",
      CREATED_AT: "Paused",
      PETITION_ID: "2"
    },
    {
      key: "3",
      ARCO_RIGHT: "Jane Fisher",
      CLIENT_FULL_NAME: "Senior Developer",
      CREATED_AT: "Active",
      PETITION_ID: "3"
    },
    {
      key: "4",
      ARCO_RIGHT: "William Howard",
      CLIENT_FULL_NAME: "Community Manager",
      CREATED_AT: "Vacation",
      PETITION_ID: "4"
    }, {
      key: "1",
      ARCO_RIGHT: "Tony Reichert",
      CLIENT_FULL_NAME: "CEO",
      CREATED_AT: "Active",
      PETITION_ID: "1"
    },
    {
      key: "2",
      ARCO_RIGHT: "Zoey Lang",
      CLIENT_FULL_NAME: "Technical Lead",
      CREATED_AT: "Paused",
      PETITION_ID: "2"
    },
    {
      key: "3",
      ARCO_RIGHT: "Jane Fisher",
      CLIENT_FULL_NAME: "Senior Developer",
      CREATED_AT: "Active",
      PETITION_ID: "3"
    },
    {
      key: "4",
      ARCO_RIGHT: "William Howard",
      CLIENT_FULL_NAME: "Community Manager",
      CREATED_AT: "Vacation",
      PETITION_ID: "4"
    }, {
      key: "1",
      ARCO_RIGHT: "Tony Reichert",
      CLIENT_FULL_NAME: "CEO",
      CREATED_AT: "Active",
      PETITION_ID: "1"
    },
    {
      key: "2",
      ARCO_RIGHT: "Zoey Lang",
      CLIENT_FULL_NAME: "Technical Lead",
      CREATED_AT: "Paused",
      PETITION_ID: "2"
    },
    {
      key: "3",
      ARCO_RIGHT: "Jane Fisher",
      CLIENT_FULL_NAME: "Senior Developer",
      CREATED_AT: "Active",
      PETITION_ID: "3"
    },
    {
      key: "4",
      ARCO_RIGHT: "William Howard",
      CLIENT_FULL_NAME: "Community Manager",
      CREATED_AT: "Vacation",
      PETITION_ID: "4"
    },
  ];
  return (
    <NextUIProvider>
      <SSRProvider>
        <Container gap={3} xl fluid>
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
          <Spacer y={1} />
          <Row gap={1}>
            <Col span="2" >
              <Card isHoverable="true" css={{ $$cardColor: 'white' }}>
                <Card.Body>
                  <Col>
                    <Text h6 size={20} color="black" css={{ m: 15 }}>
                      Tablero ARCO
                    </Text>
                    <Link block color="primary" href="#">
                      Tablero
                    </Link>
                    <Link block color="primary" href="#">
                      Página de inicio
                    </Link>
                    <Link block color="primary" href="#">
                      Perfil de usuario
                    </Link>

                    <Spacer y={17} />
                  </Col>


                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card isHoverable="true" css={{ $$cardColor: '#3694FF' }}>
                <Card.Body>
                  <Row gap={1}>
                    <Col>
                      <Text h1 size={45} color="white" css={{ m: 0 }}>
                        Tablero
                      </Text>
                    </Col>
                    <Col span="2">
                      <Dropdown>
                        <Dropdown.Button flat>Derechos</Dropdown.Button>
                        <Dropdown.Menu aria-label="Dynamic Actions" items={derechos}>
                          {(item) => (
                            <Dropdown.Item
                              key={item.key}
                              color={item.key === "delete" ? "error" : "default"}
                            >
                              {item.name}
                            </Dropdown.Item>
                          )}
                        </Dropdown.Menu>
                      </Dropdown>
                    </Col>
                  </Row>
                  <Table 
                    css={{
                      height: "auto",
                      minWidth: "100%",
                    }}
                  >
                    <Table.Header columns={columns}>
                      {(column) => (
                        <Table.Column key={column.key}>{column.label}</Table.Column>
                      )}
                    </Table.Header>
                    <Table.Body items={rows}>
                      {(item) => (
                        <Table.Row key={item.key}>
                          {(columnKey) => <Table.Cell>{item[columnKey]}</Table.Cell>}
                        </Table.Row>
                      )}
                    </Table.Body>
                  </Table>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </SSRProvider>
    </NextUIProvider>
  );
}
