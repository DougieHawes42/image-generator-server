const signUp = (req, res) => {
  const { username, email, password } = req.body;

  if (!username || !email || !password) {
    return res.status(400).json({ error: "username, email, and password are required." });
  }

  // TODO: hash password and persist user to a database
  res.status(201).json({ message: "User created successfully.", user: { username, email } });
};

module.exports = { signUp };
