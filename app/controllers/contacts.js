import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    addContact() {
      const data = {
        firstName: this.firstName || '',
        lastName: this.lastName || '',
        address: this.address || '',
        phoneNumber: this.phoneNumber || '',
      }

      fetch('https://tiny-tn.herokuapp.com/collections/hs-contacts', {
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        method: 'post',
        body: JSON.stringify(data),
      }).then((res) => res.json())
        .then((person) => {
        this.setProperties({
          'firstName': '',
          'lastName': '',
          'address': '',
          'phoneNumber': ''
        });
        this.set('model', [...this.model, person]);
      });
    },

    toggleForm() {
      this.toggleProperty('isShowingForm');
    },

    deleteContact(kitty) {
      if (confirm('Are you sure you want to delete this contact?')) {
        fetch('https://tiny-tn.herokuapp.com/collections/hs-contacts/' + kitty._id, {
          method: 'Delete',
        }).then(() => {
          const updatedList = this.model.filter((item) => {
            return item._id !== kitty._id;
          });
          this.set('model', updatedList);
        })
      }
    },


  }
});
