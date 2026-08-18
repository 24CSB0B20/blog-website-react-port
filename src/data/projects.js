import quantSimImg from '../assets/quantsim.jpg'
import waralangImg from '../assets/waralang.png'
import togetherNetImg from '../assets/togethernet.jpg'
import nitSyncImg from '../assets/nitsync.png'

export const projects = [
  {
    id: 'quantsim',
    title: 'QuantSim',
    date: 'May 2024 - Jun 2024',
    description: 'A websocket-based trading simulator with real-time trade cost modelling.',
    techStack: ['C++', 'CMake', 'Boost.Beast'],
    image: quantSimImg,
    link: 'https://github.com/SergeantQuickscoper/trade-simulator-cpp',
    details: [
      'Used C++ with CMake, Boost.Beast websockets for streaming quotes from exchanges, and pthreads for multithreading.',
      'Integrated the Almgren-Chriss model for market impact calculation and quantile regression for slippage prediction.',
    ],
  },
  {
    id: 'waralang',
    title: 'waralang',
    date: 'Mar 2026 - Present',
    description: 'A 2-D esoteric programming language and interpreter written from scratch in pure C.',
    techStack: ['C', 'Compiler', 'Esolangs'],
    image: waralangImg,
    link: 'https://github.com/SergeantQuickscoper/waralang',
    details: [
      'Inspired by other esoteric languages like Befunge and themed around computer architecture and the NITW campus.',
      'Designed a custom file format to allow for creation of user modules, with the interpreter and tooling all written in pure C.',
    ],
  },
  {
    id: 'togethernet',
    title: 'TogetherNet',
    date: 'Aug 2025 - Nov 2025',
    description: 'An Android app for offline communication without internet or cell towers.',
    techStack: ['Java', 'BLE', 'SQLite'],
    image: togetherNetImg,
    link: 'https://github.com/SergeantQuickscoper/together-net',
    details: [
      'Used Bluetooth Low Energy (BLE) for mobile ad-hoc mesh networking, built with Java, Android Studio and SQLite.',
      'Designed message packet formats for BLE channels to store message information and metadata for routing.',
    ],
  },
  {
    id: 'nit-sync',
    title: 'NIT Sync',
    date: 'Nov 2024 - Jan 2025',
    description: 'A scheduling app for NIT Warangal students and class representatives.',
    techStack: ['React Native', 'Express', 'PostgreSQL'],
    image: nitSyncImg,
    link: 'https://github.com/SergeantQuickscoper/nit-sync',
    details: [
      'Used React Native, Expo, Firebase Cloud Messaging, Express.js, Socket.io and PostgreSQL.',
      'Hosted on AWS EC2 with file storage via S3, with beta versions released on the Google Play Store and App Store.',
    ],
  },
]