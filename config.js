const config = {
  property: {
    streetAddress: "1768 Coleman Crescent",
    city: "North Dundas",
    cityStateZip: "North Dundas, ON K0E 1S0",
    heroSubtitle: "Country Living Close to Amenities. Large with room to grow. Incredible outdoor space: multi-level deck, garden shed, fire pit, and surrounded by mature trees. Register to receive the complete Home & Neighbourhood Info Package: branded tour, floor plan, photos, and more.",
    backgroundImageUrl: "https://api.typeform.com/responses/files/0d2dd2402e79912bbff83a5076d7c9374f697ff5a50d34eb909bf775f030f986/8_web_or_mls_DSC00804.jpg"
  },
  realtor: {
    fullName: "Driscoll-Peca Team",
    title: "REALTOR®",
    phone: null,
    email: "ryan@driscollpeca.com",
    bio: "",
    photoUrl: null,
    social: {
      facebook: "https://www.facebook.com/driscollpecateam",
      instagram: "https://instagram.com/ae.parks",
      website: "https://driscollpeca.com/mylistings.html/listing.x12272690-1768-coleman-crescent-north-dundas-k0e-1s0.106314593"
    }
  },
  brokerage: {
    name: "Real Broker LTD",
    logoUrl: null,
    address: "218 Brant Avenue, Brantford, ON N3T 3H9"
  },
  openHouse: {
    eventDate: "2025-07-13",
    bundleItems: [
      {
        icon: "fas fa-link",
        text: "Property Listing URL: https://driscollpeca.com/mylistings.html/listing.x12272690-1768-coleman-crescent-north-dundas-k0e-1s0.106314593"
      },
      {
        icon: "fas fa-map",
        text: "Branded Media: https://sites.ground2airmedia.com/sites/1768-coleman-crescent-mountain-on-k0e-1s0-17491054/branded"
      },
      {
        icon: "fas fa-ruler-combined",
        text: "Floor Plan: https://sites.ground2airmedia.com/sites/1768-coleman-crescent-mountain-on-k0e-1s0-17491054/branded#&gid=1&pid=2"
      },
      {
        icon: "fas fa-video",
        text: "Virtual Tour: https://youtube.com/shorts/GIhhtUV7luo"
      },
      {
        icon: "fas fa-bed",
        text: "Beds: 3+1"
      },
      {
        icon: "fas fa-bath",
        text: "Baths: 3"
      },
      {
        icon: "fas fa-dollar-sign",
        text: "Listing Price: $849,900"
      },
      {
        icon: "fas fa-home",
        text: "Home Type: Freehold Single Family"
      },
      {
        icon: "fas fa-tree",
        text: "Key Features: Private, mature 1 acre lot, beautiful updated and modern home, 3 spacious bedrooms up and option for 1 down, backyard that will WOW."
      },
      {
        icon: "fas fa-users",
        text: "Neighbourhood: Family oriented, beautiful park and splash pad, country living but close to everything."
      }
    ]
  },
  meta: {
    pageTitlePrefix: "🏡 Driscoll-Peca Team Open House",
    navBrandLogoText: "OPEN HOUSE",
    privacyPolicyLink: "https://driscollpeca.com/privacy.html"
  },
  settings: {
    adminWebhookUrl: "https://n8n.salesgenius.co/webhook/openhouseupdate",
    visitorWebhookUrl: "https://n8n.salesgenius.co/webhook/openhouse",
    confettiColors: [
      "#839a39",
      "#ececec",
      "#bfb49f",
      "#556558",
      "#c0a064"
    ]
  },
  modalQuestions: [
    {
      id: "agent_status",
      questionText: "Are you currently exploring homes with a real estate agent?",
      options: [
        { value: "committed", text: "Yes, I'm committed to an agent." },
        { value: "not_committed", text: "No, I'm not committed to an agent." },
        { value: "gathering_info", text: "Just gathering information at this stage." }
      ]
    },
    {
      id: "interest_level",
      questionText: "How interested are you in properties like this?",
      options: [
        { value: "very_interested", text: "Very interested, actively looking." },
        { value: "somewhat_interested", text: "Somewhat interested, keeping options open." },
        { value: "just_browsing", text: "Just browsing for now." }
      ]
    },
    {
      id: "neighborhood_engagement",
      questionText: "How do you usually enjoy the neighborhood?",
      options: [
        { value: "resident_explorer", text: "I live here and love exploring locally." },
        { value: "considering_move", text: "I'm considering moving to this area." },
        { value: "just_visiting", text: "Just visiting for the open house." }
      ]
    },
    {
      id: "feature_attraction",
      questionText: "What feature attracted you to this home?",
      options: [
        { value: "design_layout", text: "The design and layout." },
        { value: "location_neighborhood", text: "The location and neighborhood." },
        { value: "home_price", text: "The price of the home." }
      ]
    }
  ],
  deploymentInfo: {
    repoName: "Open-House-885",
    repoUrl: "https://github.com/arslvn93/Open-House-885",
    tag: "Open House 1768 Coleman Crescent",
    netlifyUrl: null,
    siteId: "3b632ba3-c7c8-4ef4-9dc6-57e0ec68002e"
  }
};