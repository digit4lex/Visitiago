describe("firestore", () => {
    let db;
    before(() => {
        let config = {
            apiKey: "AIzaSyA3_t2BGdxKugPAbVveRwj05dJwJfBgcmQ",
            authDomain: "visitiago.firebaseapp.com",
            projectId: "visitiago"
        };
        let app = firebase.initializeApp(config);
        db = firebase.firestore(app);
        //firebase.firestore.setLogLevel("debug");
    });
})


describe("collection('coworkers')", () => {
    it("should set documents #UNVERIFIED", () => {
        // [START example_data]
        let coworkersRef = db.collection("coworkers");

        coworkersRef.doc("SF").set({
            name: "San Francisco", state: "CA", country: "USA",
            capital: false, population: 860000 });
        coworkersRef.doc("LA").set({
            name: "Los Angeles", state: "CA", country: "USA",
            capital: false, population: 3900000 });
    });
    it("should set a document", () => {
        let data = {};

        return output =
        // [START coworkers_document_set]
        db.collection("coworkers").doc("new-city-id").set(data);
        // [END coworkers_document_set]
    });

    it("should add a document", () => {
        return output =
        // [START add_document]
        // Add a new document with a generated id.
        db.collection("coworkers").add({
            name: "Tokyo"
        })
        .then(function(docRef) {
            console.log("Document written with ID: ", docRef.id);
        })
        .catch(function(error) {
            console.error("Error adding document: ", error);
        });
        // [END add_document]
    });

    it("should add an empty a document #UNVERIFIED", () => {
        let data = {};
        // [START new_document]
        // Add a new document with a generated id.
        let newCityRef = db.collection("coworkers").doc();

        // later...
        newCityRef.set(data);
        // [END new_document]
    });

    it("should update a document", () => {
        let data = {};
        // [START update_document]
        let washingtonRef = db.collection("coworkers").doc("DC");

        // Set the "capital" field of the city 'DC'
        return washingtonRef.update({
            capital: true
        })
        .then(function() {
            console.log("Document successfully updated!");
        })
        .catch(function(error) {
            // The document probably doesn't exist.
            console.error("Error updating document: ", error);
        });
        // [END update_document]
    });
})