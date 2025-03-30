<div align="center">

# Montgomery Presbyterian Church EM Website ![Website](https://img.shields.io/badge/Website-white?style=for-the-badge)

![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white)
![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)
![Threejs](https://img.shields.io/badge/threejs-black?style=for-the-badge&logo=three.js&logoColor=white)
![Framer](https://img.shields.io/badge/Framer-black?style=for-the-badge&logo=framer&logoColor=blue)
![Vite](https://img.shields.io/badge/vite-%23646CFF.svg?style=for-the-badge&logo=vite&logoColor=white)
![CSS3](https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white)
![HTML5](https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white)

[Purpose](#purpose) •
[Demo](#demo) •
[Tech Stack](#tech-stack) •
[Lessons Learned](#lessons-learned)

</div>

## Purpose

- This website was created to serve as another checkpoint for my skillset and growth as a developer. Every so often, I will revamp my portfolio in some way to show myself (and others), how much I've grown in a set amount of time.

## Demo

<p align="center">
    <img src="./screenshots/DEMO.gif" width="738" />
</p>


## Screenshots

<h3 align="center">Landing Page<h3>

<p align="center">
    <img src="./screenshots/LANDING.png" alt="landing page" width="738">
</p>

<h3 align="center">About me Section<h3>

<p align="center">
    <img src="./screenshots/ABOUT.png" alt="about me section" width="738">
</p>

<h3 align="center">Experiences Section<h3>

<p align="center">
    <img src="./screenshots/EXPERIENCE.png" alt="experiences section" width="738">
</p>

<h3 align="center">Projects Section<h3>

<p align="center">
    <img src="./screenshots/PROJECTS.png" alt="projects section" width="738">
</p>

<h3 align="center">Contact Me Section<h3>

<p align="center">
    <img src="./screenshots/CONTACT.png" alt="contact me section" width="738">
</p>


## Tech Stack

| Tech Name  | Home Page               |
| ---------- | ----------------------- |
| TypeScript | <https://www.typescriptlang.org/>  |
| React      | <https://reactjs.org/>  |
| Three.js (react-three-fiber)      | <https://r3f.docs.pmnd.rs/getting-started/introduction>  |
| Framer Motion | <https://motion.dev/>  |
| Lenis | <https://lenis.darkroom.engineering/>  |
| Vite       | <https://vite.dev/>   |

## Lessons Learned
<p>
It feels like it's been quite some time since I've worked on my previous portfolio, but crazily enough, it seems like it's only really been a year! I guess in some way it is timely that I'm creating a new version after a year since my last one, as well as marking 2 years since I've been working professionally as a web developer.
</p>
<p>
When I first got ready to make this website, I really wanted to focus on the idea of not looking like an amateur. What I mean by this, is that my previous website had a bit too much flair, with little substance. It wasn't exactly "user-friendly" and it just gave off the vibe of a junior dev who wanted to put all their skills in one package, which is not a bad thing by any means, but lacking the skillset to combine those skills into a cohesive experience is what sets apart the junior dev from the professional. So, for this website, I wanted to see how I could make a design that really was seamless yet caught your attention. I decided to go back to a "one page scroller" format and decided to keep it relatively short with only the necessary content. The start of any user-friendly website, is of course the design. I spent hours in Figma trying to figure out the best "in your face, but not" design and at some point I did get to a product I was happy with. Funnily enough, I don't think anything I made in Figma was a part of my finalized product. The base is similar, but as I developed the site, I realized it was lacking in some ways. I found myself slowly progressing towards that "amateur" direction. So, I took an extra unknown, but definitely absurd, amount of hours revamping my "completed" product and getting it to where it is now today. Anyway, that's enough intro, we can get right into the lessons learned.
</p>
<p>
  The first thing I'd like to say, is that "less is more" definitely comes into play with web development - with a website that is meant to functionally serve a purpose, but not as much when it comes to designing a frontend developer portfolio. This time around, I spent a lot of time getting familiar with Framer Motion and Three.js, both super prevalent and extremely daunting libraries that are honestly a must have in most [awwward](https://www.awwwards.com/) winning websites. I won't go into what features they have, but I'll just talk about my experience using them. Right off the bat, Framer Motion was super simple to use, yet has such a deep complexity for those who want to challenge themselves to reach the skill ceiling of this time sink of a library. Doing spring animations and simple transform/translate animations are a breeze with the motion prefix that you can add to almost any JSX tag. All of my animations were done using Framer Motion and I will absolutely be using it again in my future projects. Three.js on the other hand was extremely complex. It took me ages just to figure out what direction my lights should be pointing and how to properly place elements on top of my scenes. There really is so many complexities in Three.js but it is extremely rewarding. I was awed honestly to see what was possible with TS/JS. Although Three.js may not fit every website I may work on, it will be there in my back pocket for whenever I do want to add the major "wow" factor in my websites.
</p>
<p>
  I do have a regret, which is utilizing Vite for this project. I was really on the fence between utilizing Vite or Next.js, and I really should've gone with Next.js, but I didn't realize how big of a project this was going to turn out to be. A lot of my css files began to clash and I'm sure I could've had a better dev experience if I took the time to set up my Vite environment properly, but once again, I underestimated the density of this project overall. I definitely did learn a lot about "componentization" techniques and how I could better improve the coding architecture of my projects in the future. My directory is pretty messy, but I think utilizing something like Next.js could help in that aspect as well. No flak on Vite, it's a great React starter, and I'm pretty sure I used it for my last portfolio too, but I will definitely set my sites on something like Next.js next time. I almost forgot to mention, but big shoutout to Lenis the smooth scrolling library. It's awesome. Not meant for every website, but it does give a little bit of a *luxurious* feel to any website.
</p>
<p>
  Lastly, this is not exactly coding related per say, but I really do think time management is important. Not the procrastinating time management, but actually overworking. I finished this project within 2 weeks-ish and definitely logged over (roughly) 120 hours. That's an average of 8.5 hours a day. I really had days I would work nonstop and it was not only unhealthy, but was about to lead to some severe burnout. I was wrapping up the contact view and I was starting to get to that point where I just wanted this project to be over with. So, lesson learned, space it out, don't overdo yourself so you don't get tired of your project. 
</p>
<p>Overall, I really enjoyed working on this project and the time spent on it definitely reflects that. I hope that some people (recruiters and hiring managers particularly) will be able to look at my website and see how much I've grown and how much more I aspire to learn and develop myself as a web developer. Thanks for sticking around (though I don't know if anyone would ever read this), and I'm already looking forward to my next project which is starting up soon!</p>
<p>I'm sure I'll come back to this in however long, and think it was amateurish just like my previous experiences, but hey, that's the beauty of the process and I'm all here for it.</p>
