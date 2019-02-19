global.fetch = require('node-fetch');
const config = require('universal-config');

const Unsplash = require('unsplash-js').toJson;
const express = require('express');

const unsplash = new Unsplash({
    applicationId:config.get('APPLICATI')
})