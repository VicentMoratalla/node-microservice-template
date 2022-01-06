const mongoose = require('mongoose');

const pageHistorySchema = mongoose.Schema({
    checkpoint: String,
    details: {
        identifier: String,
        pageName: String,
        quoteNumber: String,
        serviceCalled: String
    },
    sessionId: String,
    date: Date
});

async function createPageHistory() {

    const pageHistory = new PageHistory({
        checkpoint: 'cover',
        details: {
            identifier: 'PAGE_VIEW',
            pageName: 'cover',
            quoteNumber: '4488574384',
            product: 'motor',
            flowName: 'acceptance'
        },
        sessionId: 'NDE2MTc2RjE0M0RCNDc0NTg2QTQ3NjdFQzQ4RUYwN0M6QzhGNzlDMjM1QkVFNDc5NUI3MEQwMUI1RTM1RTY1ODA'
    });

    try {
        const result = await pageHistory.save();
        return result;
    }
    catch (ex) {
        return ex.message;
    }

}

async function getPageHistories() {

    //COMPARISON OPERATORS
    // eq (equal)
    //ne (not equal)
    //gt (greater than)
    //gte (greater than or equal to)
    //lt (less than)
    //lte (less than or equal to)
    //in
    //nin (not in)

    //LOGICAL OPERATORS
    //or
    //and

    const pageHistory = await PageHistory.find();
        // .find({ checkpoint: 'cover' })
        // .find({ price: { $gte: 10, $lte: 20 } })
        // .find({ price: { $in: [10, 15, 20] } })
        
        // .or([ { checkpoint: 'cover'} ])
        // .and([  ])
        //starts with cover
        // .find({ author: /^cover/})
        // //ends with cover
        // .find({ author: /cover$/i})
        // //contains cover
        // .find({ author: /.*cover.*/i})
        // .skip((pageNumner = 1) * pageSize)
        // .limit(10)
        // .sort({ checkpoint: 1 })
        //.select({ checkpoint: 1, details: { indetifier: 1 } })
        //.count()
        console.log('pagehistories: ', pageHistory);
    return pageHistory;
}

async function updatePageHistory(id) {
    // const pageHistory = await PageHistory.findById(id);
    // if(!pageHistory) return;
    // pageHistory.details.quoteNumber = '4488574383';

    // const result = await pageHistory.save();

    // console.log('Updated record: ',result);

    const pageHistory = await PageHistory.updateOne({ _id: id }, {
        $set: {
            checkpoint: 'ancillary',
            details: {
                identifier: 'PAGE_VIEW',
                pageName: 'ancillary',
                quoteNumber: '4488574384',
                serviceCalled: ''
            }
        }
    });

    console.log('Update: ', pageHistory);
}

async function removePageHistory(id) {
    const result = await PageHistory.deleteOne({ _id: id });
    console.log('delete: ', result);
}

module.export = pageHistorySchema;
