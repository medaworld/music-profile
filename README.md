# Music Profile Website

This Music Profile Website is a central hub built with Next.js. It serves as an organized platform where fans can find social media links, music tracks, upcoming events, news, and other relevant information.

## Table of Contents

- [Features](#features)
- [Demo](#demo)
- [Technologies Used](#technologies-used)
- [Getting Started](#getting-started)

## Features

- **Built-in Media Player**: A built-in media player that uses the React Context API to keep track of the media state. It also integrates react-player, allowing you to easily plug in almost any type of URL (YouTube, SoundCloud, etc.) to play the audio on the media player. You are also able to browse other pages while the music continues playing.
- **Hero Section**: At the top of the page, showcasing whatever is being promoted at the moment. In this instance, I used a song with all its streaming platform links. There's also a play button that triggers the built-in media player.
- **Music Section**: A carousel displaying all album art in a grid on the first slide. Your discography is automatically organized based on the provided data. Clicking on the album art slides the carousel to that album, where streaming platform links and a play button are available.
- **News Section**: Showcases all your blog posts. The blog is seamlessly integrated with the WordPress public API, making your posts readily available.
- **Responsiveness**: Designed with a mobile-first approach, but also optimized for desktop viewing.

## Demo

Experience the live version here: [Web Profile Site Demo](https://music-profile-site.vercel.app/)
![Screenshot](/public/images/screenshot.png)

## Technologies Used

- **[Next.js](https://nextjs.org/)**: A leading React framework for building production-ready applications.
- **[Styled-components](https://styled-components.com/)**: Enables styling React components using tagged template literals.
- **[TypeScript](https://www.typescriptlang.org/)**: Enhances JavaScript by introducing static types, ensuring a more robust codebase.
- **[React](https://reactjs.org/)** & **[React DOM](https://reactjs.org/docs/react-dom.html)**: Powerful libraries for crafting efficient user interfaces.
- **[React Helmet](https://github.com/nfl/react-helmet)**: A tool for managing changes to the document head in React applications.
- **[React Icons](https://react-icons.github.io/react-icons/)**: Integrate popular icons directly into your React applications.
- **[React Player](https://github.com/CookPete/react-player)**: A flexible React media player component supporting many URL types.
- **[React Slick](https://react-slick.neostack.com/)**: A carousel component built with React.
- **[Slick Carousel](https://github.com/kenwheeler/slick)**: A highly customizable carousel plugin.
- **[IcoMoon](https://icomoon.io/)**: Provides high-quality icon fonts and SVG icons tailored for web apps.

## Getting Started

### Prerequisites

- Node.js
- Yarn or npm

### Installation

1. Clone the Repository:

   ```
   git clone https://github.com/medaworld/music-profile-site.git
   cd music-profile-site
   ```

2. Install dependencies:

   ```
   npm install
   ```

3. Customize Data:

   In utils/dataUtils.tsx, you'll find HeroPlayerTrackData, ReleasesList, and SocialMediaList. Customize these according to your requirements. For instance:

   ```
   export const SocialMediaList = [
        {
            platform: 'Instagram',
            case: 'instagram',
            icon: <Icon>&#xea92;</Icon>,
            url: 'https://www.instagram.com/YOUR_HANDLE',
        }
   ]
   ```

   Also, set up an environment variable with your WordPress subdomain. For example, if your wordpress URL is https://userabc.wordpress.com:

   ```
   NEXT_PUBLIC_WORDPRESS=userabc
   ```

4. Start the Development Server:

   ```
   npm run dev
   ```

5. Access the site by opening [http://localhost:3000](http://localhost:3000) in your browser.
