var SpeechRecognition = window.SpeechRecongnition || webkitSpeechRecognition;

const recognition = new SpeechRecognition()
recognition.lang = 'pt-br'
recognition.start()