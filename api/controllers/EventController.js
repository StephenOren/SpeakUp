module.exports = {
    // Create action
    create: async function(req, res) {
      try {
        const { name, location, date , host , additionalMessage } = req.body;
        let events = await CalendarEvent.create({ name, location, date, host, additionalMessage }).fetch();
        events = [events];
        return res.view('pages/listevents',{events} );
      } catch (err) {
        return res.serverError(err);
      }
    },
  
    // Read action
    find: async function(req, res) {
      try {
        const events = await CalendarEvent.find();
        //return res.json(events);
        return res.view('pages/listevents',{events})
      } catch (err) {
        return res.serverError(err);
      }
    },
  
    // Update action
  update: async function(req, res) {
    try {
      const { id } = req.params;
      const { name, location, date, host, additionalMessage } = req.body;
      const updatedEvent = await CalendarEvent.updateOne({ id }).set({ name, location, date, host, additionalMessage });
      if (!updatedEvent) {
        return res.notFound('Event not found');
      }
      return res.json(updatedEvent);
    } catch (err) {
      return res.serverError(err);
    }
  },

    // Delete action
    delete: async function(req, res) {
      try {
        const { id } = req.params;
        const deletedEvent = await CalendarEvent.destroyOne({ id });
        if (!deletedEvent) {
          return res.notFound('Event not found');
        }
        return res.json(deletedEvent);
      } catch (err) {
        return res.serverError(err);
      }
    },


    
  };