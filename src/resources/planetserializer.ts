let JSONAPISerializer = require('jsonapi-serializer').Serializer;

// TODO: Abstract each models schema, relationship definitions etc;
export default function(request: any, data: any){
  return new JSONAPISerializer('planet', {
    dataLinks: {
      self: (data: any) => {
        return request.aka('planet.show', {
          params: {
            id: data.id,
          }
        })
      }
    },
    attributes: [
      'name',
      'uuid',
      'description',
      'diameter',
      'featured',
      'climate',

      // relationships
      'photo',
      'galaxy',
      'amenities',
      'terrains',
    ],
    pluralizeType: false,
    galaxy: {
      ref: 'id',
      pluralizeType: false,
      includedLinks: {
        self: function (record: any, current: any) {
          return 'some link';
        }
      },
      relationshipMeta: {
        name: (data: any, galaxy: any) => {
          return galaxy.name;
        }
      }
    },
    amenities: {
      ref: 'id',
      attributes: [
        'name',
        'description',
        'slug',
        'is_active',
      ],
      pluralizeType: false,
      includedLinks: {
        self: function (record: any, current: any) {
          return 'some link';
        }
      },
    },
    photo: {
      ref: 'id',
      pluralizeType: false,
      includedLinks: {
        self: function (record: any, current:any) {
          return 'some link';
        }
      },
      relationshipLinks: {
        self: (data: any, photo: any) => {
          return 'self';
        },
        src: (data:any, photo:any) => {
          return photo.file_path;
        },
        thumb_src: (data:any, photo:any) => {
          return photo.thumbnail;
        }
      }
    },
    terrains: {
      ref: 'id',
      attributes: [
        'name',
        'description',
      ],
      pluralizeType: false,
      includedLinks: {
        self: function (record:any, current:any) {
          return 'some link';
        }
      },
    }
  }).serialize(data);
};
