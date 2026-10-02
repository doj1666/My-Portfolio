# Diojeh Portfolio

Personal portfolio website built to present my introduction, background, projects, and services in one place.

Live site: https://diojeh.vercel.app/

![Portfolio preview](public/preview1.png)

## Overview

This project is my personal portfolio. It shows who I am, the projects I have built, and the services I offer.

## Tech Stack

- React
- Vite
- JavaScript
- CSS
- Vercel

## Features

- Home section with an introduction
- About Me section
- Projects section
- Services section
- Navigation bar and footer

## Local Setup

```bash
npm install
npm run dev
```

## Project Structure

- `src/App.jsx` puts the page sections together
- `src/main.jsx` is the entry point of the app
- `src/index.css` holds the site styles
- `src/components/layout/` contains the Nav and Footer
- `src/components/sections/` contains the Home, About, Projects, Services, Skills, and Contact sections
- `src/components/ui/` contains reusable pieces: Button, AnimatedCard, ProjectCard, ServiceCard, and SocialLinks
- `src/assets/images/` stores the images imported by the components
- `public/` stores static files served as-is, such as the favicon and preview images
- `vercel.json` and `vite.config.js` hold the deployment and build settings

## Purpose

I use this site to showcase my work and make it easy for others to learn more about me.
