import { Response } from 'express';
import { BovinoService } from '../../services/bovino-service';


class ResponseBody {
    constructor(public success: boolean,
        public data: any,
        public err: string) { }
}

interface RequestBody {
    ids: string[];
}

export function getBovinosByIds(req, res: Response, next) {

    let ids = req.body as RequestBody;
    BovinoService.instance.findBovinosByIds(ids.ids)
        .then(data => res.send(new ResponseBody(true, data, null)))
        .catch(err => res.status(500).send(new ResponseBody(null, null, err)));
}