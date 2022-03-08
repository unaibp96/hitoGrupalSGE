import firebase from "../firebase";
const db = firebase.collection("/regisros");
class DataService {
  getAll() {
    return db;
  }
  create(registro) {
    return db.add(registro);
  }
  update(id, value) {
    return db.doc(id).update(value);
  }
  delete(id) {
    return db.doc(id).delete();
  }
}
export default new DataService();