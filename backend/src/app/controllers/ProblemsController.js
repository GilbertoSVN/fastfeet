import * as Yup from 'yup';

import Problems from '../models/Problems';
import Packages from '../models/Packages';
import Couriers from '../models/Couriers';

import CancellationMail from '../jobs/CancellationMail';
import Queue from '../../lib/Queue';

class ProblemsController {
  async store(req, res) {
    const schema = Yup.object().shape({
      description: Yup.string().required(),
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: 'Validation fails ' });
    }

    const { description } = req.body;
    const { id: delivery_id } = req.params;

    const { id } = await Problems.create({
      delivery_id,
      description,
    });

    return res.json({ id, delivery_id, description });
  }

  async index(_, res) {
    const problems = await Problems.findAll();

    if (!problems) {
      return res.status(400).json({ error: 'No problems found' });
    }

    return res.json(problems);
  }

  async show(req, res) {
    const { id } = req.params;

    const problems = await Problems.findAll({
      where: {
        delivery_id: id,
      },
    });

    if (!problems) {
      return res.status(400).json({ error: 'No problems found' });
    }

    return res.json(problems);
  }

  async delete(req, res) {
    const { id } = req.params;

    const { delivery_id } = await Problems.findByPk(id);

    if (!delivery_id) {
      return res.status(400).json({ error: 'Delivery not found' });
    }

    const packages = await Packages.findByPk(delivery_id);

    if (packages.canceled_at) {
      return res.status(400).json({ error: 'Delivery already canceled' });
    }

    packages.canceled_at = new Date();

    const courier = await Couriers.findByPk(packages.deliveryman_id);

    await packages.save();

    await Queue.add(CancellationMail.key, {
      deliveryman: { name: courier.name, email: courier.email },
      packages: { id: packages.id, product: packages.product },
    });

    return res.json(packages);
  }
}

export default new ProblemsController();
