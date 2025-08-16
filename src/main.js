import './style.css';

import Alpine from 'alpinejs';
import * as NostrTools from 'nostr-tools/pure';
import QRCode from 'qrcode';

// Make Alpine available globally for debugging
window.Alpine = Alpine;
window.NostrTools = NostrTools;
window.QRCode = QRCode;

window.appVersion = import.meta.env.VITE_APP_VERSION;

// Initialize AlpineJS
Alpine.start();
