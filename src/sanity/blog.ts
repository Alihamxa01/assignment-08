// sanity/pet.ts
import  { defineField} from 'sanity'

export default {
    name: 'blog',
    type: 'document',
    title: 'Blog',
    fields: [
        {
            name: 'name',
            type: 'string',
            title: 'author name'
        },
        defineField({
            name: 'title',
            type: 'string',
            title:'TITLE'
          }),
         defineField({
            name:'details',
            type:'string',
            title :'ADD YOUR DETAILS'
         })
    ]

}

