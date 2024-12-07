import express from "express";
import swaggerUi from "swagger-ui-express";
import { specfile } from "./openApiSpec";
const app = express();

const port = 3000;

app.use(express.json());

let users = [
  { id: 1, name: "John Doe" },
  { id: 2, name: "Jane Smith" },
  { id: 3, name: "Robert Johnson" },
  { id: 4, name: "Emily Davis" },
  { id: 5, name: "Michael Brown" },
  { id: 6, name: "Sarah Wilson" },
  { id: 7, name: "David Martinez" },
  { id: 8, name: "Jessica Garcia" },
  { id: 9, name: "Daniel Anderson" },
  { id: 10, name: "Sophia Lee" },
  { id: 11, name: "Matthew Thomas" },
];

app.get("/users", (req, res) => {
  const name = req.query.name as string;

  if (name) {
    const filteredUser = users.filter((user) =>
      user.name.toLocaleLowerCase().includes(name.toLowerCase())
    );

    res.json(filteredUser);
  } else res.json(users);
});

app.post("/users", (req, res) => {
  const name = req.query.name as string;

  if (name) {
    const filteredUser = users.filter((user) =>
      user.name.toLocaleLowerCase().includes(name.toLowerCase())
    );

    res.json(filteredUser);
  } else res.json(users);
});

app.use("/swagger", swaggerUi.serve, swaggerUi.setup(specfile));

app.listen(port, () => {
  console.log(`server running on http://localhost:${port}`);
});
