const db = require('./conn');

class RestaurantModel {
    constructor(id, name, address, category) {
        this.id = id;
        this.name = name;
        this.address = address;
        this.category = category;
    }

    static async getAllRestaurants() {
        try {
           const response = await db.any(`SELECT * FROM restaurant;`);
           return response;
        } catch (error) {
            console.log('Error: ', error);
            return error;
        }
    }

    static async getRestaurantById(r_id) {
        try {
          const response = await db.any(
            `SELECT * FROM restaurant WHERE id = ${r_id};`
          );
          return response;
        } catch (error) {
          console.error('ERROR: ', error);
          return error;
        }
    }

    static async getReviewsByRestaurantId(r_id) {
        try {
          const response = await db.any(
            `SELECT * FROM review WHERE restaurantid = ${r_id};`
          );
          return response;
        } catch (error) {
          console.error('ERROR: ', error);
          return error;
        }
    }

    static async addReview(r_id, review_title, review_text) {
      try {
        const response = await db.one(
          `INSERT INTO review (reviewerid, restaurantid, title, review) VALUES ($1, $2, $3, $4) RETURNING id`, 
          [10, r_id, review_title, review_text]
          );
          return response;
      } catch (error) {
        console.log('ERROR: ', error);
        return error;
      }
    }
}


module.exports = RestaurantModel;