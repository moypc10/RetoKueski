const express = require('express')
const next = require('next')
const mysql = require('mysql2')

const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()

const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "KUESKIARCO"
});

connection.query('SELECT 1 + 1 AS solution', (err, rows) => {
  if (err) throw err
  console.log(rows);
})

app.prepare()
  .then(() => {
    const server = express()

    server.get('*', (req, res) => {
      return handle(req, res)
    })

    server.get("/solicitudes", (req, res) => {
      console.log("testtt")
      res.json({ message: "Hello from server side!" });
    })

    server.get("/petitions/pending", async (req, res) => {
      try {
        //connection.query("CALL sp_get_pending_petitions()"); --- Not finished
        connection.query('SELECT * FROM `ADDRESSES`', (err, rows) => {
          if (err) throw err
          res.json({ message: rows });
        })
      }
      catch (err) {
        console.error(err);
        res.status(500).send('Error retrieving data from the database');
      }
    });

    server.get("/petitions/notPending", async (req, res) => {
      res.json({ message: "petitions/notPending!" });
      try {
        //  const [rows] = await connection.execute("CALL sp_get_not_pending_petitions() "); -- Not finished
        connection.query('SELECT * FROM `ADDRESSES`', (err, rows) => {
          if (err) throw err
          res.json({ message: rows });
        })

      }
      catch (err) {
        console.error(err);
        res.status(500).send('Error retrieving data from the database');
      }
    })

    server.get('/petitions/user/:id', async (req, res) => {
      res.json({ message: "petitions/user/id" });
      //const { id } = req.params;
      //
      //try {
      //  const connection = await pool.getConnection();
      //  const [rows] = await connection.execute('CALL get_client_info(?)', [id]);
      //  connection.release();
      //  res.json(rows);
      //
      //} catch (err) {
      //  console.error(err);
      //  res.status(500).send('Error retrieving data from the database');
      //}
    });


    server.listen(3000, (err) => {
      if (err) throw err
      console.log('> Ready on http://localhost:3000')
    })
  })
  .catch((ex) => {
    console.error(ex.stack)
    process.exit(1)
  })