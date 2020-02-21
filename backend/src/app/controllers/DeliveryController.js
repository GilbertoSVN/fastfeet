import { Op } from 'sequelize';
import {
  startOfDay,
  endOfDay,
  setHours,
  setMinutes,
  setSeconds,
  format,
  isBefore,
  isAfter,
  parseISO,
} from 'date-fns';
// import * as Yup from 'yup';
import Packages from '../models/Packages';
import Signatures from '../models/Signatures';

class DeliveryController {
  async update(req, res) {
    const { deliverymanId: deliveryman_id } = req.params;
    const { id, date } = req.body;

    if (!deliveryman_id) {
      return res.status(400).json({ error: 'Invalid ID ' });
    }

    if (!date) {
      return res.status(400).json({ error: 'Invalid date' });
    }

    const parsedDate = parseISO(date);

    const packages = await Packages.findAll({
      where: {
        deliveryman_id,
        canceled_at: null,
        start_date: {
          [Op.between]: [startOfDay(parsedDate), endOfDay(parsedDate)],
        },
      },
    });

    if (packages.length > 5) {
      return res
        .status(401)
        .json({ error: "You can't do more then 5 deliveries in a day " });
    }

    const hourMin = parseISO(
      format(
        setSeconds(setMinutes(setHours(parsedDate, '08'), 0), 0),
        "yyyy-MM-dd'T'HH:mm:ssxxx"
      )
    );
    const hourMax = parseISO(
      format(
        setSeconds(setMinutes(setHours(parsedDate, '18'), 0), 0),
        "yyyy-MM-dd'T'HH:mm:ssxxx"
      )
    );

    if (isBefore(parsedDate, hourMin) || isAfter(parsedDate, hourMax)) {
      return res.status(400).json({ error: 'Hour not permitted ' });
    }

    if (packages.find(a => a.start_date === parsedDate)) {
      return res.status(400).json({ error: 'Date time is not avaialble' });
    }

    const delivery = await Packages.findOne({
      where: {
        id,
      },
    });

    if (
      packages.find(
        a => format(a.start_date, 'HH:mm') === format(parsedDate, 'HH:mm')
      )
    ) {
      return res.status(400).json({ error: 'Package already registered' });
    }

    delivery.start_date = parsedDate;

    await delivery.save();

    return res.json(`Package ${id} registered to courier ${deliveryman_id}`);
  }

  async show(req, res) {
    const { deliverymanId: deliveryman_id } = req.params;

    const packages = await Packages.findAll({
      where: {
        deliveryman_id,
        [Op.not]: [{ date_end: null }],
      },
    });

    return res.json(packages);
  }

  async index(req, res) {
    const { deliverymanId: deliveryman_id } = req.params;

    const packages = await Packages.findAll({
      where: {
        deliveryman_id,
        [Op.or]: [{ end_date: null }, { canceled_at: null }],
      },
    });

    return res.json(packages);
  }

  async store(req, res) {
    const { deliverymanId: deliveryman_id, id } = req.params;
    const packages = await Packages.findOne({ where: { id, deliveryman_id } });

    if (!packages) {
      return res.status(400).json({ error: 'Package not found ' });
    }

    const { originalname: name, filename: path } = req.file;

    if (!path) {
      return res.status(400).json({ error: 'You must submit a file ' });
    }

    const signature = await Signatures.create({
      name,
      path,
    });

    packages.end_date = new Date();
    packages.signature_id = signature.id;

    await packages.save();

    return res.json(packages);
  }
}

export default new DeliveryController();
