import CryptoJS from "crypto-js";
import jwt from "jsonwebtoken";


const SECRET = "super_secret_key";


export function registerUser(email, password) {
const hashedPassword = CryptoJS.SHA256(password).toString();


const user = { email, password: hashedPassword };
localStorage.setItem("user", JSON.stringify(user));
}


export function loginUser(email, password) {
const savedUser = JSON.parse(localStorage.getItem("user"));
if (!savedUser) return null;


const hashedPassword = CryptoJS.SHA256(password).toString();


if (email !== savedUser.email || hashedPassword !== savedUser.password) {
return null;
}


const token = jwt.sign({ email }, SECRET, { expiresIn: "1h" });
return token;
}


export function verifyToken(token) {
try {
jwt.verify(token, SECRET);
return true;
} catch {
return false;
}
}