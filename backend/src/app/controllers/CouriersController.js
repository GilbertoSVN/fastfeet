import * as Yup from 'yup';

import Couriers from '../models/Couriers';
import File from '../models/File';

class CouriersController {
  async store(req, res) {
    const schema = Yup.object().shape({
      name: Yup.string().required(),
      email: Yup.string()
        .email()
        .required(),
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: 'Validation fails ' });
    }

    const { email } = req.body;

    const courier = await Couriers.findOne({
      where: {
        email,
      },
    });

    if (courier) {
      return res.status(400).json({ error: 'Courier already exists ' });
    }

    const { id, name } = await Couriers.create(req.body);

    return res.json({ id, name, email });
  }

  async index(req, res) {
    const { page = 1 } = req.query;

    const couriers = await Couriers.findAll({
      order: ['id'],
      attributes: ['id', 'name', 'email'],
      limit: 10,
      offset: (page - 1) * 10,
      include: [
        { model: File, as: 'avatar', attributes: ['name', 'path', 'url'] },
      ],
    });

    return res.json(couriers);
  }

  async show(req, res) {
    const { courierId: id } = req.params;

    const { name, email } = await Couriers.findOne({
      where: {
        id,
      },
    });

    if (!name) {
      return res.status(400).json({ error: 'Courier not found' });
    }

    return res.json({ id, name, email });
  }

  async update(req, res) {
    const schema = Yup.object().shape({
      name: Yup.string(),
      email: Yup.string().email(),
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: 'Validation fails ' });
    }

    const { courierId: id } = req.params;

    const courier = await Couriers.findByPk(id);

    if (!courier) {
      return res.status(400).json({
        error: `Courier with ID ${id} doesn't exists`,
      });
    }

    const { name, email } = await courier.update(req.body);

    return res.json({ id, name, email });
  }

  async delete(req, res) {
    const { courierId: id } = req.params;
    const courier = await Couriers.findByPk(id);

    if (!courier) {
      return res.status(404).json({ error: 'Courier not found' });
    }

    await Couriers.destroy({
      where: {
        id,
      },
    });

    return res.json(`Courier with ID ${id} successfully removed`);
  }
}

export default new CouriersController();
