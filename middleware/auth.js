const auth = (req, res, next) => {
  const authHeader = req.headers.authorization;

  if (!authHeader || !authHeader.startsWith("Basic ")) {
    return res.status(401).json({
      success: false,
      message: "Authentication required"
    });
  }

  const base64Credentials =
    authHeader.split(" ")[1];

  const credentials = Buffer.from(
    base64Credentials,
    "base64"
  ).toString("utf8");

  const [username, password] =
    credentials.split(":");

  if (
    username !== process.env.AUTH_USER ||
    password !== process.env.AUTH_PASS
  ) {
    return res.status(401).json({
      success: false,
      message: "Invalid credentials"
    });
  }

  next();
};

export default auth;