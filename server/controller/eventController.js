const db = require("../models");
const Event = db.Event;
const Ticket = db.Ticket;
const User = db.User;
const Promotion = db.Promotion;

module.exports = {
  getAll: async (req, res) => {
    try {
      const { city } = req.query;

      if (city) {
        const result = await Event.findAll({
          where: { city: city },
          include: [
            {
              model: Ticket,
            },
          ],
        });
        return res.status(200).send(result);
      }

      const result = await Event.findAll({ include: Ticket });
      return res.status(200).send(result);
    } catch (err) {
      console.log(err);
      res.status(400).send({ message: err.message });
    }
  },

  getById: async (req, res) => {
    try {
      const result = await Event.findOne({
        where: {
          id: req.params.id,
        },
        include: [
          {
            model: User,
          },
        ],
      });
      res.status(200).send(result);
    } catch (error) {
      console.log(error);
      res.status(400).send({ message: error.message });
    }
  },

  createEvent: async (req, res) => {
    const {
      eventName,
      category,
      eventStartDate,
      eventEndDate,
      eventStartTime,
      eventEndTime,
      venue,
      city,
      desciption,
      ticketQuantity,
      ticketPrice,
      promotionStartDate,
      promotionEndDate,
      quota,
      discount,
    } = req.body;
    try {
      console.log(req.banner, ">>>>>banner");
      console.log(req.file, ">>>>>file");
      // console.log(banner);
      const event = await Event.create({
        name: eventName,
        desciption,
        category,
        venue,
        city,
        image_url: req.file?.path,
        start_date: eventStartDate,
        end_date: eventEndDate,
        start_time: eventStartTime,
        end_time: eventEndTime,
      });

      const ticket = await Ticket.create({
        total_stock: ticketQuantity,
        price: ticketPrice,
        EventId: event.id,
      });

      const promotion = await Promotion.create({
        start_date: promotionStartDate,
        end_date: promotionEndDate,
        quota,
        discount,
        EventId: event.id,
      });

      res.status(200).send({ message: "Success Create Event", ticket: ticket, event, event });
    } catch (err) {
      console.log(err);
      res.status(400).send({ message: err.message });
    }
  },
  testUpload: (req, res) => {
    console.log(req.file);
  },
};
