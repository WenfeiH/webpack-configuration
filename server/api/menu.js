import menu from "../mock/menu";

export default function(req, res, next) {
  res.send(menu);
}
