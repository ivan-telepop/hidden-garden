export interface Project {
    title: string;
    year: number;
    description: string;
    url: string;
  }
  
  export const projects: Project[] = [
    {
      title: "Story about Georgian winery & production",
      year: 2023,
      description:
        "Geographical placement is the final thread that ensures Georgia’s viticultural relevance today.",
      url: "https://georgianwines.com/",
    },
    {
      title: "Clay, culture, and connection",
      year: 2022,
      description:
        "The Georgian terrain, gifted with a temperate climate conducive to vine cultivation, has become home to over 525 indigenous grape varieties. The famed Alazani River Valley, framed against the backdrop of the Caucasus Mountains, is a winemaking haven, with its combination of well-drained, mineral-rich soils and high altitude contributing to the distinctive flavors and aromas typical of Georgian wines.",
      url: "https://sponsorcontent.cnn.com/int/georgia-wine-agency/the-story-of-georgian-wine/",
    },
    {
      title: "Traditions & Wine in Georgia",
      year: 2021,
      description:
        "Wine writer Betsy Andrews makes the compelling case that Georgian wine is the best option for your holiday table. Georgia may be best known for its amber wines aged in traditional clay pots, or qvevri, but the country produces a broad spectrum of styles, from aromatic dry whites and delicate sparklers, to richly spiced reds. No matter what you’re serving, there is a Georgian wine fit to pair.",
      url: "https://winesgeorgia.com/grape-varieties/",
    },
  ];