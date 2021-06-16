const mongoose = require('mongoose')

let OfferingSchema = new mongoose.Schema({
    offering_id:String,
    name:string,
    status:string,
    inquiry_required:Boolean,
    type:string,
    category:string,
    sub_category:string,
    short_description:string,
    long_description:string,
    price_id:string,
    min_group_size:string,
    max_group_size:string,
    consultancy_id:string,
    facialiator_id:string,
    cancellation_policy:string,
    audiene_id:string,
    resource_links:string
})
module.exports = mongoose.model('Offering', OfferingSchema)