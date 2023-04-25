import { Container, Card, Row, Text, Col, Spacer, Table, useAsyncList } from "@nextui-org/react";
export default function App() {
  const columns = [
    { name: "ID", uid: "name" },
    { name: "Derecho", uid: "height" },
    { name: "Nombre de cliente", uid: "mass" },
    { name: "Apellido Paterno", uid: "birth_year" },
    { name: "Apellido Materno", uid: "birth_year" },
    { name: "Fecha y hora", uid: "birth_year" },
    { name: "Estatus", uid: "birth_year" }
  ];
  async function load({ signal, cursor }) {
    // If no cursor is available, then we're loading the first page.
    // Otherwise, the cursor is the next URL to load, as returned from the previous page.
    const res = await fetch(
      cursor || "https://swapi.py4e.com/api/people/?search=",
      { signal }
    );
    const json = await res.json();
    return {
      items: json.results,
      cursor: json.next,
    };
  }
  const list = useAsyncList({ load });
  return (
    <Container gap={0}>
      <Row gap={1}>
        <Col>
          <Card css={{ $$cardColor: '$colors$gradient' }}>
            <Card.Body>
              <Text h6 size={25} color="white" css={{ m: 0 }}>
                Logo de Kueski
              </Text>
              <Text h6 size={25} color="white" css={{ m: 0 }}>
                Mas data
              </Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <Spacer y={1} />
      <Row gap={1}>
        <Col span="3">
          <Card css={{ $$cardColor: '$colors$primary' }}>
            <Card.Body>
              <Text h6 size={15} color="white" css={{ m: 0 }}>
                Tablero arco
              </Text>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card css={{ $$cardColor: '$colors$gradient' }}>
            <Card.Body>
              <Text h1 size={40} color="white" css={{ m: 0 }}>
                Tablero
              </Text>
              <Table
                bordered
                shadow={false}
                aria-label="Example table with dynamic content & infinity pagination"
                css={{ minWidth: "100%", height: "calc($space$14 * 11)" }}
                color="secondary"
              >
                <Table.Header columns={columns}>
                  {(column) => (
                    <Table.Column key={column.uid}>{column.name}</Table.Column>
                  )}
                </Table.Header>
                <Table.Body
                  items={list.items}
                  loadingState={list.loadingState}
                  onLoadMore={list.loadMore}
                >
                  {(item) => (
                    <Table.Row key={item.name}>
                      {(key) => <Table.Cell>{item[key]}</Table.Cell>}
                    </Table.Row>
                  )}
                </Table.Body>
              </Table>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}
