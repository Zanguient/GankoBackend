import { UserService } from '../../services/user-service';
import { Response, Request } from 'express';
import { Observable } from 'rxjs/Observable';
import { Usuario } from '../../services/models/users';
let md5 = require('md5');
const nodemailer = require('nodemailer');

interface RequestBody {
    email: string;
}

class ResponseBody {
    constructor(public success: boolean,
        public data: any,
        public err: string) { }
}
//se ejecuta cuando se requiere recuperacion de contraseña
export function resetPassword(req: Request, res: Response, next) {
    let reset = req.body as RequestBody;
    UserService.instance.getOneByEmail(reset.email)
        .then(data => {
            if (data) {
                sendMail(data.doc, data.id, res);
            } else {
                res.send(new ResponseBody(null, null, "Email Incorrecto"));
            }

        }, err => {
            res.status(500).send(new ResponseBody(false, null, err));
        });
}
//envia el correo con la nueva contraseña y la inserta en la base de datos
function sendMail(data: Usuario, id: string, res: Response) {

    let mailOptions;
    let transporter = nodemailer.createTransport({
        host: 'smtp.gmail.com',
        port: 465,
        secure: true, // true for 465, false for other ports
        auth: {
            user: "cristian9016fxchoice@gmail.com",
            pass: "3177313834"
        }
    });
    let state: string = data.estado;
    let mail: string = data.email;
    if (state == "activo") {
        let newPass: string = Math.random().toString(36).slice(2);
        let bodyText: string = "This is your new password, use it to login into Ganko, then change it for a new one: " + newPass;
        mailOptions = {
            from: '"Ganko" <service@ganko.com>',
            to: mail + "," + mail,
            subject: 'Contraseña Cambiada ✔',
            text: 'Contraseña Cambiada',
            html: bodyText
        };
        //se cambia el password por el nuevo
        data.pass = md5(newPass);
        UserService.instance.update(id, data)
            .then(result => {
                res.send(new ResponseBody(true, result, null));
            }, err => {
                res.send(new ResponseBody(false, null, err));
            })
            .catch(err => {
                res.status(500).send(new ResponseBody(false, null, err));
            });
    } else {
        let bodyText: string = "Error, su cuenta no se encuentra activa, si cree que esto es un error, por favor contactese con servicio al cliente";
        mailOptions = {
            from: '"Ganko"',
            to: "cristian9016@gmail.com,cristian9016@gmail.com",
            subject: 'Error Cuenta Desactivada',
            text: 'Error Cuenta Desactivada',
            html: bodyText
        };
    }
    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            return console.log(error);
        }
    });
    return
}