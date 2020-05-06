export default [
  {
    id: 1,
    title: 'Project BISmark',
    keywords: 'bismark, throughput, broadband, computer networks, speedtest, noiselab',
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
          note: "Primary Location",
          url: "http://projectbismark.net.s3-website.us-east-2.amazonaws.com/",
          metatags: "auto"
        }
      ],
      secondary: [
        {
          type: "link",
          title: "General Documention and Guidelines",
          url: "https://github.com/projectbismark",
          metatags: "auto"
        },
        {
          type: "link",
          title: "Alternative Data Location (UChicago)",
          url: "border.cs.uchicago.edu:/mnt/gmartins/bismark",
          metatags: "auto"
        },
        {
          type: "link",
          title: "Media Coverage",
          url: "https://cdac.uchicago.edu/broadband",
          metatags: "auto"
        },
        {
          type: "link",
          title: "Media Coverage",
          url: "https://www.wsj.com/graphics/faster-internet-not-worth-it/",
          metatags: "auto"
        },
        {
          type: "link",
          title: "Media Coverage",
          url: "https://www.forbes.com/sites/roslynlayton/2019/08/31/the-agenda-behind-the-wsjs-truth-about-broadband-series/",
          metatags: "auto"
        },
        {
          type: "paper",
          title : 'BISmark: A Testbed for Deploying Measurements and Applications in Broadband Access Networks',
          authors : 'S. Sundaresan, S. Burnett, N. Feamster, W. de Donato',
          publisher : 'USENIX Annual Technical Conference',
          locdate : 'Philadelphia, Pennsylvania, USA. June 2014',
          url: 'https://www.usenix.org/system/files/conference/atc14/atc14-paper-sundaresan.pdf'
        },
        {
          type: "paper",
          title : 'Measuring Home Broadband Performance',
          authors : 'S. Sundaresan, W. de Donato, N. Feamster, R. Teixeira, S. Crawford, A. Pescape',
          publisher : 'Volume 55, Issue 55, Communications of the ACM',
          locdate : 'November 2012',
          url: 'http://hal.upmc.fr/docs/00/83/50/36/PDF/paper.pdf'
        },
        {
          type: "paper",
          title : 'Peering at the Internet\'s Frontier: A First Look at ISP Interconnectivity in Africa',
          authors : 'A. Gupta, M. Calder, N. Feamster, M. Chetty, E. Calandro, E. Katz-Bassett',
          publisher : 'Passive and Active Measurement Conference',
          locdate : 'Los Angeles, California, USA. March 2014',
          url: 'http://link.springer.com/chapter/10.1007%2F978-3-319-04918-2_20'
        },
        {
          type: "paper",
          title : 'Measuring Broadband Performance in South Africa',
          authors : 'M. Chetty, S. Sundaresan, S. Muckaden, N. Feamster, Enrico Calandro',
          publisher : 'ACM DEV',
          locdate : 'Cape Town, South Africa. December 2013',
          url: 'http://www1.icsi.berkeley.edu/~srikanth/docs/broadband-sa-dev4.pdf'
        }
      ]
    },
  }
]
