module.exports={
    attributes:{
        name:{
            type:'string',
            required: true
        },

        location:{
            type:'string',
            required: true
        },

        date:{
            type: 'string',
            columnType : 'datetime',
            required:true
        },

        host:{
            type:'string',
            required:true
        },

        additionalMessage:{
            type: 'string',
            required: true
        }
    }
};