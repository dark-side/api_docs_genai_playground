import diagram from '../assets/schema.png';

export const dbSchema = {
    diagram: diagram,
    pseudoCode: `
Class ActiveStorageAttachment {
    name: string, not null
    record_type: string, not null
    record_id: bigint, not null
    blob_id: bigint, not null
    created_at: datetime, not null
    Indexes:
        blob_id
        (record_type, record_id, name, blob_id) unique
}

Class ActiveStorageBlob {
    key: string, not null
    filename: string, not null
    content_type: string
    metadata: text
    service_name: string, not null
    byte_size: bigint, not null
    checksum: string
    created_at: datetime, not null
    Indexes:
        key unique
}

Class ActiveStorageVariantRecord {
    blob_id: bigint, not null
    variation_digest: string, not null
    Indexes:
        (blob_id, variation_digest) unique
}

Class Article {
    title: string
    short_description: string
    description: text
    created_at: datetime, not null
    updated_at: datetime, not null
}

Class Comment {
    content: text
    created_at: datetime, not null
    updated_at: datetime, not null
    article_id: bigint, not null
    Indexes:
        article_id
}

Class JwtDenylist {
    jti: string
    exp: datetime
    created_at: datetime, not null
    updated_at: datetime, not null
    Indexes:
        jti
}

Class Like {
    likes: integer
    dislikes: integer
    likeable_type: string, not null
    likeable_id: bigint, not null
    created_at: datetime, not null
    updated_at: datetime, not null
    Indexes:
        (likeable_type, likeable_id)
}

Class User {
    email: string, not null, default ""
    encrypted_password: string, not null, default ""
    reset_password_token: string
    reset_password_sent_at: datetime
    remember_created_at: datetime
    created_at: datetime, not null
    updated_at: datetime, not null
    Indexes:
        email unique
        reset_password_token unique
}

Relationships:
    ActiveStorageAttachment -> ActiveStorageBlob : blob_id
    ActiveStorageVariantRecord -> ActiveStorageBlob : blob_id
    Comment -> Article : article_id
    `,
    plantUmlCode: `
@startuml
entity active_storage_attachments {
  *name : string
  *record_type : string
  *record_id : bigint
  *blob_id : bigint
  *created_at : datetime
  --
  index blob_id
  index record_type, record_id, name, blob_id (unique)
}

entity active_storage_blobs {
  *key : string
  *filename : string
  content_type : string
  metadata : text
  *service_name : string
  *byte_size : bigint
  checksum : string
  *created_at : datetime
  --
  index key (unique)
}

entity active_storage_variant_records {
  *blob_id : bigint
  *variation_digest : string
  --
  index blob_id, variation_digest (unique)
}

entity articles {
  title : string
  short_description : string
  description : text
  *created_at : datetime
  *updated_at : datetime
}

entity comments {
  content : text
  *created_at : datetime
  *updated_at : datetime
  *article_id : bigint
  --
  index article_id
}

entity jwt_denylists {
  jti : string
  exp : datetime
  *created_at : datetime
  *updated_at : datetime
  --
  index jti
}

entity likes {
  likes : integer
  dislikes : integer
  *likeable_type : string
  *likeable_id : bigint
  *created_at : datetime
  *updated_at : datetime
  --
  index likeable_type, likeable_id
}

entity users {
  *email : string
  *encrypted_password : string
  reset_password_token : string
  reset_password_sent_at : datetime
  remember_created_at : datetime
  *created_at : datetime
  *updated_at : datetime
  --
  index email (unique)
  index reset_password_token (unique)
}

active_storage_attachments }|--|| active_storage_blobs : blob_id
active_storage_variant_records }|--|| active_storage_blobs : blob_id
comments }|--|| articles : article_id
@enduml
    `
};
