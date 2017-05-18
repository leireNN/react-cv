import React, { Component } from 'react';
import I18n from 'react-native-i18n';

import en from './en.js';
import es from './es.js';

I18n.fallbacks = true;

I18n.translations = {
  en,
  es
};

I18n.setLocale = (lang) => {I18n.locale = lang};

export default I18n;
