export interface ITestimonial {
  name: string
  testimonial: string
}

export interface IIndexPageData {
  title: string
  text: {
    html: string
  }
  button: string
  testimonials_title: string
  testimonials: ITestimonial[]
  background_image: {
    url: string
    alt: string
  }
}

export interface IIndication {
  indication: string
}

export interface ITracks {
  track_icon: 'brain' | 'coach' | 'briefcase'
  track_title: string
  track_text: {
    html: string
  }
}

export interface IMethodologies {
  methodology_icon: string
  methodology_title: string
}

export interface IWayOfWorkingAndTracksData {
  title: string
  intro: {
    html: string
  }
  indications: IIndication[]
  intake_title: string
  intake_text: {
    html: string
  }
  tracks_title: string
  tracks_text: {
    html: string
  }
  tracks: ITracks[]
  methodologies_title: string
  methodologies_text: {
    html: string
  }
  methodologies: IMethodologies[]
}

interface IPartnerLogo {
  partner_logo: {
    url: string
    alt: string
  }
  size: 'normal' | 'small'
  url: string
}

interface ICTALinks {
  label: string
  url: string
}

export interface ICTA {
  title: string
  text: {
    html: string
  }
  links: ICTALinks[]
  image: {
    url: string
    alt: string
  }
}

export interface IOncologyPageData {
  header_image: {
    url: string
    alt: string
  }
  title: string
  intro: {
    html: string
  }
  testimonial: string
  testimonial_author: string
  text: {
    html: string
  }
  partner_logos: IPartnerLogo[]
}

export interface IAboutDescription {
  paragraph: string
}

export interface IPrices {
  group: string
  price: string
}

export interface IPricesAndAllowances {
  title: string
  text: {
    html: string
  }
  prices: IPrices[]
  business_announcement: {
    html: string
  }
  allowances_title: string
  allowances_text: {
    html: string
  }
  partner_logos: IPartnerLogo[]
}

export interface IAboutPageData {
  name: string
  description: {
    html: string
  }
  partner_logos: IPartnerLogo[]
  profile_image: {
    alt: string
    url: string
  }
  text: {
    html: string
  }
  title: string
}

export interface IAddress {
  address_line_one: string
  address_line_two: string
  address_title: string
  map_url: string
}

export interface IContactFooter {
  label: string
  url?: string
}

export interface IContactLink {
  label: string
  url: string
}

export interface IContactPageData {
  addresses: IAddress[]
  footer: IContactFooter[]
  links: IContactLink[]
  text: string
  title: string
  background_image: {
    url: string
    alt: string
  }
}

export interface IComplaintsPageData {
  title: string
  text: {
    html: string
  }
}

export interface IPrivacyPageData {
  title: string
  text: {
    html: string
  }
}

export interface ITermsChapter {
  chapter_title: string
  chapter_text: {
    html: string
  }
}

export interface ITermsPageData {
  title: string
  text: {
    html: string
  }
  chapters: ITermsChapter[]
}
