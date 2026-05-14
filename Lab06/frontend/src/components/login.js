import React, { useState } from 'react';
import { Form, Button, Container } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const Login = props => {
  const [name, setName] = useState("");
  const [id, setId] = useState("");
  const navigate = useNavigate();

  const onChangeName = e => { setName(e.target.value); };
  const onChangeId = e => { setId(e.target.value); };

  const login = () => {
    props.login({ name: name, id: id });
    navigate('/'); // Sau khi login, redirect về trang Home
  };

  return (
    <Container>
      <Form style={{ maxWidth: "300px", margin: "auto", marginTop: "50px" }}>
        <h3>Login</h3>
        <Form.Group className="mb-3">
          <Form.Label>Username</Form.Label>
          <Form.Control type="text" placeholder="Enter name" value={name} onChange={onChangeName} />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>ID</Form.Label>
          <Form.Control type="text" placeholder="Enter ID" value={id} onChange={onChangeId} />
        </Form.Group>
        <Button variant="primary" onClick={login}>Submit</Button>
      </Form>
    </Container>
  );
};

export default Login;