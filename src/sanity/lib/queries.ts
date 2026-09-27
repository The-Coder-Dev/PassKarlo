import { defineQuery } from 'next-sanity'

export interface SanityInstitute {
  _id: string
  name: string
  slug?: {
    current: string
  }
  type: 'school' | 'college' | string
  shortDescription?: string
  logo?: {
    _type: 'image'
    asset?: {
      _ref: string
      _type: 'reference'
    }
  }
  location?: {
    state?: string
    city?: string
    pincode?: string
    address?: string
    mapUrl?: string
  }
  contact?: {
    phone?: string
    email?: string
    website?: string
    admissionFormUrl?: string
  }
  admissionFormUrl?: string
  academicInfo?: {
    affiliation?: string
    establishedYear?: number
    accreditation?: string
    facilities?: string[]
    admissionInfo?: string
  }
  isFeatured?: boolean
  featuredFrom?: string
  featuredUntil?: string
}

export interface SanityTeacher {
  _id: string
  name: string
  slug?: {
    current: string
  }
  profileImage?: {
    _type: 'image'
    asset?: {
      _ref: string
      _type: 'reference'
    }
  }
  shortIntroduction?: string
  subjects?: string[]
  qualifications?: string[]
  experience?: number
  languages?: string[]
  teachingMode?: 'online' | 'offline' | 'hybrid' | string
  location?: {
    state?: string
    city?: string
    address?: string
  }
  contact?: {
    phone?: string
    email?: string
  }
  availability?: string
}

export const INSTITUTES_QUERY = defineQuery(
  `*[_type == "institute"] | order(_createdAt desc) {
    _id,
    name,
    slug,
    type,
    shortDescription,
    logo,
    location {
      state,
      city,
      pincode,
      address,
      mapUrl
    },
    contact {
      phone,
      email,
      website,
      admissionFormUrl
    },
    "admissionFormUrl": coalesce(admissionFormUrl, contact.admissionFormUrl),
    academicInfo {
      affiliation,
      establishedYear,
      accreditation,
      facilities,
      admissionInfo
    },
    isFeatured,
    featuredFrom,
    featuredUntil
  }`
)

export const SCHOOLS_QUERY = defineQuery(
  `*[_type == "institute" && type == "school"] | order(isFeatured desc, _createdAt desc) {
    _id,
    name,
    slug,
    type,
    shortDescription,
    logo,
    location {
      state,
      city,
      pincode,
      address,
      mapUrl
    },
    contact {
      phone,
      email,
      website,
      admissionFormUrl
    },
    "admissionFormUrl": coalesce(admissionFormUrl, contact.admissionFormUrl),
    academicInfo {
      affiliation,
      establishedYear,
      accreditation,
      facilities,
      admissionInfo
    },
    isFeatured,
    featuredFrom,
    featuredUntil
  }`
)

export const COLLEGES_QUERY = defineQuery(
  `*[_type == "institute" && type == "college"] | order(isFeatured desc, _createdAt desc) {
    _id,
    name,
    slug,
    type,
    shortDescription,
    logo,
    location {
      state,
      city,
      pincode,
      address,
      mapUrl
    },
    contact {
      phone,
      email,
      website,
      admissionFormUrl
    },
    "admissionFormUrl": coalesce(admissionFormUrl, contact.admissionFormUrl),
    academicInfo {
      affiliation,
      establishedYear,
      accreditation,
      facilities,
      admissionInfo
    },
    isFeatured,
    featuredFrom,
    featuredUntil
  }`
)

export const TEACHERS_QUERY = defineQuery(
  `*[_type == "teacher"] | order(_createdAt desc) {
    _id,
    name,
    slug,
    profileImage,
    shortIntroduction,
    subjects,
    qualifications,
    experience,
    languages,
    teachingMode,
    location {
      state,
      city,
      address
    },
    contact {
      phone,
      email
    },
    availability
  }`
)
