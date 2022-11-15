import alunos from "../models/Alunos.js";
import trilhas from "../models/Trilha.js";
import cursos from "../models/Cursos.js";
import admins from "../models/Administradores.js";
import AlunosController from "../controller/alunosController.js";

class LoginController {
  static async logar(req, res) {
    const email = req.body.email;
    const senha = req.body.senha;
    alunos
      .find()
      .populate("trilhas")
      .exec((err, alunos) => {
        admins.find((errAdmin, admins) => {
          const todoOsUsuarios = [...alunos, ...admins];
          if (err || errAdmin) {
            res.status(400).send({
              message: "Senha ou Usuário Inexistente",
              erro: err || errAdmin,
            });
          } else {
            const usuarioEncontrado = encontrarUsuario(
              todoOsUsuarios,
              email,
              senha
            );

            if (!usuarioEncontrado) {
              res.status(400).send({ message: "Senha ou Usuário Inexistente" });
              return;
            }

            const usuarioTratado = usuarioEncontrado?._doc;

            const dadosUsuario = {
              ...usuarioTratado,
              admin: usuarioEhAdmin(usuarioTratado),
            };

            res.status(200).json(dadosUsuario);
          }
        });
      });
  }
}

const encontrarUsuario = (todoOsUsuarios, email, senha) =>
  todoOsUsuarios.find(
    (usuario) => usuario.email === email && usuario.senha === senha
  );

const usuarioEhAdmin = (usuario) => (usuario?.cargo ? true : false);

export default LoginController;
