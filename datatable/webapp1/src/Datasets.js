export default [
  {
    id: 1,
    title: 'Project BISmark',
    keywords: 'bismark, throughput, broadband, computer networks, speedtest, traceroute, noiselab',
    formats: 'csv, psql',
    shortdesc: 'Broadband Internet Service Benchmark Dataset Collection',
    compressedsize: '8GB',
    uncompressedsize: 'Unknown',
    datestart: '01-2006',
    dateend: '12-2019',
    dateapprox: true,
    images: ['http://projectbismark.net.s3-website.us-east-2.amazonaws.com/poster20191017.jpg'],
    sampledataurl: 'http://projectbismark.net.s3-website.us-east-2.amazonaws.com/csv/samples/',
    contact: 'Prof. Nick Feamster',
    description: 'Longitudinal internet performance data collected from broadband users (volunteers), mostly located in US. Measurements are extracted from the output of standard linux tools (eg. netperf, iperf, ping, traceroute, scamper and dtg) running on dedicated programmable routers (OpenWRT) and Single Board Computers (SBC).',
    refurls:{
      primary: [
        {
          type: "Primary Location",
          url: "http://projectbismark.net",
          metatags_enable: true,
          metatags_url: "http://projectbismark.net",
          metatags_title: "Broadband Internet Service Benchmark",
          metatags_description: "Project BISmark is an open source, open data, neutral platform for active internet performance monitoring",
          metatags_image: "http://projectbismark.net.s3-website.us-east-2.amazonaws.com/poster20191017.jpg",
        }
      ],
      secondary: [
        {
          type: "General Documention and Guidelines",
          url: "https://github.com/projectbismark",
          metatags_enable: true,
          metatags_url: "https://github.com/projectbismark",
          metatags_title: "projectbismark · GitHub",
          metatags_description: "Projectbismark has 21 repositories available. Follow their code on GitHub.",
          metatags_image: "https://avatars0.githubusercontent.com/u/1072883?s=280&v=4",
        },
        {
          type: "Alternative Data Location (UChicago)",
          title: "MySpeedTest Dataset",
          description: "MySpeedTest Android App Dataset",
          url: "(\"parkscluster\").cs.uchicago.edu:/data/gmartins/myspeedtest",
          metatags_enable: false,
        },
        {
          type: "Media Coverage",
          title: "CDAC Blog Post",
          description: "Measuring the Effects of the COVID-19 Pandemic on Broadband Access Networks to Inform Robust Network Design | CDAC",
          url: "https://cdac.uchicago.edu/broadband",
          metatags_enable: false,
        },
        {
          type: "Media Coverage",
          description: "WSJ testing shows typical U.S. households don’t use most of their bandwidth while streaming and get marginal gains from upgrading speeds",
          url: "https://www.wsj.com/graphics/faster-internet-not-worth-it/",
          metatags_enable: true,
          metatags_url: "https://www.wsj.com/graphics/faster-internet-not-worth-it/",
          metatags_title: "The Truth About Faster Internet: It’s Not Worth It",
          metatags_description: "WSJ testing shows typical U.S. households don’t use most of their bandwidth while streaming and get marginal gains from upgrading speeds",
          metatags_image: "https://si.wsj.net/public/resources/images/OG-DB403_201908_SOC_20190815130245.png",
        },
        {
          type: "Media Coverage",
          title: "Media Coverage",
          url: "https://www.forbes.com/sites/roslynlayton/2019/08/31/the-agenda-behind-the-wsjs-truth-about-broadband-series/",
          metatags_enable: true,
          metatags_url: "https://www.forbes.com/sites/roslynlayton/2019/08/31/the-agenda-behind-the-wsjs-truth-about-broadband-series/",
          metatags_title: "What's Driving The WSJ’s “Truth About Broadband” Series",
          metatags_description: "There is nothing like media sensation to drive a preferred policy outcome when mainstream regulatory analysis can't.",
          metatags_image: "https://thumbor.forbes.com/thumbor/fit-in/1200x0/filters%3Aformat%28jpg%29/https%3A%2F%2Fi.forbesimg.com%2Fmedia%2Famp%2Fimages%2Fforbes-logo-dark.png"
        },
        {
          type: "Publication",
          title : 'BISmark: A Testbed for Deploying Measurements and Applications in Broadband Access Networks',
          authors : 'S. Sundaresan, S. Burnett, N. Feamster, W. de Donato',
          publisher : 'USENIX Annual Technical Conference',
          locdate : 'Philadelphia, Pennsylvania, USA. June 2014',
          url: 'https://www.usenix.org/system/files/conference/atc14/atc14-paper-sundaresan.pdf',
          metatags_enable: false,
        },
        {
          type: "Publication",
          title : 'Measuring Home Broadband Performance',
          authors : 'S. Sundaresan, W. de Donato, N. Feamster, R. Teixeira, S. Crawford, A. Pescape',
          publisher : 'Volume 55, Issue 55, Communications of the ACM',
          locdate : 'November 2012',
          url: 'http://hal.upmc.fr/docs/00/83/50/36/PDF/paper.pdf',
          metatags_enable: false,
        },
        {
          type: "Publication",
          title : 'Peering at the Internet\'s Frontier: A First Look at ISP Interconnectivity in Africa',
          authors : 'A. Gupta, M. Calder, N. Feamster, M. Chetty, E. Calandro, E. Katz-Bassett',
          publisher : 'Passive and Active Measurement Conference',
          locdate : 'Los Angeles, California, USA. March 2014',
          url: 'http://link.springer.com/chapter/10.1007%2F978-3-319-04918-2_20',
          metatags_enable: false,
        },
        {
          type: "Publication",
          title : 'Measuring Broadband Performance in South Africa',
          authors : 'M. Chetty, S. Sundaresan, S. Muckaden, N. Feamster, Enrico Calandro',
          publisher : 'ACM DEV',
          locdate : 'Cape Town, South Africa. December 2013',
          url: 'http://www1.icsi.berkeley.edu/~srikanth/docs/broadband-sa-dev4.pdf',
          metatags_enable: false,
        }
      ]
    },
  }
]
