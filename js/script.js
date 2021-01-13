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
    ]
  }
})
