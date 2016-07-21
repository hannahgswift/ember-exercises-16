import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    addContact() {
      const data = {
        firstName: this.firstName,
        lastName: this.lastName,
        address: this.address,
        phoneNumber: this.phoneNumber
      };

      fetch('https://tiny-tn.herokuapp.com/collections/hs-contacts', {
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        method: 'post',
        body: JSON.stringify(data),
      });
    },

    toggleForm() {
      this.toggleProperty('isShowingForm');
    },

    deleteContact() {
      const data = {
      };

      fetch('https://tiny-tn.herokuapp.com/collections/hs-contacts', {
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        method: 'delete'}).then((res) => res.json()).then(() => {
          var todo = this.get('model');
          todo.deleteRecord();
          todo.save();
        })
    }
  }
});
