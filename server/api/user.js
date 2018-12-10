import user from "../mock/user";

export default function(req, res, next) {
  res.send(user);
}
