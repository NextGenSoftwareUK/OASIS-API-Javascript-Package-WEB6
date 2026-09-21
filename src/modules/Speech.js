'use strict';

const { makeOperation } = require('../core/routeHelper');

class SpeechModule {
  constructor(http) {
    this._http = http;

    // POST v1/audio/speech
    this.textToSpeech = makeOperation(http, "v1/audio", "POST", "speech");
    // POST v1/audio/transcriptions
    this.transcribe = makeOperation(http, "v1/audio", "POST", "transcriptions");
  }
}

module.exports = { SpeechModule };
