export interface LoginMessages{
  status: "rejected" | "success",
  message: "Login failed" | "Login is successfully" | "User not found!" | "Incorrect password",
  code : number
}
