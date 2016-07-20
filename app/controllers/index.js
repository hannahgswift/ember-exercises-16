import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    addPerson() {
      const data = {
          firstName: this.firstName,
          lastName: this.lastName,
          address: this.address,
          phoneNumber: this.phoneNumber
        };

        fetch('https://tiny-tn.herokuapp.com/collections/hs-people', {
          headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
          },
          method: 'post',
          body: JSON.stringify(data),
        });
    },

  }
});
