import diagram from '../assets/diagram.png';

export const dbSchema = {
    diagram: diagram,
    pseudoCode: `
class User {
    id: int
    email: string, not null, default ""
    encrypted_password: string, not null, default ""
    reset_password_token: string
    reset_password_sent_at: datetime
    remember_created_at: datetime
    created_at: datetime, not null
    updated_at: datetime, not null
    posts: [Post]
}

class Post {
    id: int
    title: string
    content: text
    user: User
}

class ActiveStorageAttachment {
    id: int
    name: string, not null
    record_type: string, not null
    record_id: bigint, not null
    blob_id: bigint, not null
    created_at: datetime, not null
}

class ActiveStorageBlob {
    id: int
    key: string, not null
    filename: string, not null
    content_type: string
    metadata: text
    service_name: string, not null
    byte_size: bigint, not null
    checksum: string
    created_at: datetime, not null
}

class ActiveStorageVariantRecord {
    id: int
    blob_id: bigint, not null
    variation_digest: string, not null
}

class Article {
    id: int
    title: string
    short_description: string
    description: text
    created_at: datetime, not null
    updated_at: datetime, not null
}

class Comment {
    id: int
    content: text
    created_at: datetime, not null
    updated_at: datetime, not null
    article_id: bigint, not null
}

class Like {
    id: int
    likes: integer
    dislikes: integer
    likeable_type: string, not null
    likeable_id: bigint, not null
    created_at: datetime, not null
    updated_at: datetime, not null
}
    `,
    plantUmlCode: `
@startuml

class User {
    id: int
    email: string, not null, default ""
    encrypted_password: string, not null, default ""
    reset_password_token: string
    reset_password_sent_at: datetime
    remember_created_at: datetime
    created_at: datetime, not null
    updated_at: datetime, not null
}

class Post {
    id: int
    title: string
    content: text
    user_id: int
}

class ActiveStorageAttachment {
    id: int
    name: string, not null
    record_type: string, not null
    record_id: bigint, not null
    blob_id: bigint, not null
    created_at: datetime, not null
}

class ActiveStorageBlob {
    id: int
    key: string, not null
    filename: string, not null
    content_type: string
    metadata: text
    service_name: string, not null
    byte_size: bigint, not null
    checksum: string
    created_at: datetime, not null
}

class ActiveStorageVariantRecord {
    id: int
    blob_id: bigint, not null
    variation_digest: string, not null
}

class Article {
    id: int
    title: string
    short_description: string
    description: text
    created_at: datetime, not null
    updated_at: datetime, not null
}

class Comment {
    id: int
    content: text
    created_at: datetime, not null
    updated_at: datetime, not null
    article_id: bigint, not null
}

class Like {
    id: int
    likes: integer
    dislikes: integer
    likeable_type: string, not null
    likeable_id: bigint, not null
    created_at: datetime, not null
    updated_at: datetime, not null
}

User "1" -- "0..*" Post: posts
Post "1" -- "0..*" Comment: comments
Article "1" -- "0..*" Comment: comments
ActiveStorageBlob "1" -- "0..*" ActiveStorageAttachment: attachments
ActiveStorageBlob "1" -- "0..*" ActiveStorageVariantRecord: variant_records

@enduml
    `
};
