import './style.css';

import Alpine from 'alpinejs';
import * as NostrTools from 'nostr-tools/pure';
import * as nip19 from 'nostr-tools/nip19';
import * as nip04 from 'nostr-tools/nip04';
import * as nip44 from 'nostr-tools/nip44';
import QRCode from 'qrcode';
import jsQR from 'jsqr';

// Make Alpine available globally for debugging
window.Alpine = Alpine;
window.NostrTools = {
  ...NostrTools,
  nip19,
  nip04,
  nip44,
};
window.QRCode = QRCode;
window.jsQR = jsQR;

window.appVersion = import.meta.env.VITE_APP_VERSION;

// Initialize AlpineJS
Alpine.start();
