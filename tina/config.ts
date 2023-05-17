import { defineSchema, defineConfig } from 'tinacms';
import { frenchFields } from "./templates";

// Your hosting provider likely exposes this as an environment variable
const branch = process.env.HEAD || process.env.VERCEL_GIT_COMMIT_REF || "master";

export default defineConfig({
  branch,
  clientId: "c3baca83-ef29-47a6-b9a5-feeb16949240", // Get this from tina.io
  token: "dff32e0fa29b6f3048b1bb92f2a95ac2f8125e4f", // Get this from tina.io
  client: { skip: true },
  build: {
    outputFolder: "admin",
    publicFolder: "static",
  },
  media: {
    tina: {
      mediaRoot: "",
      publicFolder: "static",
    },
  },
  schema: {
    collections: [
      {
        format: "md",
        label: "Pages",
        name: "pages",
        path: "content",
        frontmatterFormat: "yaml",
        match: {
          include: "*",
        },
        fields: [
          {
            type: "rich-text",
            name: "body",
            label: "Body of Document",
            description: "This is the markdown body",
            isBody: true,
          },
        ],
      },

      {
        format: "md",
        label: "location",
        name: "location",
        path: "content/french/location",
        frontmatterFormat: "yaml",
        match: {
          include: "**/*",
        },
        fields: [
         
          {
            name: 'draft',
            label: 'Draft',
            type: 'boolean',
          },

          {
            type: 'string',
            label: 'Title',
            name: 'title',
          },

          {
            type: 'string',
            label: 'description',
            name: 'description',
          },

          {
            type: 'image',
            label: 'image',
            name: 'image',
          
          },
        ],
      },

      {
        format: "md",
        label: "contact",
        name: "contact",
        path: "content/french/contact",
        frontmatterFormat: "yaml",
        match: {
          include: "**/*",
        },
        fields: [
         
          {
            name: 'draft',
            label: 'Draft',
            type: 'boolean',
          },

          {
            type: 'string',
            label: 'Title',
            name: 'title',
          },

          {
            type: 'string',
            label: 'description',
            name: 'description',
          },
      
          {
            
            label: 'office',
            name: 'office',
            type: "object",
           
            fields: [
              {
                label: "title",
                name: "title",
                type: "string"
              },

              {
                label: "mobile",
                name: "mobile",
                type: "string"
              },

              {
                label: "email",
                name: "email",
                type: "string"
              },


              {
                label: "location",
                name: "location",
                type: "string"
              },


              {
                label: "social",
                name: "social",
                type: "string"
              },


              {
                label: "net",
                name: "net",
                type: "string"
              },

              {
                label: "play",
                name: "play",
                type: "string"
              },

              {
                label: "play",
                name: "content",
                type: "string"
              },
            ]

          },

          {

            label: 'opennig_hour',
            name: 'opennig_hour',
            type: "object",
           
            fields: [
              {
                label: "title",
                name: "title",
                type: "string"
              },

              {
                label: "day_time",
                name: "day_time",
                type: "string",
                list: true
              },
            ]

          },
        


        ],
      },


      // {
      //   format: "md",
      //   label: "terms & conditions",
      //   name: "terms_conditions",
      //   path: "content/french/terms-conditions",
      //   frontmatterFormat: "yaml",
      //   match: {
      //     include: "**/*",
      //   },
      //   fields: [

      //     {
      //       name: 'draft',
      //       label: 'Draft',
      //       type: 'boolean',
      //     },

      //     {
      //       type: 'string',
      //       label: 'Title',
      //       name: 'title',
      //     },

      //     {
      //       type: 'string',
      //       label: 'description',
      //       name: 'description',
      //     },

      //     {
      //       type: "rich-text",
      //       name: "body",
      //       label: "Body of Document",
      //       description: "This is the markdown body",
      //       isBody: true,
      //     },
      //   ],
      // },


      {
        format: "md",
        label: "Termes et conditions",
        name: "privacy_policy",
        path: "content/french/privacy-policy",
        frontmatterFormat: "yaml",
        match: {
          include: "**/*",
        },
        fields: [

          {
            name: 'draft',
            label: 'Draft',
            type: 'boolean',
          },

          {
            type: 'string',
            label: 'Title',
            name: 'title',
          },

          {
            type: 'string',
            label: 'description',
            name: 'description',
          },

          {
            type: "rich-text",
            name: "body",
            label: "Body of Document",
            description: "This is the markdown body",
            isBody: true,
          },
        ],
      },


    
      {
        format: "md",
        label: "blog",
        name: "blog",
        path: "content/french/blog",
        frontmatterFormat: "yaml",
        match: {
          include: "**/*",
        },
        fields: [

          {
            name: 'draft',
            label: 'Draft',
            type: 'boolean',
          },

          {
            type: 'string',
            label: 'Title',
            name: 'title',
          },

          {
            type: 'datetime',
            label: 'Date',
            name: 'date',
          
          },

          {
            type: 'string',
            label: 'description',
            name: 'description',
          },

          {
            type: 'image',
            label: 'image',
            name: 'image',
          
          },

          {
            type: "rich-text",
            name: "body",
            label: "Body of Document",
            description: "This is the markdown body",
            isBody: true,
          },
        ],
      },
      
      {
        format: "md",
        label: "French",
        name: "french",
        path: "content/french/products", 
        frontmatterFormat: "yaml",
        match: {
          include: "**/*",
        },
        fields: [
          {
            name: 'draft',
            label: 'Draft',
            type: 'boolean',
          },

          {
            type: 'string',
            label: 'Title',
            name: 'title',
          },

          {
            type: 'datetime',
            label: 'Date',
            name: 'date',
          
          },


          {
            type: 'string',
            label: 'description',
            name: 'description',
          },


         
          {
            type: 'image',
            label: 'featureImage',
            name: 'featureImage',
            list: true,
          },


          {
            type: 'string',
            label: 'price',
            name: 'price',
          },


          {
            type: 'string',
            label: 'discountprice',
            name: 'discount_price',
          },

          {
            type: 'string',
            label: 'couleur',
            name: 'colors',
            list: true,
          },

          {
            type: 'string',
            label: 'button_link',
            name: 'button_link',
          },


          {
            type: "rich-text",
            name: "body",
            label: "Body of Document",
            description: "This is the markdown body",
            isBody: true,
          },
        ],
      },
      // {
      //   format: "md",
      //   label: "English",
      //   name: "english",
      //   path: "content/english",
      //   frontmatterFormat: "yaml",
      //   match: {
      //     include: "**/*",
      //   },
      //   fields: [
      //     {
      //       type: "rich-text",
      //       name: "body",
      //       label: "Body of Document",
      //       description: "This is the markdown body",
      //       isBody: true,
      //     },
      //   ],
      // },
    ],
  },
});
