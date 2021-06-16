//read all
app.get("/api/offerings", (request, reply) => {
    Offering.find({}, (err, offerings) => {
        if (!err) {
            reply.send(offerings)
        } else {
            reply.send({ error: err })
        }
    })
})

// read by id
app.get("/api/offerings/:offeringId", (request, reply) => {
    var offeringId = request.params.offeringId
    Offering.findById(offeringId, (err, offering) => {
        if (!err) {
            reply.send(offering)
        } else {
            reply.send({ error: err })
        }
    })
})

//create
app.post("/api/offerings", (request, reply) => {
    var offering = request.body
    Offering.create(offering, (err, offering) => {
        if (!err) {
            reply.send(offering)
        } else {
            reply.send({ error: err })
        }
    })
})

//update
app.put("/api/offerings/:offeringId", (request, reply) => {
    var offeringId = request.params.offeringId
    var newofferingEdit = request.body
    Offering.findById(offeringId, (err, offering) => {
        if (!err) {
            offering.offeringId = newofferingEdit.offeringId
            offering.name = newofferingEdit.name
            offering.status = newofferingEdit.status
            offering.inquiry_required = newofferingEdit.inquiry_required
            offering.type = newofferingEdit.type
            offering.category = newofferingEdit.category
            offering.subcategory = newofferingEdit.subcategory
            offering.short_description = newofferingEdit.short_description
            offering.long_description = newofferingEdit.long_description
            offering.min_group_size = newofferingEdit.min_group_size
            offering.max_group_size = newofferingEdit.max_group_size
            offering.status = newofferingEdit.status
            offering.consultancy_id = newofferingEdit.consultancy_id
            offering.faciliator_id = newofferingEdit.faciliator_id
            offering.cancellation_policy = newofferingEdit.cancellation_policy
            offering.audience_id = newofferingEdit.audience_id
            offering.resource_links = newofferingEdit.resource_links
            offering.save((er, savedoffering) => {
                if (!er) {
                    reply.send(savedoffering)
                } else {
                    reply.send(er)
                }
            })
        } else {
            reply.send({ error: err })
        }
    })
})
// delete
app.put("/api/offerings/:offeringId", (request, reply) => {
    var offeringId = request.params.offeringId
    Offering.findById(offeringId, (err, offering) => {
        if (!err) {
            offering.remove((er) => {
                if (!er) {
                    reply.send("offering DELETED")
                } else {
                    reply.send({ error: er })
                }
            })
        } else {
            reply.send({ error: err })
        }
    })
})










// /api/offerings GET - Returns all users in the datastore.
// /api/offerings/:offeringId GET - Returns a specific user.
// /api/offerings POST - Adds a new user.
// /api/offerings/:offeringId PUT - Edits a user.
// /api/offerings/:offeringId DELETE - Removes a user.