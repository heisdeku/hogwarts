import express from 'express';
import path from 'path';
import hypernova from 'hypernova/server';
import { renderReact } from 'hypernova-react';

import App from './App';
import Header from './components/Header'
hypernova({
  devMode: true,
  getComponent(name) {
    if (name === 'App') {
      return renderReact(name, App);
    }
    return null
  },
  port: process.env.PORT || 3031,
  endpoint: '/main',

  createApplication() {
    const app = express();

    app.use(express.static(path.join(process.cwd(), 'dist')));    

    return app;
  },
});
