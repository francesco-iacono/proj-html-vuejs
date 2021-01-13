var app = new Vue({
  el: '#app',
  data: {
    logos: [
      'img/client-logo-01.png',
      'img/client-logo-02.png',
      'img/client-logo-03.png',
      'img/client-logo-04.png',
      'img/client-logo-05.png',
      'img/client-logo-06.png',
      'img/client-logo-07.png'
    ],
    courses: [
      {
        price: '$40.00',
        course: 'Learning to Write as a Professional Author',
        lessons: '20 Lessons',
        students: '50 Students',
        img: 'img/course-02-480x298.jpg'
      },
      {
        price: 'Free',
        course: 'Customer-centric Info-Tech Strategies',
        lessons: '24 Lessons',
        students: '769 Students',
        img: 'img/stock-full-hd-03-480x298.jpg'
      },
      {
        price: '$19.00',
        course: 'Open Programming Courses for Everyone: Python',
        lessons: '17 Lessons',
        students: '62 Students',
        img: 'img/stock-full-hd-04-480x298.jpg'
      },
      {
        price: '$26.00',
        course: 'Academic Listening and Note-taking',
        lessons: '14 Lessons',
        students: '67 Students',
        img: 'img/stock-full-hd-06-480x298.jpg'
      },
      {
        price: '$39.00',
        course: 'Master jQuery in a Short Period of Time',
        lessons: '6 Lessons',
        students: '51 Students',
        img: 'img/course-featured-image-01-480x298.jpg'
      },
      {
        price: '$39.00',
        course: 'Introduction to Javascript for Beginners',
        lessons: '14 Lessons',
        students: '76 Students',
        img: 'img/stock-full-hd-05-480x298.jpg'
      }
    ],
    tutorings: [
      {
        img: 'img/home-2-image-box-01.png',
        name: 'Customize Preferences',
        description: 'Learners are given the right to arrange and customize their study schedule and timetable based on preferences.',
        link: 'Start here'
      },
      {
        img: 'img/about-us-02-image-box-02.png',
        name: 'Cloud Storage',
        description: 'You can store online lessons via online cloud or download to your device and revise lessons on the way.',
        link: 'Get Free Quote'
      },
      {
        img: 'img/home-2-image-box-03.png',
        name: 'Multimedia Channels',
        description: 'We provide study materials with various formats: video, audio, slides, doc, prints, books and applications.',
        link: 'Start now'
      }
    ],
    testimonials: [
      {
        name: 'Florence Themes',
        position: '/ Multimedia Admin',
        title: "It's a choice of quality for people with special needs",
        review: "I'm a very strict person so I require everything to be organized and neat. Then, I'll be able to make things right and shine. MaxCoach guys just got me.",
        image: 'img/testimonial-avata-03.jpg'
      },
      {
        name: 'Mina Hollace',
        position: '/ Freelancer',
        title: 'High level of efficiency and scientific teaching methods',
        review: 'I am free to learn at my own pace, follow my own schedule and choose the subject I want to learn from the syllabus. Great study portal for people like me.',
        image: 'img/testimonial-avata-02.jpg'
      },
      {
        name: 'Madley Pondor',
        position: '/ IT Specialist',
        title: 'Professional team of specialists and passionate mentors at reach',
        review: 'I need to get a certification for English proficiency and MaxCoach is my best choice. Their tutors are smart and professional when dealing with students.',
        image: 'img/testimonial-avata-04.jpg'
      }
    ],
    dataBase: [
      {
      title: 'Successfully trained',
      number: '1790',
      info: 'ENROLLED LEARNERS'
      },
      {
      title: 'Proudly Received',
      number: '19',
      info: 'COUNTRYWIDE AWARDS'
      },
      {
      title: 'Firmly Established',
      number: '24',
      info: 'LOCAL BRANCHES'
      },
      {
      title: 'Getting Featured on',
      number: '1090',
      info: 'BLOG POSTS'
      },
    ],
    linkBlogs: [
      'Become a Better Blogger: Content Planning',
      'Promoting Your Online Business on Pinterest',
      'Gamification and Game-Based Learning',
      'Designing an Online Course from Expert’s Perspective',
      'Why Online Courses Are the Future of Education'
    ],
    blogs: [
      {
        category: 'ARTIST',
        postTitle: 'Brush Strokes Energize Trees in Paintings',
        postDate: 'May 15, 2020',
        postView: '688 views',
        cover: 'artist-blog-03-480x352.jpeg'
      },
      {
        category: 'ARTIST',
        postTitle: 'Pocket-Sized Notebooks Hold Minature Paintings',
        postDate: 'May 15, 2020',
        postView: '603 views',
        cover: 'artist-blog-01-480x352.jpg'
      }
    ]
  }
})
