# Music Profile Website

## Description

This Music Profile Website is a central hub built with Next.js. This specific demo uses Drake as an exemplary figure. It serves as an organized platform where fans can find social media links, music tracks, videos, upcoming events, news, and other relevant information.

## Table of Contents

- [Features](#features)
- [Demo](#demo)
- [Technologies Used](#technologies-used)
- [Scripts and Dependencies](#scripts-and-dependencies)
- [Responsive Design](#responsive-design)
- [Sections](#sections)

## Features

- **Social Media Integration**: Link and display Artist's social media profiles including Facebook, Twitter, Instagram, and more.
- **Music Tracks**: Interactive carousel showcasing Artist's discography, with album-specific slides providing streaming links and built-in media player support.
- **Videos**: Responsive grid featuring YouTube videos, with an option to explore more content.
- **News**: A mockup of blog posts to share Artist's latest news and updates.

## Demo

[Live Demo](https://music-profile-site.vercel.app/)
![Screenshot](/public/images/screenshot.png)

## Technologies Used

- **Next.js**: For server-rendered applications.
- **React**: JavaScript library for UI building.
- **Styled Components**: CSS-in-JS library.
- **React-Player**: For media playback.
- **React-Slick**: Carousel component for React.
- **React Icons**: Icon library for React.
- **Other Technologies**: HTML, CSS, JavaScript, TypeScript, etc.

## Responsive Design

The site is crafted with a mobile-first approach, ensuring a seamless experience across both desktop and mobile devices. The design includes two responsive navigation bars that adapt to various screen sizes, maintaining optimal navigation and visual appeal. From the hero section that showcases the latest release to the interactive album grid and video columns, each element is carefully designed to provide an engaging and intuitive experience for the user, regardless of the device being used.

### Hero Section

The hero section stands out with its showcase of the latest release, providing buttons that link to various streaming platforms the song is available on. A play button allows visitors to listen to the full song through a built-in media player, leveraging the React Context API and react-player for a seamless listening experience.

### Music Section

Built using react-slick's slick carousel, the music section offers an interactive grid of the artist's entire album discography. Clicking on an album cover navigates to that album's slide, where streaming links and an option to play in the built-in media player are available. This offers a user-friendly way to explore the artist's complete works.

### Video Section

The video section hosts a responsive grid of two columns filled with YouTube videos, creating a visually pleasing gallery of content. A "more videos" button at the bottom leads to the artist's YouTube page, facilitating further exploration.

### News Section

A mock-up of blog posts is provided in the News section, designed to share the artist's latest updates and connect with fans. A "more posts" button at the bottom suggests the potential for a fully-fledged blog, leading to a complete archive of news and articles.

## Development Scripts

Here are the main scripts available in the `package.json` for development:

- **Development**: `next dev`
- **Build**: `next build`
- **Start**: `next start`
- **Linting**: `next lint`

## Conclusion

The Music Profile Website, exemplified through the music artist Drake, offers a comprehensive and engaging platform for fans to discover, listen, and stay updated. With its responsive design, innovative features, and modern technologies, it provides a unique online presence for the artist. Contributions and feedback are welcome, as the project continues to grow and evolve.
