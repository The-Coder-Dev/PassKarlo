import { defineQuery } from 'next-sanity'

export interface SanityFilterOptions {
  cities?: (string | null)[]
  states?: (string | null)[]
  affiliations?: (string | null)[]
}

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

export const GET_FILTER_OPTIONS_QUERY = defineQuery(
  `{
    "cities": array::unique(*[_type == "institute" && defined(location.city)].location.city),
    "states": array::unique(*[_type == "institute" && defined(location.state)].location.state),
    "affiliations": array::unique(*[_type == "institute" && defined(academicInfo.affiliation)].academicInfo.affiliation)
  }`
)

export const SEARCH_INSTITUTES_QUERY = defineQuery(
  `*[_type == "institute"
    && ($instituteType == "" || type == $instituteType)
    && ($city == "" || location.city == $city)
    && ($state == "" || location.state == $state)
    && ($affiliation == "" || academicInfo.affiliation == $affiliation)
    && ($featured == false || isFeatured == true)
    && ($searchTerm == "" || (
      name match $searchTerm ||
      location.city match $searchTerm ||
      location.state match $searchTerm ||
      location.pincode match $searchTerm ||
      location.address match $searchTerm ||
      shortDescription match $searchTerm ||
      academicInfo.affiliation match $searchTerm ||
      academicInfo.accreditation match $searchTerm ||
      academicInfo.facilities[] match $searchTerm
    ))
  ] | order(
    select(
      $searchTerm != "" && name match $searchTerm => 0,
      $searchTerm != "" && location.city match $searchTerm => 1,
      2
    ) asc,
    isFeatured desc,
    _createdAt desc
  ) {
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