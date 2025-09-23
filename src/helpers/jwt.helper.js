import jwt from "jsonwebtoken";
export const generateToken = (user) => {
  try {
    const token = jwt.sign(
      {
        id: user.id,
        firstName: user.profile.firstName,
        lastName: user.profile.lastName,
        role: user.role,
      },
      process.env.JWT_SECRET,
      {
        expiresIn: process.env.JWT_EXPIRES_IN,
      }
    );
    return token;
  } catch (error) {
    throw new Error("Error generando el token: " + error.message);
  }
};
